import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

import { setAuthToken } from '.'

export const requestInterceptor = (conf: AxiosRequestConfig) => {
	const newConf = { ...conf }

	return newConf
}

export const responseInterceptor = (response: AxiosResponse) => {
	const newResponse = { ...response }
	const { token, refreshToken } = newResponse.data.meta || {}

	if (token && refreshToken) {
		setAuthToken(token, refreshToken)
	}

	return newResponse
}

export const errorResponseHandler = async (error: any) => {
	const originalRequest = error.config

	if (axios.isCancel(error)) {
		return Promise.resolve({ data: {} })
	}

	if (error.response.status === 401 && !originalRequest.__isRetryRequest) {
		// Refresh token request
	}

	return Promise.reject(error?.response)
}
