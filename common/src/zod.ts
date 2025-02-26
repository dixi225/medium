import z  from 'zod'

export const signUpBody=z.object({
    email:z.string().email(),
    firstName:z.string(),
    lastName:z.string(),
    password:z.string()
})

export const signInBody=z.object({
    email:z.string().email(),
    password:z.string()
})

export const createPostBody=z.object({
    title:z.string(),
    content:z.string(),
})

export const updatePostBody=z.object({
    title:z.string(),
    content:z.string(),
    id:z.string()
})
export type signUpUser=z.infer<typeof signUpBody>
export type signInUser=z.infer<typeof signInBody>
export type createPost=z.infer<typeof createPostBody>
export type updatePost=z.infer<typeof updatePostBody>