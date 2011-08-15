/*
 * Vex Guitar Chord Chart Renderer.
 * Mohit Muthanna Cheppudira -- http://0xfe.blogspot.com
 *
 * Requires: Raphael JS (raphaeljs.com)
 */

// Add a simple line method to Raphael.
Raphael.prototype.vexLine = function(x, y, new_x, new_y) {
  return this.path("M" + x + " " + y + "L" + new_x + " " + new_y);
}

ChordBox = function(paper, x, y, width, height) {
  this.paper = paper;
  this.x = x;
  this.y = y;

  this.width = (!width) ? 100 : width;
  this.height = (!height) ? 100 : height;
  this.tuning = ["E", "A", "D", "G", "B", "E"];
  this.num_strings = 6;
  this.num_frets = 5;

  this.metrics = {
    circle_radius: this.width / 24,
    text_shift_x: this.width / 25,
    text_shift_y: this.height / 25,
    font_size: this.width / 8,
    bar_shift_x: this.width / 24,
    bridge_stroke_width: 3,
    chord_fill: "#444"
  };

  this.spacing = this.width / this.num_strings;
  this.fret_spacing = this.height / (this.num_frets + 1);

  // Content
  this.position = 0;
  this.position_text = 0;
  this.chord = [];
  this.bars = [];
}

ChordBox.prototype.setNumFrets = function(num_frets) {
  this.num_frets = num_frets;
  this.fret_spacing = this.height / (this.num_frets + 1);
  return this;
}

ChordBox.prototype.setChord = function(chord, position, bars, position_text) {
  this.chord = chord;
  this.position = position || 0;
  this.position_text = position_text || 0;
  this.bars = bars || [];
  return this;
}

ChordBox.prototype.setPositionText = function(position) {
  this.position_text = position;
  return this;
}

ChordBox.prototype.draw = function() {
  var spacing = this.spacing;
  var fret_spacing = this.fret_spacing;

  // Draw guitar bridge
  if (this.position <= 1) {
    this.paper.vexLine(this.x, this.y - 1,
                       this.x + (spacing * (this.num_strings - 1)),
                       this.y - 1).
      attr("stroke-width", this.metrics.bridge_stroke_width);
  } else {
    // Draw position number
    this.paper.text(this.x - (this.spacing / 2) - this.metrics.text_shift_x,
                    this. y + (this.fret_spacing / 2) +
                    this.metrics.text_shift_y +
                    (this.fret_spacing * this.position_text),
                    this.position).attr("font-size", this.metrics.font_size);
  }

  // Draw strings
  for (var i = 0; i < this.num_strings; ++i) {
    this.paper.vexLine(this.x + (spacing * i), this.y,
      this.x + (spacing * i),
      this.y + (fret_spacing * (this.num_frets)));
  }

  // Draw frets
  for (var i = 0; i < this.num_frets + 1; ++i) {
    this.paper.vexLine(this.x, this.y + (fret_spacing * i),
      this.x + (spacing * (this.num_strings - 1)),
      this.y + (fret_spacing * i));
  }

  // Draw tuning keys
  var tuning = this.tuning;
  for (var i = 0; i < tuning.length; ++i) {
    var t = this.paper.text(
      this.x + (this.spacing * i),
      this.y +
      ((this.num_frets + 1) * this.fret_spacing),
      tuning[i]);
    t.attr("font-size", this.metrics.font_size);
  }

  // Draw chord
  for (var i = 0; i < this.chord.length; ++i) {
    this.lightUp(this.chord[i][0], this.chord[i][1]);
  }

  // Draw bars
  for (var i = 0; i < this.bars.length; ++i) {
    this.lightBar(this.bars[i].from_string,
                  this.bars[i].to_string,
                  this.bars[i].fret);
  }
}

ChordBox.prototype.lightUp = function(string_num, fret_num) {
  string_num = this.num_strings - string_num;

  var shift_position = 0;
  if (this.position == 1 && this.position_text == 1) {
    shift_position = this.position_text;
  }

  var mute = false;
  if (fret_num == "x") {
    fret_num = 0;
    mute = true;
  } else {
    fret_num -= shift_position;
  }

  var x = this.x + (this.spacing * string_num);
  var y = this.y + (this.fret_spacing * (fret_num - 1)) +
    (this.fret_spacing / 2);

  if (!mute) {
    var c = this.paper.circle(x, y, this.metrics.circle_radius)
    if (fret_num > 0) c.attr("fill", this.metrics.chord_fill);
  } else {
    c = this.paper.text(x, y, "X").attr("font-size", this.metrics.font_size);
  }

  return this;
}

ChordBox.prototype.lightBar = function(string_from, string_to, fret_num) {
  if (this.position == 1 && this.position_text == 1) {
    fret_num -= this.position_text;
  }

  string_from_num = this.num_strings - string_from;
  string_to_num = this.num_strings - string_to;

  var x = this.x + (this.spacing * string_from_num) - this.metrics.bar_shift_x;
  var x_to = this.x + (this.spacing * string_to_num) + this.metrics.bar_shift_x;

  var y = this.y + (this.fret_spacing * (fret_num - 1)) +
    (this.fret_spacing / 4);
  var y_to = this.y + (this.fret_spacing * (fret_num - 1)) +
    ((this.fret_spacing / 4) * 3);

  this.paper.rect(x, y, (x_to - x), (y_to - y), this.metrics.circle_radius).
    attr("fill", this.metrics.chord_fill);

  return this;
}
