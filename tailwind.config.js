/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				feijoa: "#B4D586",
				"river-bed": "#4C5B5C",
				contesa: "#BD6B73",
				rosewood: "#590004",
				"moon-raker": "#DCD6F7",
			},
			gridTemplateRows: {
				"mytheme-3": "repeat(3, minmax(0, 128px))",
			},
			gridTemplateColumns: {
				"mytheme-2": "repeat(2, minmax(0, 128px))",
			},
		},
	},
	plugins: [],
};
