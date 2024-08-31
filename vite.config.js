import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import { BACKEND_URL } from "./src/api/api.js";

export default defineConfig({
	build: {
		sourcemap: false,
	},
	plugins: [react()],
	server: {
		proxy: {
			"/sitemap.xml": BACKEND_URL,
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
