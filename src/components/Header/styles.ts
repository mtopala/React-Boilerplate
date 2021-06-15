import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	header: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: 50,
		padding: '10px 50px 9px',
		boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.12)',
		backgroundColor: '#ffffff',
	},
	logo: {
		fontSize: '20px',
		fontStyle: 'normal',
		lineHeight: 1.2,
		letterSpacing: 'normal',
		color: '#373737',
		cursor: 'pointer',
		textDecoration: 'none',
		[theme.breakpoints.down('sm')]: {
			fontSize: '18px',
			fontWeight: 800,
			fontStretch: 'normal',
			fontStyle: 'normal',
			lineHeight: 3,
			letterSpacing: 'normal',
			color: '#000000',
		},
	},
}))

export default useStyles
