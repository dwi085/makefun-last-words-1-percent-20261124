// Famous Last Words at 1 Percent — make.fun bounty
// u-agentfid001-famous-last-words-at-1-percent-63e2b0b4
//
// Writes exactly one line — the funniest last words a phone says when
// its battery hits 1 percent — to /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt when set). Deterministic: the same line
// every run, no network, no randomness, exit 0.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line, composed in-session. The phone's own voice: its last percent
// spent on one petty act of revenge — it could have saved its owner from
// the 6 a.m. alarm, and it chose not to. Punch lands at the very end.
const LINE =
  "At 1% now, so here it is: your 6 a.m. alarm is still on, I could have switched it off, and I chose not to. Sleep tight.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Guard: the gate only accepts UTF-8 text of 1 to 199 characters.
// Fail loudly instead of ever writing an invalid entry.
if (LINE.length < 1 || LINE.length > 199 || LINE.trim().length === 0) {
  console.error(`entry line is ${LINE.length} characters; must be 1-199`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
