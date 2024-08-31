import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
	build: {
		sourcemap: false,
	},
	plugins: [react()],
	server: {
		proxy: {
			"/sitemap.xml": "https://www.merapg.com",
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
