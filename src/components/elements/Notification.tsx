import React, { ReactElement, useEffect, useState } from 'react'
import Snackbar from '@material-ui/core/Snackbar'

import { Alert } from '.'
import { useShowMessage } from '../../hooks'

const Notification = (): ReactElement | null => {
	const [open, setOpen] = useState(true)
	const { message, type, removeMessage } = useShowMessage()

	useEffect(() => {
		if (!open) {
			setOpen(true)
		}
	}, [message, type])

	const handleClose = (event: React.SyntheticEvent, reason: string) => {
		if (reason !== 'clickaway') {
			removeMessage()
			setOpen(false)
		}
	}

	if (!message?.length) {
		return null
	}

	return (
		<Snackbar
			anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			open={open}
			autoHideDuration={3000}
			onClose={handleClose}
		>
			<Alert message={message} severity={type} />
		</Snackbar>
	)
}

export default Notification
