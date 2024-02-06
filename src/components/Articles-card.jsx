function ArticleCard({ article }) {
    return (
        <button className="articlecard">
            <h3 className="center-align">{article.title}</h3>            
            <img src={article.article_img_url} alt="Not found"></img>
            <div> 
            {/* comments: {article.comments}
            votes: {article.votes} */}
                <i className="left-align"> comments: {article.comments}</i>             
                <i className="right-float"> votes: {article.votes}</i> 
            </div>
            <div className="right-float"> author: {article.author}</div>
        </button>
    )
}

export default ArticleCard