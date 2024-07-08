import { Hono } from 'hono'
import mainRouter from './api/v1/main.router'
import dotenv from 'dotenv'
import {cors} from 'hono/cors'
dotenv.config()

const app = new Hono()

app.use('/api/v1/*',cors())
app.route('/api/v1',mainRouter)

export default app
