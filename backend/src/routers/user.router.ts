import { Hono } from "hono";

const user=new Hono()

user.post('/signin',(c)=>{return c.text("Request Recived")})
user.post('/signup',(c)=>{return c.text("Request Recived")})

export default user