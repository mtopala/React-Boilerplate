import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { IntlProvider } from 'react-intl'
import { ThemeProvider } from '@material-ui/core/styles'
import Layout from './components/Layout'
import { Notification } from './components/elements'
import MainRouter from './Router'
import { loadLocaleMessages } from './utils/locale'
import { locale } from './utils/date'
import theme from './assets/material-theme'

const { REACT_APP_DEFAULT_LANGUAGE = 'en' } = process.env

const App: React.FC = () => (
	<IntlProvider
		locale={REACT_APP_DEFAULT_LANGUAGE}
		messages={loadLocaleMessages(REACT_APP_DEFAULT_LANGUAGE)}
	>
		<ThemeProvider theme={theme}>
			<MuiPickersUtilsProvider utils={DateFnsUtils} locale={locale}>
				<BrowserRouter basename='/'>
					<Layout>
						<MainRouter />
						<Notification />
					</Layout>
				</BrowserRouter>
			</MuiPickersUtilsProvider>
		</ThemeProvider>
	</IntlProvider>
)

export default App
