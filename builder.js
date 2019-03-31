/*
 * Vex Chords
 * Mohit Muthanna Cheppudira -- http://0xfe.blogspot.com
 */

const SHAPES = {
  'M E': {
    name: 'Maj',
    chord: [[3, 2], [4, 3], [5, 3]],
    barres: [{ fromString: 6, toString: 1, fret: 1 }],
  },
  'm E': {
    name: 'm',
    chord: [[4, 3], [5, 3]],
    barres: [{ fromString: 6, toString: 1, fret: 1 }],
  },
  '7 E': {
    name: '7',
    chord: [[2, 4], [3, 2], [5, 3]],
    barres: [{ fromString: 6, toString: 1, fret: 1 }],
  },
  'm7 E': {
    name: 'm7',
    chord: [[2, 4], [5, 3]],
    barres: [{ fromString: 6, toString: 1, fret: 1 }],
  },
  'M7 E': {
    name: 'Maj7',
    chord: [[1, 'x'], [2, 1], [3, 2], [4, 2], [5, 'x'], [6, 1]],
  },
  'dim E': {
    name: 'dim',
    chord: [[1, 'x'], [3, 2], [5, 'x'], [6, 2]],
    positionText: 1,
    barres: [{ fromString: 4, toString: 2, fret: 1 }],
  },
  'm7b5 E': {
    name: 'm7b5',
    chord: [[1, 'x'], [2, 1], [3, 2], [4, 2], [5, 'x'], [6, 2]],
    positionText: 1,
  },
  'sus4 E': {
    name: 'sus4',
    chord: [],
    barres: [{ fromString: 6, toString: 1, fret: 1 }, { fromString: 5, toString: 3, fret: 3 }],
  },
  '7sus4 E': {
    name: '7sus4',
    chord: [[3, 3], [5, 3]],
    barres: [{ fromString: 6, toString: 1, fret: 1 }],
  },
  '13 E': {
    name: '13',
    chord: [[1, 'x'], [2, 4], [3, 3], [4, 2], [5, 'x'], [6, 2]],
    positionText: 1,
  },
  'M A': {
    name: 'Maj',
    chord: [[2, 3], [3, 3], [4, 3], [6, 'x']],
    barres: [{ fromString: 5, toString: 1, fret: 1 }],
  },
  'm A': {
    name: 'm',
    chord: [[2, 2], [3, 3], [4, 3], [6, 'x']],
    barres: [{ fromString: 5, toString: 1, fret: 1 }],
  },
  '7 A': {
    name: '7',
    chord: [[2, 3], [4, 3], [6, 'x']],
    barres: [{ fromString: 5, toString: 1, fret: 1 }],
  },
  'm7 A': {
    name: 'm7',
    chord: [[2, 2], [4, 3], [6, 'x']],
    barres: [{ fromString: 5, toString: 1, fret: 1 }],
  },
  'm7b5 A': {
    name: 'm7b5',
    chord: [[2, 2], [4, 2], [6, 'x']],
    barres: [{ fromString: 5, toString: 3, fret: 1 }],
  },
  'dim A': {
    name: 'dim',
    chord: [[1, 'x'], [2, 3], [3, 1], [4, 3], [5, 2], [6, 'x']],
    positionText: 1,
  },
  'M7 A': {
    name: 'Maj7',
    chord: [[2, 3], [3, 2], [4, 3], [6, 'x']],
    barres: [{ fromString: 5, toString: 1, fret: 1 }],
  },
  'sus2 A': {
    name: 'sus2',
    chord: [[3, 3], [4, 3], [6, 'x']],
    barres: [{ fromString: 5, toString: 1, fret: 1 }],
  },
  'sus4 A': {
    name: 'sus4',
    chord: [[2, 4], [3, 3], [4, 3], [6, 'x']],
    barres: [{ fromString: 5, toString: 1, fret: 1 }],
  },
  '7sus4 A': {
    name: '7sus4',
    chord: [[2, 4], [4, 3], [6, 'x']],
    barres: [{ fromString: 5, toString: 1, fret: 1 }],
  },
  '9 A': {
    name: '9',
    chord: [[1, 'x'], [2, 2], [3, 2], [4, 1], [5, 2], [6, 'x']],
    positionText: 1,
  },
  '7b9 A': {
    name: '7b9',
    chord: [[1, 'x'], [2, 1], [3, 2], [4, 1], [5, 2], [6, 'x']],
    positionText: 1,
  },
  '7#9 A': {
    name: '7#9',
    chord: [[1, 'x'], [2, 3], [3, 2], [4, 1], [5, 2], [6, 'x']],
    positionText: 1,
  },
  '13 A': {
    name: '13',
    chord: [[1, 4], [2, 4], [3, 2], [4, 4], [5, 2], [6, 'x']],
    positionText: 1,
  },
};

const POSITIONS = {
  E: {
    A: 5,
    'A#': 6,
    Bb: 6,
    B: 7,
    C: 8,
    'C#': 9,
    Db: 9,
    D: 10,
    'D#': 11,
    Eb: 11,
    E: 12,
    F: 1,
    'F#': 2,
    Gb: 2,
    G: 3,
    'G#': 4,
    Ab: 4,
  },
  A: {
    A: 12,
    'A#': 1,
    Bb: 1,
    B: 2,
    C: 3,
    'C#': 4,
    Db: 4,
    D: 5,
    'D#': 6,
    Eb: 6,
    E: 7,
    F: 8,
    'F#': 9,
    Gb: 9,
    G: 10,
    'G#': 11,
    Ab: 11,
  },
};

function build(key, string, shape) {
  const theString = string.toUpperCase();
  const position = POSITIONS[theString][key];
  const struct = SHAPES[shape];

  return {
    name: key + struct.name,
    chord: struct.chord,
    position,
    positionText: struct.positionText,
    barres: struct.barres,
  };
}

export { POSITIONS, SHAPES, build };
