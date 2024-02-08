function CommentCard( {comment}) {

    let d = new Date(comment.created_at)

    return (
        <div className="commentcard">
            <h3>{comment.author}</h3>
            <body>{comment.body}</body>
            <div>
                <i className="left-align"> 
                posted at: {`${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')} 
                 ${d.getDate()}/${d.getMonth()}/${d.getFullYear()} `}
                </i>
                <i className="right-float"> votes: {comment.votes}</i>
            </div>           
        </div>        
    )
}

export default CommentCard