import { forApp } from "$live/clients/withManifest.ts";
import type { Links } from "./apps/site.ts";

export const Runtime = forApp<Links>();
