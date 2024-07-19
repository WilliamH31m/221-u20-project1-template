const FeedItem = require('../model/feedItem');

let feedItems = [];
let one = FeedItem.createfeedItem(1, "Title", "body", "linkUrl", "imageUrl");
feedItems.push(one);
console.log(feedItems);
letcurrentId = 1;

exports.getAllFeedItems = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems);

};
