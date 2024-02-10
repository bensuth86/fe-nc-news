import { patchVotesById } from "../utils/utils"

function UserVote({ id, setArticle }) {
   
    const handleVoteUp = () => {   
           
        patchVotesById(id, 1).then((article) => {
            setArticle(article)
        })
    }

    const handleVoteDown = () => {        
        patchVotesById(id, -1).then((article) => {
            setArticle(article)
        })
    }

    return (
    <div>      
        <button onClick={handleVoteUp}> VOTEUP </button>
        <button onClick={handleVoteDown}> VOTEDOWN </button>
    </div>  
    )
}

export default UserVote