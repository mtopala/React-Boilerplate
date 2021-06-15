import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ArticlePage from './pages/ArticlesPage'

const MainRouter = () => (
	<Switch>
		<Route path='/' component={ArticlePage} />
	</Switch>
)

export default MainRouter
