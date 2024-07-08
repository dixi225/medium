import { PrismaClient } from "@prisma/client"
import { withAccelerate } from "@prisma/extension-accelerate"
import { Context } from "hono"
import {sign} from 'hono/jwt'

export const signUpController=async (c:Context)=>{
    const prisma=new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const body=await c.req.json()
    console.log(body)
    const existingUser=await prisma.user.findUnique({
        where:{
            email:body.email
        },
        select:{
            firstName:true
        }
    })

    if(existingUser) return c.text("User Already Exists")

     const user=await prisma.user.create({
     data:{
        email: body.email,
        firstName:body.firstName,
        lastName:body.lastName,
        password:body.password,
     }   
    })
    const payload={id:user.id,
    password:user.password}
    const scrt=c.env.JWT_SECRET
    const token=await sign(payload,scrt)
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
        
    const token=await sign(user,c.env.JWT_SECRET)

    return c.json({
        message:"User Valid",
        Token:token
    })
}