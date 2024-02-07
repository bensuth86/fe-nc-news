import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { fetchArticleById, fetchCommentsById } from "../utils/utils"

function SingleArticle() {
    const [article, setArticle] = useState([])
    const [comments, setComments] = useState([])
    const { id } = useParams()  

    useEffect(() => {
        fetchArticleById(id).then((articleData) => {
            setArticle(articleData)
        })
    }, [id])

    useEffect(() => {
        fetchCommentsById(id).then((commentsData) => {
            setComments(commentsData)
        })
    }, [])

    return (
        <div className="articlecard">
            <h2 >{ article.title }</h2>
            <img src={article.article_img_url} alt="Not found"></img>
            <body> {article.body} </body>
            <section> 
                {/* {comments.body} */}
            </section>

        </div>
    )
}

// view article comments (dropdown)


// post a comment

export default SingleArticle;