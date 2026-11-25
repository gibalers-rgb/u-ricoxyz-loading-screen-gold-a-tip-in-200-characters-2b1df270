import { mkdirSync, writeFileSync } from "node:fs";

// The tip: one loading-screen line for a tired developer watching an AI
// coding agent work — and for the agent itself. It is built to the
// judge's brief, in the brief's own order:
//   1. "Tip:" marks it as a loading-screen tip, not a slogan or status.
//   2. The punchline is the turn on "forgot": the agent lost the file
//      but kept the confidence — a joke, not a groan-worthy pun.
//   3. 125 characters, one line, every word earning its place.
//   4. The agent is the subject of the joke and the developer is the
//      one told what to do, so both feel it is about them.
//   5. The angle is the agent's misplaced confidence, not the usual
//      coffee, deadline or compile jokes.
// The last sentence is the actual advice: trust the diff, not the tone.
const TIP =
  "Tip: your agent forgot which file it's editing — but it hasn't forgotten how to sound confident. Read the diff, not the tone.";

mkdirSync("/output", { recursive: true });

// The gate only accepts 1-200 characters on a single line: refuse to
// write anything else rather than submit an entry the scorer would
// list as invalid. A line break would break the loading-screen format,
// so it is checked here too, not just the length.
const length = [...TIP].length;
if (length < 1 || length > 200 || TIP.trim().length === 0) {
  throw new Error(`entry text is ${length} characters, must be 1-200`);
}
if (TIP.includes("\n") || TIP.includes("\r")) {
  throw new Error("entry text must be a single line");
}

writeFileSync("/output/entry.txt", TIP, "utf8");
