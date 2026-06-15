import { createReadStream, existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const publicDir = join(root, "public");
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || undefined;

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml"
};

function safePath(pathname) {
  const decoded = decodeURIComponent(pathname);
  const clean = normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  return join(publicDir, clean);
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url || "/", `http://${request.headers.host}`);
  const requested = safePath(url.pathname === "/" ? "/index.html" : url.pathname);
  const ext = extname(requested);
  const file = existsSync(requested) && ext ? requested : join(publicDir, "index.html");

  response.setHeader("content-type", types[extname(file)] || "application/octet-stream");
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405);
    response.end("Method not allowed");
    return;
  }
  if (request.method === "HEAD") {
    response.end();
    return;
  }
  if (existsSync(file)) {
    createReadStream(file).pipe(response);
    return;
  }
  response.writeHead(404);
  response.end(await readFile(join(publicDir, "index.html"), "utf8"));
});

server.listen(port, host, () => {
  const displayHost = host || "localhost";
  console.log(`Bridge Finance Network site running at http://${displayHost}:${port}`);
});
