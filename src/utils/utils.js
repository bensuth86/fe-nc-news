import axios from "axios"

export function getAllArticles() {
    return axios
        .get("https://stumpyjoe.onrender.com/api/articles")
        .then((response) => {
            console.log(response.data.articles)
            return response.data.articles
        })
}