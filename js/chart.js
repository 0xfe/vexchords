var chord_chart = [
  { section: "Open Chords",
    description: "These chords are played in open position, and generally " +
                 "include open strings.",
    chords: [
    {
      name: "C Major",
      chord: [[1, 0], [2, 1], [3, 0], [4, 3], [5, 4]],
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
      position: 5,
      bars: []
    },
    {
      name: "D Minor",
      chord: [[1, 1], [2, 3], [3, 2], [4, 0], [5, "x"], [6, "x"]],
      position: 5,
      bars: []
    },
    {
      name: "E Minor",
      chord: [[1, 0], [2, 0], [3, 0], [4, 2], [5, 2], [6, 0]],
      position: 5,
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
      chord: [[1, 0], [2, 3], [3, 1], [4, 2], [5, 2], [6, 0]],
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
      chord: [[1, 1], [2, 1], [3, 3], [4, 0], [5, "x"], [6, "x"]],
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
  },
  {
    section: "Fifth Position Chords",
    description: "These minor chords are generally played with a " +
                 "first-finger barre on the fifth fret.",
    chords: [
    {
      name: "Dm7",
      chord: [[2, 2], [4, 3], [6, "x"]],
      position: 5,
      bars: [{from_string: 5, to_string: 1, fret: 1}]
    },
    {
      name: "A Major",
      chord: [[1, 1], [2, 1], [3, 2], [4, 3], [5, 3], [6, 1]],
      position: 5,
      bars: []
    }]
  }
];

function createChordElement(chord_struct) {
  var chordbox = $('<div>').addClass('chord');
  var chordcanvas = $('<div>');
  var chordname = $('<div>').addClass('chordname');

  chordbox.append(chordcanvas);
  chordbox.append(chordname);
  chordname.append(chord_struct.name);

  var paper = Raphael(chordcanvas[0], 150, 140);
  var chord = new ChordBox(paper, 30, 30);

  chord.setChord(chord_struct.chord, chord_struct.position, chord_struct.bars);
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

