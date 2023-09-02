import { App, AppContext as AC } from "deco/mod.ts";
import website, { Props } from "apps/website/mod.ts";

import manifest, { Manifest } from "../manifest.gen.ts";

export default function Site(
  state: Props,
): App<Manifest, Props, [
  ReturnType<typeof website>,
]> {
  return {
    state,
    manifest,
    dependencies: [
      website(state),
    ],
  };
}

export type Links = ReturnType<typeof Site>;
export type AppContext = AC<Links>;
export { onBeforeResolveProps } from "apps/website/mod.ts";
