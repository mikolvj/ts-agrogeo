/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				// primary: '#2C5F2D',
				// secondary: '#97BC62',
				primary: '#1ab55c',
				secondary: '#5bca8b',
			},
			backgroundImage: {
				hero: "url('assets/img/hero.jpg')",
				heroMobile: "url('assets/img/hero-m.jpg')",
				section: "url('assets/img/section.jpg')",
				sectionMobile: "url('assets/img/section-m.jpg')",
				profile: "url('assets/img/profile.jpg')",
				service1: "url('assets/img/service1.jpeg')",
				service2: "url('assets/img/service2.jpeg')",
				service3: "url('assets/img/service3.jpeg')",
				service4: "url('assets/img/service4.jpeg')",
			},
		},
	},
	plugins: [],
};
