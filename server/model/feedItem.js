class feedItem {
    constructer(id, title, body, linkUrl, imageUrl) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.linkUrl = linkUrl;
        this.imageUrl = imageUrl;
    }
}

exports.createfeedItem = function(id, title, body, linkUrl, imageUrl) {
    return new feedItem(id, title, body, linkUrl, imageUrl);
};
