import React, { useState, ReactElement, useCallback } from 'react'
import { Color } from '@material-ui/lab/Alert'

export interface NotificationState {
	message: string
	type?: Color | undefined
	showMessage: (message: string, type?: Color) => void
	removeMessage: () => void
}

const notificationDefaultValues: NotificationState = {
	message: '',
	type: 'error',
	showMessage: (message: string, type?: Color) => null,
	removeMessage: () => null,
}

export const NotificationContext = React.createContext({
	...notificationDefaultValues,
})

export const NotificationProvider = ({ children }: any): ReactElement => {
	const [message, setMessage] = useState<string>('')
	const [type, setMessageType] = useState<Color>('error')

	const showMessage = (message: string, type?: Color) => {
		setMessage(message)
		if (type) {
			setMessageType(type)
		}
	}

	const removeMessage = () => {
		setMessage('')
		setMessageType('error')
	}

	const contextValue = {
		message,
		type,
		showMessage: useCallback(
			(message: string, type?: Color) => showMessage(message, type),
			[message, type],
		),
		removeMessage: useCallback(() => removeMessage(), []),
	}

	return (
		<NotificationContext.Provider value={contextValue}>
			{children}
		</NotificationContext.Provider>
	)
}
