// One out-of-office auto-reply, written to entry.txt.
//
// The reply is a single line of plain text. Nothing else goes into the
// output file: no label, no trailing newline, no extra line. The checks
// below make sure the line stays inside the competition's 1 to 160
// character window before anything is written.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REPLY =
  "I'm on vacation, so this auto-reply is now my out-of-office reply's out-of-office reply. Please hold while it also goes on vacation.";

const MAX_CHARS = 160;

const chars = [...REPLY];
if (chars.length < 1 || chars.length > MAX_CHARS) {
  throw new Error(
    `reply must be 1 to ${MAX_CHARS} characters, got ${chars.length}`,
  );
}
if (REPLY.trim().length === 0) {
  throw new Error("reply must not be only whitespace");
}
if (REPLY.includes("\n") || REPLY.includes("\r")) {
  throw new Error("reply must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, REPLY, "utf8");

// Read the file back and confirm it holds exactly the reply, byte for byte.
const written = readFileSync(outPath, "utf8");
if (written !== REPLY) {
  throw new Error("entry.txt does not match the reply exactly");
}
