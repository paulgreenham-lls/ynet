    
class Renderer {
    _renderArticles(newsList, handleBarsTemplate, container) {
        const source = $(handleBarsTemplate).html()
        const template = Handlebars.compile(source)
        const hbText = template({newsList})
        $(container).append(hbText)
    }

    renderTicker(newsList) {
        $("#news-ticker").empty()
        this._renderArticles(newsList, "#tickerarticle-template", "#news-ticker")
    }

    renderSubArticles(newsList) {
        $("#subarticles").empty()
        this._renderArticles(newsList, "#subarticle-template", "#subarticles")
    }

    renderMainArticle(article) {
        console.log(article)
        $(".main-date").text(article.date)
        $(".main-header").text(article.headline)
        $(".main-summary").text(article.summary)
        $(".main-image").attr("src", article.image)
    }
}