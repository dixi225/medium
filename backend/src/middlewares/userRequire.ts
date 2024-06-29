import { Context } from "hono";
import jwt from "jsonwebtoken"

export default (c:Context,next:any):any=>{
    const token=c.req.header('aurthorization')
    if(!token){
        return c.json({
            message:"No Token Found"
        })
    }
    const decoded:any= jwt.verify(token,c.env.DATABASE_URL)
    if(!decoded){
        return c.json({
            message:"Invalid Token Found"
        })
    }
    c.set('userId',decoded.id)
    next()
}