import { Link } from 'react-router-dom'

function ArticleCard({ article }) {

    return (
        <Link to={`/articles/${article.article_id}`}>
            <nav className="articlecard">
                
                <h3>{article.title}</h3>            
                <img src={article.article_img_url} alt="Not found"></img>
                <div> 
                    <i className="left-align"> comments: {article.comments}</i>             
                    <i className="right-float"> votes: {article.votes}</i> 
                </div>
                <div className="right-float"> author: {article.author}</div>
                
            </nav>
        </Link>
    )
}

export default ArticleCard