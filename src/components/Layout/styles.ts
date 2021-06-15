import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	'@global': {
		html: {
			minHeight: '100%',
			position: 'relative',
		},
		ul: {
			margin: 0,
			padding: 0,
		},
		body: {
			height: '100%',
			overflowX: 'hidden',
		},
	},
	layout: {
		width: '100%',
		height: '100%',
	},
	contentContainer: {
		position: 'absolute',
		paddingRight: '50px',
		paddingLeft: '50px',
		top: 50,
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: -1,
	},
}))

export default useStyles
