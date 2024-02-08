import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { fetchArticleById, fetchCommentsById } from "../utils/utils"
import CommentsList from "./Comment-list"

function SingleArticle() {
    const [article, setArticle] = useState([])
    const [commentsList, setcommentsList] = useState([])
    const [toggle, setToggle] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        fetchArticleById(id).then((articleData) => {
            setArticle(articleData)
        })
    }, [id])

    useEffect(() => {
        fetchCommentsById(id).then((commentsData) => {
            setcommentsList(commentsData)
        })
    }, [])

    return (
        <div className="articlecard">
            <h2 >{ article.title }</h2>
            <img src={article.article_img_url} alt="Not found"></img>
            <body> {article.body} </body>
                     
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