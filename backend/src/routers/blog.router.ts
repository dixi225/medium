import { Hono } from "hono";


const blog=new Hono()

blog.post('/')
blog.put('/')
blog.get('/:id')
blog.get('/bulk')




export default blog