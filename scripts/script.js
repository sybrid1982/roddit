class RedditPost {
    constructor (title, image, link, author) {
        this.title=title;
        this.image=image;
        this.link=link;
        this.author=author;
    }
}

$(() => {
    $.get('http://www.reddit.com/r/aww.json', (data) => {
        const postCollection = data.data.children;
        posts = [];
        console.log(postCollection);
        for(let i = 0; i < postCollection.length && i < 10; i++) {
            console.log(postCollection[i].data);
            const newPost = new RedditPost(postCollection[i].data.title, postCollection[i].data.thumbnail, postCollection[i].data.permalink, postCollection[i].data.author);
            posts.push(newPost);
        }
        for(let i = 0; i < posts.length; i++) {
            $('#topics').append(`<section id=${i} class='post'></section>`);
            $(`#${i}`).append(`<p class='postNumber'>${i+1}</p>`);
            $(`#${i}`).append(`<img src='${posts[i].image}'>`);
            $(`#${i}`).append(`<section id='text-${i}'><a href='http://www.reddit.com${posts[i].link}'><p>${posts[i].title}</p></a></section>`);
            $(`#text-${i}`).append(`<p>${posts[i].author}</p>`)
        }
    });
});