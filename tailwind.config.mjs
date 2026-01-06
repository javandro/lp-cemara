/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					primary: '#103C3B', // Deep Teal
					button: '#B07E50', // Copper
					buttonHover: '#966a42',
					dark: '#000000',
					light: '#FFFFFF',
					accent: '#103C3B',
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
			},
			transitionTimingFunction: {
				'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'soft-out': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
			}
		}
	},
	plugins: [],
}
