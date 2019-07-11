const renderer = new Renderer

const getNews = async function () {
    let newsList = await $.get("./newsfeed")
    return newsList
}

const loadPage = async function () {
    const news = await getNews()
    console.log(news)
    const mainArticle = news.shift()
    renderer.renderMainArticle(mainArticle)
    renderer.renderTicker(news)
    renderer.renderSubArticles(news)
}

loadPage()