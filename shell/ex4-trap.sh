#!/usr/bin/env bash

_term() {
  echo 'caught SIGTERM'
  kill -TERM "$child"
}

trap _term TERM
trap -p

sleep 1d &

child=$!
wait $child

