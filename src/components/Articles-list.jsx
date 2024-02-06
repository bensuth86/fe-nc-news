import ArticleCard from "./Articles-card"

function ArticlesList({ list }) {
    return (
        <section>
            <h2 className="header2">All news</h2>
            <ol>
                {list.map((article, i) => {
                    return <ArticleCard key={i} article={article} />
                })}
            </ol>
        </section>
    )
}

export default ArticlesList