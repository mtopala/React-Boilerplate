import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

import mockApi from './mockApi'

const {
	REACT_APP_API_BASE_PATH = 'http://localhost:8080',
	REACT_APP_API_MOCKED = false,
} = process.env

const config: AxiosRequestConfig = {
	baseURL: REACT_APP_API_BASE_PATH,
	headers: {
		'Content-Type': 'application/json',
	},
}

const instance: AxiosInstance = axios.create(config)

// instance.interceptors.request.use(requestInterceptor)
// instance.interceptors.response.use(responseInterceptor, errorResponseHandler)

export const setAuthToken = (token?: string, refreshToken?: string) => {
	if (token) {
		instance.defaults.headers.common['Authorization'] = `bearer ${token}`
		localStorage.setItem('authToken', token)
	} else {
		localStorage.removeItem('authToken')
		delete instance.defaults.headers.common['Authorization']
	}

	if (refreshToken) {
		localStorage.setItem('refreshToken', refreshToken)
	} else {
		localStorage.removeItem('refreshToken')
	}
}

setAuthToken(
	localStorage.getItem('authToken') as string,
	localStorage.getItem('refreshToken') as string,
)

export default REACT_APP_API_MOCKED === 'true' ? mockApi(instance) : instance
