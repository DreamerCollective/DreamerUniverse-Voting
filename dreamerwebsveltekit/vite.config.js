import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from "vitest/config"

/** @type {{ssr: {noExternal: string[]}, test: {coverage: {reporter: (string)[]}}, plugins: *[]}} */
const config = {
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['three', 'troika-three-text']
	},
	define: {
		"import.meta.vitest": "undefined",
	},
	test: {
		coverage: {
			reporter: ["test", "html"]
		}
	}
};

export default config;
