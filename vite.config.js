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
			"/sitemap.xml": {
				target: "https://api.merapg.com",
				changeOrigin: true,
				rewrite: (path) =>
					path.replace(/^\/sitemap\.xml/, "/sitemap.xml"),
			},
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
