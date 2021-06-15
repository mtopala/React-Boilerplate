export const loadLocaleMessages = (locale: string): Record<string, string> => {
	switch (locale) {
		case 'en':
			return require('../lang/en.json')
		default:
			return require('../lang/en.json')
	}
}
