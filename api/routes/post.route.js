import express from 'express'
import { create, getPosts } from '../controllers/post.controller'
import { verifyToken } from '../utils/verifyUser';

const router=express.Router()

router.post('/create',verifyToken,create)
router.get('/getposts',getPosts)
export default router;