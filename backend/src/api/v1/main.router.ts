import { Hono } from "hono";
import user from "../../routers/user.router";
import blog from "../../routers/blog.router";

const mainRouter=new Hono()

mainRouter.route('/user',user)
mainRouter.route('/blog',blog)


export default mainRouter