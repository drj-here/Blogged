import Comment from '../models/comment.model'
export const createComment=async(req,res,next)=>{
    try {
        const {postId,content,userId}=req.body;

        if(userId!==req.user.id){
            return next(403,'You are not allowed to comment on this')
        }

        const newComment=await new Comment({
            content,
            userId,
            postId
        })
        await newComment.dispatchEvent()
        res.status(200).json(newComment)
    } catch (error) {
       next(error) 
    }
}