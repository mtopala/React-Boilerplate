import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import useStyles from './styles'

const LandingHeader: React.FC = () => {
	const classes = useStyles()

	return (
		<div className={classes.header}>
			<RouterLink className={classes.logo} to='/'>
				Logo
			</RouterLink>
		</div>
	)
}

export default LandingHeader
