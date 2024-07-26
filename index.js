const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

if (posts) {
    for (let i = 0; i < posts.length; i++) {
        renderPost(posts[i])
    }
}

function renderPost(curPostObject) {
    let currentOldagramPost = `
    <section>
        <div class="post-header">
                <img class="post-profile-pic" src="${curPostObject.avatar}">
                <div class="post-header-text">
                    <p class="post-name">${curPostObject.name}</p>
                    <p class="post-location">${curPostObject.location}</p>
                </div>
            </div>
            
            <div class="post-main-image-container">
                <img class="post-main-image" src="${curPostObject.post}">
            </div>

            <div class="button-bar">
                <img src="images/icon-heart.png">
                <img src="images/icon-comment.png">
                <img src="images/icon-dm.png">
            </div>
            
            <p class="likes-count">${curPostObject.likes} likes</p>
            <p class="post-content">
                <span class="post-username">${curPostObject.username}</span>
                <span class="post-text">${curPostObject.comment}</span>
            </p>

    </section>`

    const bodyHTML = document.body;
    bodyHTML.innerHTML += currentOldagramPost;
}


