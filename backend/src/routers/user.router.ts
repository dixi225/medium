import { Hono } from "hono";

const user=new Hono()

user.get('/signup',(c)=>{return c.text("Request Recived")})

export default user