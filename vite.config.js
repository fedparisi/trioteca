import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
    plugins: [laravel(["resources/js/app.jsx"]), react()],
    resolve: {
        alias: {
            "@js": resolve(__dirname, "resources/js"),
            "@scss": resolve(__dirname, "resources/css"),
            "~": resolve(__dirname, "node_modules"),
            "@routes": resolve(__dirname, "resources/routes"),
        },
    },
    server: {
        hmr: {
            host: "localhost",
        },
    },
});
