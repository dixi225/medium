import { Hono } from "hono";
import { bulkController } from "../controllers/blog.controller";


const blog=new Hono()

blog.get('/bulk',bulkController)
// blog.post('/')
// blog.put('/')
// blog.get('/:id')

export default blog