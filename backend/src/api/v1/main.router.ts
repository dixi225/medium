import { Hono } from "hono";
import user from "../../routers/user.router";

const mainRouter=new Hono()

mainRouter.route('/user',user)

export default mainRouter