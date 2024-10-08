/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

/*import "$std/dotenv/load.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import config from "./fresh.config.ts";

await start(manifest, config);
*/

import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

const HTML = await Deno.readFile("./static/index.html");

serve(async () => {
  return new Response(HTML, {
    headers: {
      "content-type": "text/html",
    },
  });
});