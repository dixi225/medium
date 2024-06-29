import { Hono } from "hono";
import { bulkController, createPost, getPostsById, updatePost } from "../controllers/blog.controller";


const blog=new Hono()

blog.post('/',createPost)
blog.put('/',updatePost)
blog.get('/:id',getPostsById)
blog.get('/bulk',bulkController)

export default blog