import React from 'react'
import { Article } from '../../../../types'
import useStyles from './styles'

interface ArticleItemProps {
	article: Article
}

const ArticleItem: React.FC<ArticleItemProps> = ({ article }) => {
	const classes = useStyles()

	return (
		<div className={classes.articleItem}>
			<div className={classes.articleTitle}>{article.title}</div>
			<div className={classes.articleContent}>{article.body}</div>
		</div>
	)
}

export default React.memo(ArticleItem)
