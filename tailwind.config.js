/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [],
	safelist: ['rotate-y-180', 'backface-hidden', 'perspective-1000', 'transform-style-preserve-3d']
};
