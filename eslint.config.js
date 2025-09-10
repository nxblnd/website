import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import ts from "typescript-eslint";
import astro from "eslint-plugin-astro";
import prettier from "eslint-plugin-prettier";

export default defineConfig([
    globalIgnores(["node_modules/", "dist/", ".astro/", "**/*.d.ts"]),
    js.configs.recommended,
    ts.configs.recommended,
    astro.configs.recommended,
    astro.configs["jsx-a11y-recommended"],
    {
        rules: {
            "@typescript-eslint/no-empty-object-type": [
                "error",
                { allowInterfaces: "with-single-extends" },
            ],
        },
    },
    {
        plugins: {
            prettier,
        },
    },
]);
