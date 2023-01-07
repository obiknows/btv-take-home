"""Lambda function."""
from typing import Any, Dict, Optional, cast

from aws_lambda_powertools.event_handler import AppSyncResolver
from aws_lambda_powertools.logging import Logger, correlation_paths
from aws_lambda_powertools.utilities.typing import LambdaContext
from frozendict import frozendict

from lib.blackoaktv import subscription

app: AppSyncResolver = AppSyncResolver()  # type: ignore
logger: Logger = Logger()


@logger.inject_lambda_context(  # type: ignore
    correlation_id_path=correlation_paths.APPSYNC_RESOLVER, log_event=True
)
def handler(event: Dict[Any, Any], context: LambdaContext) -> Any:
    """Handler

    Args:
        event (Dict[Any, Any]): JSON-formatted document containing data for a function to process
        context (LambdaContext): A context object is passed to your function by Lambda at runtime

    Returns:
        Any: AppSync Resolver Response
    """
    return app.resolve(event, context)


@app.resolver(type_name="Query", field_name="getBlackOakTVUserPlan")  # type: ignore
def get_blackoak_tv_user_plan(  # pylint: disable=invalid-name, redefined-builtin
    id: str,
    email: Optional[str] = None,
) -> Optional[Dict[str, Any]]:
    """Get BlackOakTV User Subscription

    Args:
        id (str): User ID

    Returns:
        Optional[Dict[str, Any]]: BlackOakTV User Subscription
    """
    ctx: frozendict[str, Any] = frozendict(
        {"correlation_id": logger.get_correlation_id()}
    )

    return cast(Optional[Dict[str, Any]], subscription.get(ctx, email, id))
