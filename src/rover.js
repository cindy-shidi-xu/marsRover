import fs from 'fs';
import readline from 'readline';
import {movements, directions} from './movements';

const REGEX_MAX = /^\d \d$/;
const REGEX_INI_POSITION = /^\d \d \w$/;
const REGEX_MOVES = /[LM]+/i;
const SEPARATOR = ' ';


export function moveRover(filename) {
  let roverObj = {
    x: 0,
    y: 0, 
    direction: 'N',
    max_x: 0,
    max_y: 0
  }
  
  const fileLines = fs.readFileSync(filename).toString().split("\n");
  fileLines.map(line => process(line, roverObj));
  return roverObj;
}

export function process(line, roverObj) {
  setupMaxGrid(line, roverObj);
  setupInitPosition(line, roverObj);
  move(line, roverObj);
}

function updateDirection(roverObj, direction) {
  const changeDir = directions[roverObj.direction][direction];
  roverObj.direction = changeDir;
}

function updateCoordinates(roverObj) {
  const coordiantesDelta = movements[roverObj.direction];
  if ( (roverObj.max_x > roverObj.x && roverObj.max_y > roverObj.y)) {
    roverObj.x += coordiantesDelta.x;
    roverObj.y += coordiantesDelta.y;
  }
}

function isCoordinateInvalid(roverObj) {
  return (roverObj.max_x < roverObj.x || roverObj.max_y < roverObj.y) ? true : false;
}

function setupMaxGrid(line, roverObj) {
  if (line.match(REGEX_MAX)) {
    const result = line.split(SEPARATOR);
    roverObj.max_x = parseInt(result[0]);
    roverObj.max_y = parseInt(result[1]);
  }
}

function setupInitPosition(line, roverObj) {
  if (line.match(REGEX_INI_POSITION)) {
    const result = line.split(SEPARATOR);
    roverObj.x = parseInt(result[0]);
    roverObj.y = parseInt(result[1]);
    roverObj.direction = result[2];
  }
}

function move(line, roverObj) {
  let isInvalid = true;
  if (line.match(REGEX_MOVES)) {
    for (let i = 0; i < line.length; i++) {
      switch(line.charAt(i)) {
        case 'L':
        case 'R':
          updateDirection(roverObj, line.charAt(i));
          break;
        case 'M':
          updateCoordinates(roverObj);
          break;
        default:
          console.log('Invalid directoion!');
      }
    }
   console.log(`${roverObj.x} ${roverObj.y} ${roverObj.direction}`);
  }
}