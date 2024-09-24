/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			spacing: {
				'150': '150px',
				'200': '200px',
				'10px': '10px',
				'7.3rem': '7.3rem',
				'4.5rem': '4.5rem',
				'2.0rem': '2.0rem',
				'7.3rem': '7.3rem',
				'350': '350px',
				'70': '70px',
				'28.5rem': '28.5rem',
				'16.5rem': '16.5rem',
				'23': '23.5rem',
				'40': '40px',
				'1013': '1013px',
				'185': '185px',
				'1000': '1000px'
			},
			fontFamily: {
				suse: ['SUSE', 'sans-serif'],
			},
			colors: {},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}

