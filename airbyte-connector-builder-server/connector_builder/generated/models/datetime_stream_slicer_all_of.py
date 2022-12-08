# coding: utf-8

from __future__ import annotations
from datetime import date, datetime  # noqa: F401

import re  # noqa: F401
from typing import Any, Dict, List, Optional  # noqa: F401

from pydantic import AnyUrl, BaseModel, EmailStr, validator  # noqa: F401
from connector_builder.generated.models.any_of_interpolated_stringstring import AnyOfInterpolatedStringstring
from connector_builder.generated.models.any_of_min_max_datetimestring import AnyOfMinMaxDatetimestring
from connector_builder.generated.models.request_option import RequestOption


class DatetimeStreamSlicerAllOf(BaseModel):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.

    DatetimeStreamSlicerAllOf - a model defined in OpenAPI

        start_datetime: The start_datetime of this DatetimeStreamSlicerAllOf.
        end_datetime: The end_datetime of this DatetimeStreamSlicerAllOf.
        step: The step of this DatetimeStreamSlicerAllOf.
        cursor_field: The cursor_field of this DatetimeStreamSlicerAllOf.
        datetime_format: The datetime_format of this DatetimeStreamSlicerAllOf.
        config: The config of this DatetimeStreamSlicerAllOf.
        cursor: The cursor of this DatetimeStreamSlicerAllOf [Optional].
        cursor_end: The cursor_end of this DatetimeStreamSlicerAllOf [Optional].
        start_time_option: The start_time_option of this DatetimeStreamSlicerAllOf [Optional].
        end_time_option: The end_time_option of this DatetimeStreamSlicerAllOf [Optional].
        stream_state_field_start: The stream_state_field_start of this DatetimeStreamSlicerAllOf [Optional].
        stream_state_field_end: The stream_state_field_end of this DatetimeStreamSlicerAllOf [Optional].
        lookback_window: The lookback_window of this DatetimeStreamSlicerAllOf [Optional].
    """

    start_datetime: AnyOfMinMaxDatetimestring
    end_datetime: AnyOfMinMaxDatetimestring
    step: str
    cursor_field: AnyOfInterpolatedStringstring
    datetime_format: str
    config: Dict[str, Any]
    cursor: Optional[Dict[str, Any]] = None
    cursor_end: Optional[Dict[str, Any]] = None
    start_time_option: Optional[RequestOption] = None
    end_time_option: Optional[RequestOption] = None
    stream_state_field_start: Optional[str] = None
    stream_state_field_end: Optional[str] = None
    lookback_window: Optional[AnyOfInterpolatedStringstring] = None

DatetimeStreamSlicerAllOf.update_forward_refs()