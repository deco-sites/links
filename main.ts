/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="deno.ns" />
/// <reference lib="esnext" />

import { start } from "$fresh/server.ts";
import decoPlugin from "deco/plugins/deco.ts";
import partytownPlugin from "partytown/mod.ts";
import manifest from "./fresh.gen.ts";
import decoManifest from "./manifest.gen.ts";
import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";
import prefetchPlugin from "prefetch";

await start(manifest, {
  plugins: [
    decoPlugin(
      {
        manifest: decoManifest,
      },
    ),
    prefetchPlugin(),
    partytownPlugin(),
    twindPlugin({
      ...twindConfig,
      selfURL: new URL("./twind.config.ts", import.meta.url).href,
    }),
  ],
});
