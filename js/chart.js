/*
 * Vex Guitar Chord Chart Renderer.
 * Mohit Muthanna Cheppudira -- http://0xfe.blogspot.com
 *
 * Requires: chord.js
 * Requires: Raphael JS (raphaeljs.com)
 */
var chord_chart = [
  { section: "Open Chords",
    description: "These chords are played in open position, and generally " +
                 "include open strings.",
    chords: [
    {
      name: "C Major",
      chord: [[1, 0], [2, 1], [3, 0], [4, 2], [5, 3]],
      position: 0,
      bars: []
    },
    {
      name: "D Major",
      chord: [[1, 2], [2, 3], [3, 2], [4, 0], [5, "x"], [6, "x"]],
      position: 0,
      bars: []
    },
    {
      name: "E Major",
      chord: [[1, 0], [2, 0], [3, 1], [4, 2], [5, 2], [6, 0]],
      position: 0,
      bars: []
    },
    {
      name: "G Major",
      chord: [[1, 3], [2, 3], [3, 0], [4, 0], [5, 2], [6, 3]],
      position: 0,
      bars: []
    },
    {
      name: "A Major",
      chord: [[1, 0], [2, 2], [3, 2], [4, 2], [5, 0], [6, "x"]],
      position: 0,
      bars: []
    },
    {
      name: "D Minor",
      chord: [[1, 1], [2, 3], [3, 2], [4, 0], [5, "x"], [6, "x"]],
      position: 0,
      bars: []
    },
    {
      name: "E Minor",
      chord: [[1, 0], [2, 0], [3, 0], [4, 2], [5, 2], [6, 0]],
      position: 0,
      bars: []
    },
    {
      name: "A Minor",
      chord: [[1, 0], [2, 1], [3, 2], [4, 2], [5, 0], [6, "x"]],
      position: 0,
      bars: []
    },
    {
      name: "C7",
      chord: [[1, 0], [2, 1], [3, 3], [4, 2], [5, 3], [6, "x"]],
      position: 0,
      bars: []
    },
    {
      name: "D7",
      chord: [[1, 2], [2, 1], [3, 2], [4, 0], [5, "x"], [6, "x"]],
      position: 0,
      bars: []
    },
    {
      name: "E7",
      chord: [[1, 0], [2, 3], [3, 1], [4, 0], [5, 2], [6, 0]],
      position: 0,
      bars: []
    },
    {
      name: "G7",
      chord: [[1, 1], [2, 0], [3, 0], [4, 0], [5, 2], [6, 3]],
      position: 0,
      bars: []
    },
    {
      name: "A7",
      chord: [[1, 0], [2, 2], [3, 0], [4, 2], [5, 0], [6, "x"]],
      position: 0,
      bars: []
    },
    {
      name: "Dm7",
      chord: [[1, 1], [2, 1], [3, 2], [4, 0], [5, "x"], [6, "x"]],
      position: 0,
      bars: []
    },
    {
      name: "Em7",
      chord: [[1, 0], [2, 3], [3, 0], [4, 2], [5, 2], [6, 0]],
      position: 0,
      bars: []
    },
    {
      name: "Am7",
      chord: [[1, 0], [2, 1], [3, 0], [4, 2], [5, 0], [6, "x"]],
      position: 0,
      bars: []
    },
    ]
  }
];

