import React from 'react'
import { NotificationProvider } from './NotificationContext'

const AppProviders: React.FC<React.PropsWithChildren<unknown>> = ({
	children,
}) => (
	<NotificationProvider>
		<>{children}</>
	</NotificationProvider>
)

export default AppProviders
