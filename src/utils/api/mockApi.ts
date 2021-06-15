import { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'

export default (instance: AxiosInstance) => {
	const mock = new MockAdapter(instance, { delayResponse: 1000 })

	mock.onAny().reply(config => {
		try {
			try {
				return [200, require(`../../mocks${config.url}.json`)]
			} catch (err) {
				return [200, require(`../../mocks${config.url}/${config.method}.json`)]
			}
		} catch (err) {
			return [500, {}]
		}
	})

	return instance
}
