import { Hono } from 'hono'
import mainRouter from './api/v1/main.router'

const app = new Hono()

app.route('/api/v1',mainRouter)

export default app
