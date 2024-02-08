import { useEffect, useState } from "react";
import { getAllArticles }  from "../utils/utils";
import  ArticlesList from "./Articles-list"


function SetHomePage() {
    
    const [articlesList, setArticlesList] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllArticles().then((response) => {
            setArticlesList(response)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>
    return (
        <section>
            <ArticlesList list={articlesList} />
        </section>
    )
}

export default SetHomePage