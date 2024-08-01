class FeedItem {
    constructor(id, title, body, linkUrl, imageUrl) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.linkUrl = linkUrl;
        this.imageUrl = imageUrl;
    }
}
function createFeedItem(FeedItem, ...args) {
    return new FeedItem(...args);
}

exports.createFeedItem = function(id, title, body, linkUrl, imageUrl) {
    return new FeedItem(id, title, body, linkUrl, imageUrl);
};
