import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"
import { Context } from "hono"


export const createPost=async function(c:Context){
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const body=await c.req.json()
    const{title,content}=body
    let authorId=c.get('id')
    try {
        await prisma.post.create({
            data:{
                title,
                content,
                published:false,
                authorId
            }
        })
        c.status(200)
        c.json({
            message:"Post created"
        })

    } catch (error) {
        c.status(501)
        return c.json({
            message:"Failed to create database entry"
        })
    }
}

export const updatePost=async function(c:Context){
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body=await c.req.json()
    const{title,content,id}=body
    let authorId:string=c.get('id')
    try {
        await prisma.post.update({
            where:{
                id,
                authorId
            },
            data:{
                title,
                content
            }
        })
        c.status(200)
        c.json({
            message:"Post Updated"
        })

    } catch (error) {
        c.status(501)
        return c.json({
            message:"Failed to Update database entry"
        })
    }
}

export const getPostsById=async function(c:Context){
    const id=c.req.param("id")
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    try {
        const posts=await prisma.post.findMany({
            where:{
                authorId:id
            },
            select:{
                title:true,
                content:true
            }
        })
        c.status(200)
        c.json({
            posts
        })
    } catch (error) {
        c.status(501)
        return c.json({
            message:"Failed to fetch records"
        })
    }
}

export const bulkController=async function (c:Context){
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const body=await c.req.json()
    try {
        const posts=await prisma.post.findMany({
            select:{
                title:true,
                content:true,
                authorId:true
            }
        })
        c.status(200)
        c.json({
            posts
        })

    } catch (error) {
        c.status(501)
        return c.json({
            message:"Failed to fetch records"
        })
    }
}