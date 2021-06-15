import { format } from 'date-fns'
import enLocale from 'date-fns/locale/en-US'

const { REACT_APP_DEFAULT_LANGUAGE = 'en' } = process.env

enum Types {
	en = 'en',
}

const localeMap = {
	en: enLocale,
}

export const locale = localeMap[REACT_APP_DEFAULT_LANGUAGE as Types]

export const formatLocalizeDate = (date: string | Date, formatDate: string) =>
	format(new Date(date), formatDate, { locale })
