import React, { useEffect, useMemo, useState } from 'react'
import { Article } from '../../types'
import { useShowMessage } from '../../hooks'
import { getArticles } from '../../services'
import { ArticleItem } from './components'
import useStyles from './styles'

const ArticlesPage: React.FC = () => {
	const [articles, setArticles] = useState<Article[]>([])
	const { showMessage } = useShowMessage()
	const classes = useStyles()

	useEffect(() => {
		getArticlesList()
	}, [])

	const getArticlesList = async () => {
		try {
			const response = await getArticles()

			if (response && response.status === 200) {
				setArticles([...response.data])
			}
		} catch (err) {
			showMessage(err.data.message)
		}
	}

	const renderArticles = useMemo(
		() =>
			articles.map(article => <ArticleItem key={article.id} article={article} />),
		[articles],
	)

	return <div className={classes.articlesList}>{renderArticles}</div>
}

export default ArticlesPage
