var articleId = getQueryValue("id");
console.log("articleId", articleId);

var article = new Article({ id: articleId });
article
  .get()
  .then(function(data) {
    // data is the value of response.json();
    // displayArticles(data);
    console.log(data);
    displayArticleHtml(data);
  })
  .catch(function(error) {
    document.querySelector("body").innerText = "Invalid post ID";
  });

var comment = new Comment();
comment.getAll(articleId).then(function(data) {
  console.log(data);
  displayCommentsListHtml(data);
});

function displayArticleHtml(data) {
  var h1 = document.querySelector("h1");
  var body = document.getElementById("article-item");

  h1.innerText = data.title;
  body.innerHtml = data.body;
}
function displayCommentsListHtml(data) {
  var listElement = document.getElementById("list-comments");
  for (var i = 0; i < data.length; i++) {
    var comment = data[i];
    var template = document.getElementById("template");

    var clonedElement = template.cloneNode(true);

    var titleElement = clonedElement.querySelector("h2");
    titleElement.innerText = data[i].name;

    var emailElement = clonedElement.querySelector("strong");
    emailElement.innerText = comment.email;

    var bodyElement = clonedElement.querySelector("p");
    bodyElement.innerHTML = comment.body;

    listElement.appendChild(clonedElement);
  }
}
function getQueryValue(key) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == key) {
      return pair[1];
    }
  }
  return false;
}
