import { PrismaClient } from "@prisma/client"
import { withAccelerate } from "@prisma/extension-accelerate"
import { Context } from "hono"
import jwt from 'jsonwebtoken'

export const signUpController=async (c:Context)=>{
    const prisma=new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL
    }   
    ).$extends(withAccelerate())
    const body=await c.req.json()
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

export const signInController=async(c:Context)=>{
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
        }   
        ).$extends(withAccelerate())
    const{email,password}=await c.req.json()    
    const user=await prisma.user.findFirst({
        where:{
            email:email
        },
        select:{
            id:true,
            password:true
        }
    })    

    if(!user) return c.json({message:"user not found"})
    if(user.password!=password) return c.json({message:"Invalid Password"})
        
    const token=jwt.sign(user.id,c.env.JWT_SECRET)

    return c.json({
        message:"User Valid",
        Token:token
    })
}