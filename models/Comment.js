var baseUrl = "https://jsonplaceholder.typicode.com";

window.Comment = function Comment() {};
Comment.prototype.getAll = function(postId) {
  return fetch(baseUrl + "/posts/" + postId + "/comments").then(function(
    response
  ) {
    return response.json();
  });
};
// window.commentsId = function commentsId(postId) {}
//commentsId.prototype.
//   var baseUrl = baseUrl + "/posts/" + postId;
//   return fetch(baseUrl, {
//     headers: {
//       Accept: "application/text"
//     },
//     method: "GET"
//   }).then(function(response) {
//     return response.json();
//   });
// };
