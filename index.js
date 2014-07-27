// Posts : [{title: string, entry: domstring}]
var g_Posts = [];
var g_NumPosts = 0;

function updatePosts() {
    console.log("getting Posts");
    var url = "/posts/posts"+g_NumPosts.toString()+".json";
    $.getJSON(url, function (posts) {
	console.log("got Posts");
	console.log(posts);
	$.merge(g_Posts, posts);
	g_NumPosts += 1;
	console.log(document.querySelector("#posts"));
    });
}

document.addEventListener('polymer-ready', function () {
    document.querySelector("#posts").posts = g_Posts;
    updatePosts();
});

var didScroll = false;

$(window).scroll(function() {
  didScroll = true;
});

setInterval(function() {
    if ( didScroll ) {
	didScroll = false;
	if ($(window).scrollTop() >= $(document).height() - $(window).height() - 50) {
	    updatePosts();
	}
    }
}, 250);
