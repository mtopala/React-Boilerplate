import { useContext } from 'react'
import {
	NotificationContext,
	NotificationState,
} from '../contexts/NotificationContext'

const useShowMessage = (): NotificationState => {
	const { message, type, showMessage, removeMessage } =
		useContext(NotificationContext)

	return {
		message,
		type,
		showMessage,
		removeMessage,
	}
}

export default useShowMessage
