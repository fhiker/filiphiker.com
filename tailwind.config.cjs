/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'roboto': ['Roboto Condensed', 'sans-serif']
		},
		extend: {
			backgroundImage: {
				'intro': "url(/assets/intro.png)",
			}
		},
	},
	plugins: [],
}
