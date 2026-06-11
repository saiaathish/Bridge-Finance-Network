import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, "dist");

await rm(dist, { force: true, recursive: true });
await mkdir(join(dist, "server"), { recursive: true });
await cp(join(root, "public"), join(dist, "server", "public"), { recursive: true });
await cp(join(root, "src", "worker.js"), join(dist, "server", "index.js"));
await mkdir(join(dist, "_appgen_meta"), { recursive: true });
await cp(join(root, ".openai", "hosting.json"), join(dist, "_appgen_meta", "appgarden.json"));

console.log("Built Sites artifact at dist/");
