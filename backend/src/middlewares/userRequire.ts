import { Context } from "hono";
import {verify} from "hono/jwt"

export default async (c:Context,next:any)=>{
    const token=c.req.header('Authorization')
    if(!token){
        return c.json({
            message:"No Token Found"
        })
    }try {
        const decoded:any= await verify(token,c.env.JWT_SECRET)
        c.set('id',decoded.id)
        next()
    } catch (error) {
        return c.json({
            message:"Invalid Token Found"
        })
    }
}