import API from '../../utils/api'
import { Article } from '../../types'

export default () => API.get<Article[]>('/posts', { params: { page: 1 } })
