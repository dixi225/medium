import {  Hono } from "hono";
import { signUpController } from "../controllers/user.controller";


const user=new Hono()

user.post('/signin',(c)=>{return c.text("Request Recived")})
user.post('/signup',signUpController)

export default user