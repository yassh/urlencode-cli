#!/bin/sh

function test() {
  local INPUT=$1
  local EXPECTED=$2
  local ACTUAL=$(eval "./bin/index.js $1")
  local TESTCASE="INPUT: $INPUT, EXPECTED: $EXPECTED, ACTUAL: $ACTUAL"

  if [ $EXPECTED = $ACTUAL ]; then
    echo "✓ $TESTCASE"
    return 0
  else
    echo "✖ $TESTCASE"
    return 1
  fi
}

test 'foo_bar-baz' 'foo_bar-baz' || exit 1
test 'foo/bar@baz' 'foo%2Fbar%40baz' || exit 1
test 'foo bar baz' 'foo%20bar%20baz' || exit 1
