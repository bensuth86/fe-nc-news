import axios from "axios"

export function getAllArticles() {
    return axios
        .get("https://stumpyjoe.onrender.com/api/articles")
        .then((response) => {
            // console.log(response.data.articles)
            return response.data.articles
        })
}

const myApi = axios.create({
    baseURL: 'https://stumpyjoe.onrender.com/api',
  });

export function fetchArticleById(article_id) {
    return myApi.get(`/articles/${article_id}`).then((res) => {
        // console.log(res.data.article)
        return res.data.article
    })
}

export function fetchCommentsById(article_id) {
    return myApi.get(`articles/${article_id}/comments`).then((res) => {
        console.log(res.data.comments)
        return res.data.comments
    })
}