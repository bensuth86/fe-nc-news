import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { fetchArticleById, fetchCommentsById } from "../utils/utils"
import CommentsList from "./Comment-list"
import UserVote from "./Article-votes"
import PostComment from "./Post-comment"

function SingleArticle() {

    const user = 'BenTen'

    const [article, setArticle] = useState([])
    const [commentsList, setcommentsList] = useState([])
    const [toggle, setToggle] = useState(false)
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams()
    
    let d = new Date(article.created_at)

    useEffect(() => {
        fetchArticleById(id).then((articleData) => {
            setArticle(articleData)
            setIsLoading(false)
        })
    }, [id])

    useEffect(() => {
        fetchCommentsById(id).then((commentsData) => {
            setcommentsList(commentsData)

        })
    }, [])

    if (isLoading) return <p>Loading...</p>
    return (
        <div className="articlecard">
            <h2 >{ article.title }</h2>
            <img src={article.article_img_url} alt="Not found"></img>
            <div> {article.body} </div>
            <h3> {article.author}</h3>

            <i className="left-align"> 
                    posted at: {`${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')} 
                    ${d.getDate()}/${d.getMonth()}/${d.getFullYear()} `}
            </i>
                <UserVote id={id} setArticle={setArticle}/>
                <i className="right-float"> votes: {article.votes}</i>  

            <PostComment id={id} setcommentsList={setcommentsList} user={user}/>

            <section >
                <button onClick={() => setToggle(!toggle)}>View Comments</button>
                {toggle && (<CommentsList list={commentsList} />)}                    
            </section>
        </div>
    )
}

// view article comments (dropdown)


// post a comment

export default SingleArticle;