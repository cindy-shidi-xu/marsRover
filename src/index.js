#!/usr/bin/env node

import yargs from 'yargs';
import {moveRover} from './rover';

const filename = {
	describe: 'Name of the input file',
	demand: true,
	alias: 'f'
}
const argv = yargs.usage('Usage: -f <file>')
  .command('load', 'load a file', {
    filename: filename
  }).argv

let command = argv._;

if (command == 'load') {
  moveRover(argv.filename);
}
