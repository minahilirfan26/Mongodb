import express from 'express'
import userPost from './post.js';
import getUser from './get.js';
import deleteUser from './delete.js';
import userUpdated from './put.js';
import loginUser from './login.js';
import tokenVerification from '../../config/tokenVerification.js';

let userRouter = express.Router();

userRouter.post('/login', loginUser)
userRouter.post('/', userPost)
userRouter.get('/', tokenVerification ,getUser)
userRouter.delete('/:id', deleteUser)
userRouter.put('/:id', userUpdated)


export default userRouter