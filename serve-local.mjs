import http from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL(".", import.meta.url));
const port = Number(process.env.PORT || 4173);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".json": "application/json; charset=utf-8",
  ".ico": "image/x-icon",
};

function safeResolve(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0].split("#")[0]);
  const normalized = normalize(cleanPath).replace(/^([/\\])+/g, "");
  return join(rootDir, normalized);
}

function sendFile(res, filePath) {
  const type = mimeTypes[extname(filePath)] || "application/octet-stream";
  res.writeHead(200, { "Content-Type": type });
  createReadStream(filePath).pipe(res);
}

const server = http.createServer((req, res) => {
  let requestPath = req.url || "/";
  if (requestPath === "/") {
    requestPath = "/index.html";
  }

  let filePath = safeResolve(requestPath);
  if (existsSync(filePath) && statSync(filePath).isFile()) {
    sendFile(res, filePath);
    return;
  }

  if (!extname(filePath)) {
    const indexPath = join(filePath, "index.html");
    if (existsSync(indexPath) && statSync(indexPath).isFile()) {
      sendFile(res, indexPath);
      return;
    }
  }

  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Not found");
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Local server running at http://127.0.0.1:${port}`);
});
