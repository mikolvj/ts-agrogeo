/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#2C5F2D',
				secondary: '#97BC62',
			},
			backgroundImage: {
				hero: "url('assets/img/hero.png')",
				section: "url('assets/img/section.png')",
			},
		},
	},
	plugins: [],
};
