goal: install context-mode for Codex and verify access
key files:
- ~/.codex/config.toml
- ~/.codex/plugins/cache/context-mode/context-mode/1.0.162/
decisions:
- Used official Codex plugin path: `codex plugin marketplace add mksglu/context-mode`; `codex plugin add context-mode@context-mode`.
- Enabled `[features].plugin_hooks = true`; existing `hooks = true` kept.
- Also installed npm global `context-mode` as fallback, but npm global bin is not in current shell PATH.
commands -> results:
- `codex plugin list` -> `context-mode@context-mode installed, enabled 1.0.162`.
- MCP raw newline JSON `tools/list` against plugin `start.mjs` -> returned `ctx_execute`, `ctx_search`, `ctx_execute_file`, `ctx_index`.
- `node --check hooks/codex/*.mjs` -> all OK.
known issues:
- Current Codex session did not hot-load context-mode MCP tools; restart Codex required.
- `context-mode` binary exists at `/Users/saiaathishkarthik/.local/lib/node-v24.17.0-darwin-arm64/bin/context-mode`, but `command -v context-mode` fails in non-login shell PATH.
next:
- Restart Codex, trust plugin hooks if prompted, run `ctx stats` or `ctx doctor`.
