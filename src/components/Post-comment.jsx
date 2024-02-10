import { postCommentById } from "../utils/utils";

function PostComment( {id, setcommentsList, user}) {

    const handlePostComment = () => {
        const commentbody = 'Here is my new comment'

        postCommentById(id, commentbody, user).then((commentsList) => {
            setcommentsList(commentsList)
        })
    }

    return (
        <div>      
            <button onClick={handlePostComment}> Post Comment </button>
        </div>  
        )
}

export default PostComment