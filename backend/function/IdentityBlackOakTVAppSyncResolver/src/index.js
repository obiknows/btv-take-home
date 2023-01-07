/*********************************************************************************************************************
 *  Copyright 2020 Blackoak media corp. All Rights Reserved.                                                         *
 *                                                                                                                   *
 *********************************************************************************************************************/

const rdsWrapper = require('./lib/rds.js');

const handlerImplementation = async (event, callback) => {
  const { fieldName } = event;
  let baseParams = {
    secretArn: process.env.RDS_SECRET_ARN,
    resourceArn: process.env.RDS_RESOURCE_ARN,
    database: process.env.RDS_DATABASE,
    schema: process.env.RDS_SCHEMA,
  };
  const { input } = event.arguments;
  let result;

  switch (fieldName) {
    case 'createBlackOakTVUser':
      console.log('Got an Create Request.');
      result = await rdsWrapper.resolveCreationRequest(input, baseParams);
      callback(null, result);
      break;
    case 'updateBlackOakTVUser':
      console.log('Got an Modify Request.');
      result = await rdsWrapper.resolveModifyRequest(input, baseParams);
      callback(null, result);
      break;
    default:
      callback(`Unable to resolve unknown fieldName - ${fieldName}`, null);
      break;
  }
};

const pause = (duration = 500) => new Promise((res) => setTimeout(res, duration));

const handler = async (event, context, callback, retries = 3, timeout = 1000) => {
  console.log(`REQUEST:: ${retries < 3 ? 'RETRY' : ''} ${JSON.stringify(event, null, 2)}`);

  try {
    await handlerImplementation(event, callback);
  } catch (err) {
    if (err.retryable === true && retries > 1) {
      await pause(timeout);
      await handler(event, context, callback, retries - 1, timeout * 1.5);
    }
    console.log('An error was received while attempting to perform graphql resolution. ', err.toString());
    throw err;
  }
};

module.exports = {
  handler: handler,
};
