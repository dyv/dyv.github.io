
// Posts : [{title: string, entry: domstring}]
function getPosts() {
    console.log("getting Posts");
    $.getJSON("posts/posts.json", function (posts) {
	console.log("got Posts");
	console.log(posts);
	document.querySelector("#posts").posts = posts;
	console.log(document.querySelector("#posts"));
    });
}

var posts;

document.addEventListener('polymer-ready', function () {
    getPosts();
});
