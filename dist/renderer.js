    
class Renderer {
    _renderArticles(newsList, handleBarsTemplate, container) {
        const source = $(handleBarsTemplate).html()
        const template = Handlebars.compile(source)
        const hbText = template({newsList})
        $(container).append(hbText)
    }

    renderTicker(newsList) {
        $("#news-ticker").empty()
        this._renderArticles(newsList, "#news-ticker", "#team-container")
    }

    renderSubArticles(newsList) {
        $("#subarticles").empty()
        this._renderArticles(newsList, "#subarticles", "#team-container")
    }

    renderMainArticle(article) {
        $(".main-date").val(article.date)
        $(".main-header").val(article.headline)
        $(".main-summary").val(article.summary)
        $(".main-image").attr("src", article.date)
    }
}