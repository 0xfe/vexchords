# Vex Chords - JavaScript Guitar Chord Generation Library

* Demo at: http://vexflow.com/vexchords
* Requires Raphael JS (http://raphaeljs.com)

## Usage

Include the file `js/chord.js`.

```js
var paper = Raphael(div_element, 150, 140);
var chord = new ChordBox(paper, 30, 30);

// Draw an open D7
chord.setChord([[1, 2], [2, 1], [3, 2], [4, 0], [5, "x"], [6, "x"]])
chord.draw()
```

Parameters to setChord:

```js
setChord(chord, position, bars, position_text)
```

* chord:          Array of [string, fret] arrays.
* position:       Position (fret number) indicator, e.g., fifth position barre.
* bars:           Barres to draw. Array of struct: {from_string: 5, to_string: 1, fret: 1}
* position_text:  Alternate text at position indicator.

## More examples

```js
# Draw a D major barre
setChord([[2, 3], [3, 3], [4, 3], [6, "x"]], 5,
         [{from_string: 5, to_string: 1, fret: 1}])

# Draw Esus4
setChord([], 0, [{from_string: 6, to_string: 1, fret: 1},
                 {from_string: 5, to_string: 3, fret: 3}]

# Make it an Fsus4
setChord([], 1, [{from_string: 6, to_string: 1, fret: 1},
                 {from_string: 5, to_string: 3, fret: 3}]
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
