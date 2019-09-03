var article = new Article();

article.getAll().then(function(data) {
  console.log(data);
  displayArticlesListHtml(data);
});
function displayArticlesListHtml(data) {
  var listElement = document.getElementById("list-articles");
  for (var i = 0; i < data.length; i++) {
    var article = data[i];
    var template = document.getElementById("template");

    var clonedElement = template.cloneNode(true);

    var linkElement = clonedElement.querySelector("a");
    linkElement.href = "articleDetails.html?id=" + article.id;

    var titleElement = clonedElement.querySelector("h3");
    titleElement.innerText = data[i].title;

    var bodyElement = clonedElement.querySelector("p");
    bodyElement.innerHTML = article.body;

    listElement.appendChild(clonedElement);
  }
}
