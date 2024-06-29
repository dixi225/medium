import { Context } from "hono";
import {verify} from "hono/jwt"

export default async (c:Context,next:any)=>{
    const token=c.req.header('Aurthorization')
    if(!token){
        return c.json({
            message:"No Token Found"
        })
    }
    const decoded:any= await verify(token,c.env.JWT_SECRET)
    if(!decoded){
        return c.json({
            message:"Invalid Token Found"
        })
    }
    c.set('id',decoded.id)
    next()
}