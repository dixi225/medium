import { Context } from "hono";


export const bulkController=function (c:Context){
    return c.text("Request recived")
}