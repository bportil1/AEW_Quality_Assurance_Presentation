import { defineConfig } from 'vite';
import svgLoader from 'vite-svg-loader';
import Icons from 'unplugin-icons/vite';
import katex from 'katex';

export default defineConfig({
	server: {
		mimeTypes: {
			'image/svg+xml': ['svg',""],
		},
	}, 
	plugins: [
		svgLoader(),
		Icons({
			
		}),
	],
});


