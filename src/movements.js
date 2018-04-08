export const movements = {
  'N': {
    x: 0,
    y: 1
  },
  'S': {
    x: 0,
    y: -1
  },
  'E': {
    x: 1,
    y: 0
  },
  'W': {
    x: -1,
    y: 0
  }
}

export const directions = {
  'N': {
    'L': 'W',
    'R': 'E',
  },
  'S': {
    'L': 'E',
    'R': 'W',
  },
  'E': {
    'L': 'N',
    'R': 'S',
  },
  'W': {
    'L': 'S',
    'R': 'N',
  }
}