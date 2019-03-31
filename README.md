# VexChords - Javascript Guitar Chord Renderer

VexChords renders guitar chords in your browser.

<p align="center">
  <img src='https://imgur.com/8Stl0gT.png' width=500>
  <img src='https://imgur.com/Gq9FpnU.png' width=500>
</p>

See demo: http://vexflow.com/vexchords [ [source](https://github.com/0xfe/vexchords/blob/master/static/demo.html) ]

## Install

```
npm i vexchords
```

## Usage

### Using ChordBox

```javascript
import { ChordBox } from 'vexchords';

const chord = new ChordBox('#selector', {
  // Customizations (all optional, defaults shown)
  width: 100, // canvas width
  height: 120, // canvas height

  numStrings: 6, // number of strings (e.g., 4 for bass)
  numFrets: 5, // number of frets (e.g., 7 for stretch chords)
  showTuning: true, // show tuning keys

  defaultColor: '#666', // default color
  bgColor: '#FFF', // background color
  strokeColor: '#666', // stroke color (overrides defaultColor)
  textColor: '#666', // text color (overrides defaultColor)
  stringColor: '#666', // string color (overrides defaultColor)
  fretColor: '#666', // fret color (overrides defaultColor)
  labelColor: '#666', // label color (overrides defaultColor)

  fretWidth: 1, // fret width
  stringWidth: 1, // string width

  fontFamily,
  fontSize,
  fontWeight,
  fontStyle, // font settings
  labelWeight // weight of label font
});

chord.draw({
  // array of [string, fret, label (optional)]
  chord: [
    [1, 2],
    [2, 1],
    [3, 2],
    [4, 0], // fret 0 = open string
    [5, 'x'], // fret x = muted string
    [6, 'x']
  ],

  // optional: position marker
  position: 5, // start render at fret 5

  // optional: barres for barre chords
  barres: [
    { fromString: 6, toString: 1, fret: 1 },
    { fromString: 5, toString: 3, fret: 3 }
  ],

  // optional: tuning keys
  tuning: ['E', 'A', 'D', 'G', 'B', 'E']
});
```

### Using the `draw` helper

```javascript
import { draw } from 'vexchords';

// Draw an open D7
draw('#selector', {
  chord: [[1, 2], [2, 1], [3, 2], [4, 0], [5, 'x'], [6, 'x']]
});
```

### Examples

```javascript
import * as vexchords from 'vexchords';

const sel = '#vexchords';

// Draw an open D7
vexchords.draw(sel, {
  chord: [[1, 2], [2, 1], [3, 2], [4, 0], [5, 'x'], [6, 'x']]
});

// Customize size and default color
vexchords.draw(
  sel,
  {
    chord: [[1, 2], [2, 1], [3, 2], [4, 0], [5, 'x'], [6, 'x']]
  },
  { width: 200, height: 240, defaultColor: '#745' }
);

// Set color of circles and bars only
vexchords.draw(
  sel,
  {
    chord: [[2, 3], [3, 3], [4, 3], [6, 'x']],
    position: 5,
    barres: [{ fromString: 5, toString: 1, fret: 1 }]
  },
  { strokeColor: '#8a8' }
);

// Set colors of bridge and text only
vexchords.draw(
  sel,
  {
    chord: [[1, 0], [2, 0], [6, 0]],
    position: 0,
    barres: [{ fromString: 5, toString: 3, fret: 2 }]
  },
  { bridgeColor: '#8a8', textColor: '#8a8' }
);

// Tiny chords, don't show tuning keys
vexchords.draw(
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
```

## Hacking on this repo

```bash
$ npm i
$ npm start

# Publish: first update package version in package.json
$ npm publish
```

## Upload demo

```bash
$ gcloud config set account xxx@gmail.com
$ ./upload.sh
```

## License

Copyright (c) 2010 Mohit Muthanna Cheppudira

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
