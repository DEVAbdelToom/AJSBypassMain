function myFunction(x) {
  x.classList.toggle("change");
}
// get all game-icon elements
const gameIcons = document.querySelectorAll('.game-icon');

// loop through each game-icon element
gameIcons.forEach(icon => {
  // get the aspect ratio of the icon's background image
  const bgImg = new Image();
  bgImg.src = icon.style.backgroundImage.replace('url("', '').replace('")', '');
  bgImg.onload = function() {
    const aspectRatio = bgImg.width / bgImg.height;
    // set the width of the game-icon element based on the aspect ratio
    icon.style.width = `${aspectRatio * 100}px`;
  }
});
const btn = document.getElementById('toggle-theme-btn');
const body = document.body;

btn.addEventListener('click', function() {
  body.classList.toggle('dark');
});
const btn = document.getElementById('toggle-theme-btn');
const body = document.body;

btn.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});

setTimeout(function() {
    document.getElementById('loader').classList.add('hide');
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
    }, 100);
}, 2000);

const form = document.querySelector('form');
const postsDiv = document.getElementById('posts');

form.addEventListener('submit', e => {
	e.preventDefault();
	const topic = e.target.topic.value;
	const message = e.target.message.value;
	addPost(topic, message);
	e.target.reset();
});

function addPost(topic, message) {
	const postDiv = document.createElement('div');
	postDiv.classList.add('post');
	const topicHeading = document.createElement('h2');
	topicHeading.textContent = topic;
	const messageParagraph = document.createElement('p');
	messageParagraph.textContent = message;
	postDiv.appendChild(topicHeading);
	postDiv.appendChild(messageParagraph);
	postsDiv.appendChild(postDiv);
}
function addPost() {
  const topic = document.getElementById("topic").value;
  const message = document.getElementById("message").value;

  const postDiv = document.createElement("div");
  postDiv.classList.add("post");

  const topicHeading = document.createElement("h2");
  topicHeading.textContent = topic;

  const messageParagraph = document.createElement("p");
  messageParagraph.textContent = message;

  postDiv.appendChild(topicHeading);
  postDiv.appendChild(messageParagraph);

  const postsDiv = document.getElementById("posts");
  postsDiv.appendChild(postDiv);
}
