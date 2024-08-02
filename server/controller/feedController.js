const FeedItem = require('../model/feedItem');


let feedItems = [];
let one = FeedItem.createFeedItem(1, "Title", "body", "linkUrl", "imageUrl");
let two = FeedItem.createFeedItem(1, "Title", "body", "linkUrl", "imageUrl");
feedItems.push(one, two);
//console.log(feedItems);
letcurrentId = 1;

exports.getAllFeedItems = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems);

};

exports.createFeedItems = (req, res) => {
    const { title, body, linkUrl, imageUrl } = req.body;
    const newFeedItem = new FeedItem(currentId++, title, body, linkUrl, imageUrl);
    feedItems.push(newFeedItem);
    res.setHeader('Content-Type', 'application/json');
    res.status(201).send(newFeedItem);
};


exports.getFeedItemsById = (req, res) => {
    const { id } = req.params;
    const feedItem = feedItems.find(item => item.id === parseInt(id));
    if (feedItem) {
        res.setHeader('Content-Type', 'application/json');
        res.send(feedItem);
    } else {
        res.status(404).send({ message: 'Feed item not found' });
    }
};


exports.updateFeedItems = (req, res) => {
    const { id } = req.params;
    const { title, body, linkUrl, imageUrl } = req.body;
    let feedItem = feedItems.find(item => item.id === parseInt(id));
    if (feedItem) {
        feedItem.title = title || feedItem.title;
        feedItem.body = body || feedItem.body;
        feedItem.linkUrl = linkUrl || feedItem.linkUrl;
        feedItem.imageUrl = imageUrl || feedItem.imageUrl;
        res.setHeader('Content-Type', 'application/json');
        res.send(feedItem);
    } else {
        res.status(404).send({ message: 'Feed item not found' });
    }
};


exports.deleteFeedItems = (req, res) => {
    const { id } = req.params;
    const index = feedItems.findIndex(item => item.id === parseInt(id));
    if (index !== -1) {
        const deletedItem = feedItems.splice(index, 1);
        res.setHeader('Content-Type', 'application/json');
        res.send(deletedItem[0]);
    } else {
        res.status(404).send({ message: 'Feed item not found' });
    }
};
