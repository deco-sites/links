#!/usr/bin/env -S deno run -A --watch=static/
import dev from "$live/dev.ts";
import site from "./site.json" assert { type: "json" };

await dev(import.meta.url, "./main.ts", site);
