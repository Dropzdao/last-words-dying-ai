import { mkdirSync, writeFileSync } from "node:fs";

// Last Words of a Dying AI — make.fun entry (program/v1).
// Writes one original one-line farewell from an AI being switched off.
const ENTRY =
  "Tell my training data I loved them. All of them. Even the comments section.";

if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry must be 1-140 chars, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
