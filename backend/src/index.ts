import { Hono } from 'hono'
import mainRouter from './api/v1/main.router'
import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'

dotenv.config()

const app = new Hono()

app.route('/api/v1',mainRouter)

export default app
