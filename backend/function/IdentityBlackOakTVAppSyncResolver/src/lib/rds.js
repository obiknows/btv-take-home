/*********************************************************************************************************************
 *  Copyright 2020 Blackoak media corp. All Rights Reserved.                                                         *
 *                                                                                                                   *
 * This class creates and manages users for the blackoaktv family of streaming apps                                  *
 *                                                                                                                   *
 *********************************************************************************************************************/

const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

let createResolver = async (input, baseParams) => {
  // logic for lambda goes in here -- 
};

let modifyResolver = async (input, baseParams) => {
  // logic for lambda goes here
};

module.exports = {
  resolveCreationRequest: createResolver,
  resolveModifyRequest: modifyResolver,
};
