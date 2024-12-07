import { defineConfig } from "vite";
import * as path from "path";

export default defineConfig(() => {
  return {
    root: path.resolve(__dirname, "src"),
    server: { host: "localhost", port: 3000 },
  };
});
