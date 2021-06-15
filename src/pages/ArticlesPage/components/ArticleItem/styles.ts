import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	articleItem: {
		marginTop: 10,
	},
	articleTitle: {
		width: 400,
		fontSize: 18,
		fontWeight: 400,
		color: '#000000',
	},
	articleContent: {
		fontSize: 14,
		width: 400,
		color: 'rgba(0, 0, 0, 0.54)',
	},
}))

export default useStyles
