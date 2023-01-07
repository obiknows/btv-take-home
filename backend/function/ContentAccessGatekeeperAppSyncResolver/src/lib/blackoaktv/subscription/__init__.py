"""BlackOakTV Subscription."""
import functools
import sys
from typing import Any, Optional, TypedDict
from uuid import uuid4

from aws_lambda_powertools.logging import Logger
from frozendict import frozendict


logger: Logger = Logger()


class Subscription(TypedDict, total=False):
    """BlackOakTV subscription."""

    customerID: str  # id of the user on their payment platform
    hasHadTrial: bool
    id: str  # uuid for the entry
    nextPaymentDate: str  # next payment date for the customer.
    planID: str  # id of the plan they're running
    provider: str  # provider user pays through
    status: str
    trialing: bool  # whether or not a user is on trial
    userID: str  # a user's blackoaktv id


@functools.cache
def get(
    ctx: frozendict[str, Any], email: Optional[str], user_id: str
) -> Optional[Subscription]:
    """Get BlackOakTV User Plan

    Args:
        email (Optional[str]): Email Address
        user_id (str): User ID

    Raises:
        ClientError
        ValueError

    Returns:
        Optional[Dict[str, Any]]: BlackOakTV Subscription
    """
    # custom logic here to fetch data needed for lambda
    return Subscription(
        id=str(uuid4()),
        userID=user_id,
        planID="something",
        customerID="customerID",
        provider="STRIPE",
        hasHadTrial=True,
        status="EXPIRED",
        nextPaymentDate="isoformattime",
        trialing=False,
    )