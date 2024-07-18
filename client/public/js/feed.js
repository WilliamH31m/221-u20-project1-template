
const feedItem = {
    Title: "",
    Body: "",
    linkUrl: "",
    imageUrl: "",
}

let currentStories = [];

currentStories.push({
    Title: "Story#1",
    Body: "Body of Story Goes Here",
    linkUrl: "",
    imageUrl: ""
})

currentStories.push({
    Title: "Story#2",
    Body: "Body of Story Goes Here",
    linkUrl: "",
    imageUrl: ""
})

currentStories.push({
    Title: "Story#3",
    Body: "Body of Story Goes Here",
    linkUrl: "",
    imageUrl: "",
})

console.log(currentStories)

function displayItemHTML(feedItem) {
    let newsfeedElement = document.getElementById("newsfeed");

    let itemHTML =`
        <div class ="feed-item">
            <h2><a href ="${feedItem.linkUrl}" target ="_blank">${feedItem.Title}</a></h2>
            <p>${feedItem.Body}</p>
            <a href="${feedItem.linkUrl}" target="_blank">
                <img src="${feedItem.imageUrl}" alt="${feedItem.Title}" style="max-width: 20%; height: 20%;"></img>
                
            </a>
        </div>
    `
    newsfeedElement.innerHTML += itemHTML;
}

currentStories.forEach(function(item) {
    displayItemHTML(item);
});


