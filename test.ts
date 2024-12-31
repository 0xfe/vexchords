import { draw } from './src';

const sel = document.getElementById('drawing')!;

draw(sel, {
  chord: [[1, 2], [2, 1], [3, 2], [4, 0], [5, 'x'], [6, 'x']]
});

draw(
  sel,
  {
    chord: [[1, 0], [2, 0], [6, 0]],
    position: 0,
    barres: [{ fromString: 5, toString: 3, fret: 2 }]
  },
  { bridgeColor: '#8a8', textColor: '#8a8' }
);

// Tiny
draw(
  sel,
  {
    chord: [],
    position: 1,
    barres: [
      { fromString: 6, toString: 1, fret: 1 },
      { fromString: 5, toString: 3, fret: 3 }
    ]
  },
  {
    width: 30,
    height: 40,
    strokeColor: '#745',
    showTuning: false
  }
);

draw(
  sel,
  {
    chord: [[1, 2], [2, 1], [3, 2], [4, 0], [5, 'x'], [6, 'x']]
  },
  {
    width: 50,
    height: 60,
    showTuning: false
  }
);

draw(
  sel,
  {
    chord: [[1, 2], [2, 1], [3, 2], [4, 0], [5, 'x'], [6, 'x']]
  },
  {
    width: 30,
    height: 40,
    showTuning: false
  }
);

// 7 string
draw(
  sel,
  {
    chord: [[1, 2], [2, 1], [3, 2], [4, 0], [5, 'x'], [6, 'x'], [7, 1]],
    tuning: ['B', 'E', 'A', 'D', 'G', 'B', 'E']
  },
  { numStrings: 7 }
);

// Stretch chord
draw(
  sel,
  {
    chord: [[3, 3], [4, 5], [5, 7], [6, 'x']],
    position: 5,
    barres: [{ fromString: 6, toString: 1, fret: 1 }]
  },
  { height: 140, numFrets: 8, strokeColor: '#8a8' }
);

// Small position label
draw(
  sel,
  {
    chord: [[1, 1], [2, 1], [3, 2], [4, 3], [5, 3], [6, 1]],
    position: 5,
    barres: [{ fromString: 6, toString: 1, fret: 1 }]
  },
  {
    width: 60,
    height: 80,
    showTuning: false,
    fontSize: 12
  }
);

// Big
draw(
  '#drawing2',
  {
    chord: [[1, 2, 2], [2, 1, 1], [3, 2, 3], [4, 0], [5, 'x'], [6, 'x']]
  },
  { width: 180, height: 220, defaultColor: '#745' }
);

// Bass
draw(
  '#drawing2',
  {
    chord: [[1, 2, 'F#'], [2, 3, 'D'], [3, 2, 'A'], [4, 0]]
  },
  {
    width: 180,
    height: 220,
    numStrings: 4,
    defaultColor: '#37a',
    strokeWidth: 2,
    fretWidth: 2,
    fontWeight: 'normal'
  }
);
