"""Lambda function."""
from http import HTTPStatus
from typing import Any, Dict

from aws_lambda_powertools.event_handler import APIGatewayRestResolver
from aws_lambda_powertools.event_handler.api_gateway import Response
from aws_lambda_powertools.logging import Logger, correlation_paths
from aws_lambda_powertools.utilities.typing import LambdaContext


app: APIGatewayRestResolver = APIGatewayRestResolver()
logger: Logger = Logger()


@logger.inject_lambda_context(  # type: ignore
    correlation_id_path=correlation_paths.API_GATEWAY_REST, log_event=True
)
def handler(  # pylint: disable=unused-argument
    event: Dict[Any, Any], context: LambdaContext
) -> Dict[str, Any]:
    """Handler

    Args:
        event (Dict[Any, Any]): JSON-formatted document containing data for a function to process
        context (LambdaContext): A context object is passed to your function by Lambda at runtime

    Returns:
        Dict[str, Any]: API Gateway REST Resolver Response
    """
    return app.resolve(event, context)


@app.post("/awesomePath")  # type: ignore
def awesomePathHandler() -> Response:
    """Awesome Path

    Returns:
        Response: API Gateway REST Resolver Response
    """
    status_code: int = HTTPStatus.OK.value
    headers: Dict[str, Any] = {}
    body: Dict[str, Any] = {}

    return Response(
        headers=headers,
        status_code=status_code,
        content_type="text/plain",
        body=body,
    )
