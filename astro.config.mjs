import { defineConfig } from 'astro/config';
import ghPages from "@astrojs/github";

export default defineConfig({
  output: "static",
  site: "https://d4vgfx.com", // Il tuo dominio personalizzato!
  integrations: [ghPages()],
});
