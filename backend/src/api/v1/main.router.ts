import { Hono } from "hono";
import user from "../../routers/user.router";
import blog from "../../routers/blog.router";
import userRequire from "../../middlewares/userRequire";

const mainRouter=new Hono()

// mainRouter.use('/blog/*',userRequire)

mainRouter.route('/user',user)
mainRouter.route('/blog',blog)


export default mainRouter