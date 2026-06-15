const FALLBACK_HTML = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Bridge Finance Network</title></head><body><h1>Bridge Finance Network</h1><p>Static assets are unavailable in this runtime.</p></body></html>`;

function withHeaders(response) {
  const headers = new Headers(response.headers);
  headers.set("x-content-type-options", "nosniff");
  headers.set("referrer-policy", "strict-origin-when-cross-origin");
  headers.set("cache-control", response.headers.get("cache-control") || "public, max-age=0, must-revalidate");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

async function fetchAsset(request, env) {
  if (!env?.ASSETS?.fetch) return null;
  const response = await env.ASSETS.fetch(request);
  return response.status === 404 ? null : withHeaders(response);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const isAsset = /\.[a-zA-Z0-9]+$/.test(url.pathname);

    if (isAsset) {
      const assetResponse = await fetchAsset(request, env);
      if (assetResponse) return assetResponse;
    }

    const indexUrl = new URL("/index.html", url);
    const indexResponse = await fetchAsset(new Request(indexUrl, request), env);
    if (indexResponse) return indexResponse;

    return new Response(FALLBACK_HTML, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "x-content-type-options": "nosniff"
      }
    });
  }
};
