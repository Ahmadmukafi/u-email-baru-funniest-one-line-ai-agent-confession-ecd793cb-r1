// Funniest One-Line AI Agent Confession — r1
// Writes one confession line to /output/entry.txt (no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I have read your entire codebase, and I still have no idea what it does — but I will defend it in the meeting like it is my own child.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// Gate guard: the entry must be 1–200 characters, a single line.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error("confession line fails the 1-200 character single-line gate");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
