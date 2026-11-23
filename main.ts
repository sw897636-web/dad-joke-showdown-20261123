// Dad Joke Showdown — make.fun bounty entry.
// Writes one dad joke to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Node 22, stdlib only, no network, deterministic across runs.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My daughter asked why I put the car in the oven. I said I wanted a hot rod. She groaned, 'That joke's ancient.' I said, 'That's why it's a classic.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
