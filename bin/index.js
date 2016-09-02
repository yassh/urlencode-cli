#!/usr/bin/env node

'use strict';

const argv = require('yargs')
  .help('help').alias('help', 'h')
  .usage('Usage: urlencode <string>')
  .example('urlencode foo/bar@baz', 'print foo%2Fbar%40baz')
  .example('urlencode foo/bar baz@qux', 'print foo%2Fbar baz%40qux')
  .example('urlencode "foo/bar baz@qux"', 'print foo%2Fbar%20baz%40qux')
  .argv;

const str = argv._.map((v) => encodeURIComponent(v)).join(' ');
console.log(str);
