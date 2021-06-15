export interface Article {
	userId: number
	id: number
	title: string
	body: string
}

export interface ArticlesResponse {
	data: Article[]
}
