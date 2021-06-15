import React, { ReactElement } from 'react'
import { Alert as MuiAlert } from '@material-ui/lab'
import { AlertProps as MuiAlertProps } from '@material-ui/lab/Alert'

interface AlertProps extends MuiAlertProps {
	message: string
}

const Alert = ({ message, ...rest }: AlertProps): ReactElement => (
	<MuiAlert {...rest}>{message}</MuiAlert>
)

export default Alert
