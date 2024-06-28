import { PrismaClient } from "@prisma/client"
import { withAccelerate } from "@prisma/extension-accelerate"
import { Context } from "hono"
import jwt from 'jsonwebtoken'


export const signUpController=async (c:Context)=>{
    const prisma=new PrismaClient().$extends(withAccelerate())
    const body=await c.req.json()
    c.env
    const user=await prisma.user.create({
     data:{
        email: body.email,
        firstName:body.firstName,
        lastName:body.lastName,
        password:body.password,
        posts:body.posts
     }   
    })
    const{id}=user
    const scrt=c.env.JWT_SECRET
    const token=jwt.sign(id,scrt)
    return c.json({
        message:"User Created",
        token:token})
    
}

