#!/bin/bash
# Default the second argument to 3 if not provided
shift_value=${2:-3}
docker run --rm rotvar-algo "$1" "$shift_value"