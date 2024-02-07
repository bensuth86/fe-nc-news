import { useEffect, useState } from "react";
import { getAllArticles }  from "../utils/utils";
import  ArticlesList from "./Articles-list"


function SetHomePage() {
    
    const [articlesList, setArticlesList] = useState([])

    useEffect(() => {
        getAllArticles().then((response) => {
            setArticlesList(response)
        })
    }, [])

    return (
        <section>
            <ArticlesList list={articlesList} />
        </section>
    )
}

export default SetHomePage