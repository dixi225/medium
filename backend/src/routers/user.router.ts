import {  Hono } from "hono";
import { signInController, signUpController } from "../controllers/user.controller";


const user=new Hono()

user.get('/test',(c)=>{return c.text("request recived")})
user.post('/signin',signInController)
user.post('/signup',signUpController)

export default user