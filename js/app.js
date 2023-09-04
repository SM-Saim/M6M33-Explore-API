function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json()) //json promise is similar to JSON.parse
    .then((data) => console.log(data));
}

/* 
api niea kaj korar somoy eka jinsh khub e import, seta holo api te  je data ta pacchi oita ki format er oita kheal korte hobe. 
Ex: array akare thakte pare, object akare thake pare, ba array er modde object akare thake pare.
*/

// Ex:2

function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

// Ei function er modde cnsole korar kaj ta chaile colesole er poriborte arekta function k call korte pari.
function loadUsers4() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((rest) => rest.json())
    .then((data) => dataShow(data));
}

function dataShow(dada) {
  console.log(dada);
}