chord_shapes = {
  "M E": {
    name: "Maj",
    chord: [[3, 2], [4, 3], [5, 3]],
    bars: [{from_string: 6, to_string: 1, fret: 1}]
  },
  "m E": {
    name: "m",
    chord: [[4, 3], [5, 3]],
    bars: [{from_string: 6, to_string: 1, fret: 1}]
  },
  "7 E": {
    name: "7",
    chord: [[2, 4], [3, 2], [5, 3]],
    bars: [{from_string: 6, to_string: 1, fret: 1}]
  },
  "m7 E": {
    name: "m7",
    chord: [[2, 4], [5, 3]],
    bars: [{from_string: 6, to_string: 1, fret: 1}]
  },
  "M7 E": {
    name: "Maj7",
    chord: [[1, "x"], [2, 1], [3, 2], [4, 2], [5, "x"], [6, 1]]
  },
  "dim E": {
    name: "dim",
    chord: [[1, "x"], [3, 2], [5, "x"], [6, 2]],
    position_text: 1,
    bars: [{from_string: 4, to_string: 2, fret: 1}]
  },
  "m7b5 E": {
    name: "m7b5",
    chord: [[1, "x"], [2, 1], [3, 2], [4, 2], [5, "x"], [6, 2]],
    position_text: 1
  },
  "sus4 E": {
    name: "sus4",
    chord: [],
    bars: [{from_string: 6, to_string: 1, fret: 1},
           {from_string: 5, to_string: 3, fret: 3}]
  },
  "7sus4 E": {
    name: "7sus4",
    chord: [[3, 3], [5, 3]],
    bars: [{from_string: 6, to_string: 1, fret: 1}]
  },
  "13 E": {
    name: "13",
    chord: [[1, "x"], [2, 4], [3, 3], [4, 2], [5, "x"], [6, 2]],
    position_text: 1
  },
  "M A": {
    name: "Maj",
    chord: [[2, 3], [3, 3], [4, 3], [6, "x"]],
    bars: [{from_string: 5, to_string: 1, fret: 1}]
  },
  "m A": {
    name: "m",
    chord: [[2, 2], [3, 3], [4, 3], [6, "x"]],
    bars: [{from_string: 5, to_string: 1, fret: 1}]
  },
  "7 A": {
    name: "7",
    chord: [[2, 3], [4, 3], [6, "x"]],
    bars: [{from_string: 5, to_string: 1, fret: 1}]
  },
  "m7 A": {
    name: "m7",
    chord: [[2, 2], [4, 3], [6, "x"]],
    bars: [{from_string: 5, to_string: 1, fret: 1}]
  },
  "m7b5 A": {
    name: "m7b5",
    chord: [[2, 2], [4, 2], [6, "x"]],
    bars: [{from_string: 5, to_string: 3, fret: 1}]
  },
  "dim A": {
    name: "dim",
    chord: [[1, "x"], [2, 3], [3, 1], [4, 3], [5, 2], [6, "x"]],
    position_text: 1
  },
  "M7 A": {
    name: "Maj7",
    chord: [[2, 3], [3, 2], [4, 3], [6, "x"]],
    bars: [{from_string: 5, to_string: 1, fret: 1}]
  },
  "sus2 A": {
    name: "sus2",
    chord: [[3, 3], [4, 3], [6, "x"]],
    bars: [{from_string: 5, to_string: 1, fret: 1}]
  },
  "sus4 A": {
    name: "sus4",
    chord: [[2, 4], [3, 3], [4, 3], [6, "x"]],
    bars: [{from_string: 5, to_string: 1, fret: 1}]
  },
  "7sus4 A": {
    name: "7sus4",
    chord: [[2, 4], [4, 3], [6, "x"]],
    bars: [{from_string: 5, to_string: 1, fret: 1}]
  },
  "9 A": {
    name: "9",
    chord: [[1, "x"], [2, 2], [3, 2], [4, 1], [5, 2], [6, "x"]],
    position_text: 1
  },
  "7b9 A": {
    name: "7b9",
    chord: [[1, "x"], [2, 1], [3, 2], [4, 1], [5, 2], [6, "x"]],
    position_text: 1
  },
  "7#9 A": {
    name: "7#9",
    chord: [[1, "x"], [2, 3], [3, 2], [4, 1], [5, 2], [6, "x"]],
    position_text: 1
  },
  "13 A": {
    name: "13",
    chord: [[1, 4], [2, 4], [3, 2], [4, 4], [5, 2], [6, "x"]],
    position_text: 1
  },
};

positions = {
  "E": {
    "A":  5,
    "A#": 6,
    "Bb": 6,
    "B":  7,
    "C":  8,
    "C#": 9,
    "Db": 9,
    "D":  10,
    "D#": 11,
    "Eb": 11,
    "E":  12,
    "F":  1,
    "F#": 2,
    "Gb": 2,
    "G":  3,
    "G#": 4,
    "Ab": 4
  },
  "A": {
    "A":  12,
    "A#": 1,
    "Bb": 1,
    "B":  2,
    "C":  3,
    "C#": 4,
    "Db": 4,
    "D":  5,
    "D#": 6,
    "Eb": 6,
    "E":  7,
    "F":  8,
    "F#": 9,
    "Gb": 9,
    "G":  10,
    "G#": 11,
    "Ab": 11
  }
};

function createChordStruct(key, string, shape) {
  var string = string.toUpperCase();
  var position = positions[string][key];
  var struct = chord_shapes[shape];

  return {
    name: key + struct.name,
    chord: struct.chord,
    position: position,
    position_text: struct.position_text,
    bars: struct.bars
  }
}

function createChordElement(chord_struct) {
  var chordbox = $('<div>').addClass('chord');
  var chordcanvas = $('<div>');
  var chordname = $('<div>').addClass('chordname');

  chordbox.append(chordcanvas);
  chordbox.append(chordname);
  chordname.append(chord_struct.name);

  var paper = Raphael(chordcanvas[0], 150, 140);
  var chord = new ChordBox(paper, 14, 14, 100,116);

  chord.setChord(
      chord_struct.chord,
      chord_struct.position,
      chord_struct.bars,
      chord_struct.position_text);
  chord.draw();

  return chordbox;
}

function createSectionElement(section_struct) {
  var section = $('<div>').addClass('section');
  var section_title = $('<div>').addClass('title');
  var section_desc = $('<div>').addClass('description');

  section.append(section_title);
  section.append(section_desc);
  section_title.append(section_struct.section);
  section_desc.append(section_struct.description);

  return section;
}

function createShapeChart(keys, container, shapes, shape) {
  for (var i = 0; i < keys.length; ++i) {
    var key = keys[i];
    var section = createSectionElement({
      section: key + " Chords (" + shape + " Shape)",
      description: shape + "-Shaped barre chords in the key of " + key + "." });

    for (var j = 0; j < shapes.length; ++j) {
      var chord_elem = createChordElement(
        createChordStruct(key, shape, shapes[j]));
      section.append(chord_elem);
    }

    container.append(section);
  }
}

