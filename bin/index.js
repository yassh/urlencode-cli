#!/usr/bin/env node

'use strict';

const argv = require('yargs')
  .help('help').alias('help', 'h')
  .usage('Usage: urlencode <string>')
  .example('urlencode foo/bar@baz', 'print foo%2Fbar%40baz')
  .example('urlencode foo bar baz', 'print foo%20bar%20baz')
  .argv;

const string = argv._.join(' ');
console.log(encodeURIComponent(string));
