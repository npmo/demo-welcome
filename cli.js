#!/usr/bin/env node

var argv = require('yargs')
  .usage('Usage: welcome [name]')
  .help('h').alias('h', 'help')
  .version(require('./package.json').version, 'v').alias('v', 'version')
  .example('welcome', 'Prints a welcome message for the current user')
  .example('welcome Bob', 'Prints a welcome message for Bob')
  .argv

var welcome = require('./')
var chalk = require('chalk')
var uniqueRandomArray = require('unique-random-array')
var color = uniqueRandomArray([ chalk.red, chalk.green, chalk.yellow, chalk.blue, chalk.magenta, chalk.cyan ])

console.log(welcome(color()(argv._ || process.env.USER)))
