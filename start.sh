#!/usr/bin/env bash
if [[ $NODE_ENV == 'production' ]]; then nodemon ./bin./www; else nodemon ./bin/www; fi
