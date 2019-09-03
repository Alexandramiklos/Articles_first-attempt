var baseUrl = "https://jsonplaceholder.typicode.com";

window.Article = function Article(options = {}) {
  this.id = options.id;
};
Article.prototype.getAll = function() {
  return fetch(baseUrl + "/posts").then(function(response) {
    console.log("response", response);

    if (response.ok) {
      return response.json();
    }

    throw new Error("A network error occured", response.status);
  });
};

Article.prototype.get = function() {
  return fetch(baseUrl + "/posts/" + this.id).then(function(response) {
    console.log("response", response);

    if (response.ok) {
      return response.json();
    }

    throw new Error("A network error occured", response.status);
  });
};

Article.prototype.delete = function() {};
