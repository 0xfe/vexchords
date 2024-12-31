/*
 * Vex Chords v2
 * Mohit Muthanna Cheppudira -- http://0xfe.blogspot.com
 */

import ChordBox from './chordbox';
import { POSITIONS, SHAPES, build } from './builder';

type chordboxParams = ConstructorParameters<typeof ChordBox>
type drawParams = Parameters<ChordBox['draw']>

function draw(sel: chordboxParams[0], chord: drawParams[0], opts: chordboxParams[1] = {}) {
  return new ChordBox(sel, opts).draw(chord);
}

export {
  POSITIONS, SHAPES, ChordBox, build, draw,
};
