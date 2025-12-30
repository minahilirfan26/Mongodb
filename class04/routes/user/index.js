import express from 'express'
import userPost from './post.js';
import getUser from './get.js';
import deleteUser from './delete.js';
import userUpdated from './put.js';

let userRouter = express.Router();

userRouter.post('/', userPost)
userRouter.get('/', getUser)
userRouter.delete('/:id', deleteUser)
userRouter.put('/:id', userUpdated)


export default userRouter