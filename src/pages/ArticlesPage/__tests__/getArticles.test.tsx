import * as React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import Articles from '../index'

const response = {}
const server = setupServer(
	rest.get('/posts', (req, res, ctx) => res(ctx.json(response))),
)

beforeAll(() => server.listen())
afterEach(() => {
	server.resetHandlers()
	window.localStorage.removeItem('token')
})
afterAll(() => server.close())

test('fetch articles', async () => {
	render(<Articles />)
})
