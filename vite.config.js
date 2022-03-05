import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import { remarkCodeHike } from "@code-hike/mdx";
import theme from "./theme.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx({
      remarkPlugins: [[remarkCodeHike, { theme }]],
      pageExtensions: ["ts"],
    }),
  ],
  resolve: {
    alias: { "react/jsx-runtime": "react/jsx-runtime.js" },
  },
  build: {
    minify: false,
  },
  base: "/slide-aws-cdk-conference-japan/",
});
