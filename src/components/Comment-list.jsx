import CommentCard from "./Comment-card";

function CommentsList({ list }) {
    return (
        <section>
            
            <ol>
                {list.map((comment, i) => {
                    return <CommentCard key={i} comment={comment} />
                })}
            </ol>
        </section>
    )
}
export default CommentsList