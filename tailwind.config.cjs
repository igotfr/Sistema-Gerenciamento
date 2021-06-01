const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");

module.exports = {
	mode: "aot",
	purge: {
		content: [
			"./src/**/*.{html,js,svelte,ts}",
		],
		options: {
			defaultExtractor: (content) => [
				// If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
			],
		},
		safelist: [/^svelte-[\d\w]+$/],
	},
	theme: {
		fontFamily: {
			// font-body
			body: ['Karla'],
			// font-title
			title: ['Spectral']
		},
		minWidth: {
			0: '0',
			'1/4': '25vw',
			'2/4': '50vw',
			'3/4': '75vw',
			full: '100vw'
		},
		extend: {
			colors: {
				black: {
					DEFAULT: '#000000'
				},
				white: {
					DEFAULT: '#FFFFFF'
				},
				blue: {
					dark: '#0F1A26',
					DEFAULT: '#285281',
					light: '#BFCED9'
				},
				red: {
					DEFAULT: '#FC363B',
					light: '#FFA2A5'
				},
				green: {
					DEFAULT: '#1A6A62',
					light: '#63B3AB'
				}
			},
			borderRadius: {
				md: '0.5625rem'
			},
			margin: {
				'1/12': '8%',
				'2/12': '16%',
				'3/12': '25%',
				'4/12': '33%',
				'5/12': '41.6%',
				'6/12': '50%',
				'7/12': '58.3%',
				'8/12':	'66.6%',
				'9/12':	'75%',
				'10/12': '83.3%',
				'11/12': '91.6%',
				'12/12': '100%'
			},
			padding: {
				'1/12': '8%',
				'2/12': '16%',
				'3/12': '25%',
				'4/12': '33%',
				'5/12': '41.6%',
				'6/12': '50%',
				'7/12': '58.3%',
				'8/12':	'66.6%',
				'9/12':	'75%',
				'10/12': '83.3%',
				'11/12': '91.6%',
				'12/12': '100%'
			}
		}
	},
	variants: {
		extend: {
			textColor: ['visited'],
			backgroundColor: ['active']
		}
	},
	plugins: [],
};
