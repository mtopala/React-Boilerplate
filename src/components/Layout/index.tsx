import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from '../Header'
import useStyles from './styles'

const AppLayout: React.FC = ({ children }) => {
	const classes = useStyles()

	return (
		<div className={classes.layout}>
			<CssBaseline />
			<Header />
			<div className={classes.contentContainer}>{children}</div>
		</div>
	)
}

export default AppLayout
