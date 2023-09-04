function loadData5() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => dataVuglam(data));
}

function dataVuglam(dataAslo) {
  const ul = document.getElementById("userId");
  for (const val of dataAslo) {
    console.log(val.name);
    const li = document.createElement("li");
    li.innerText = val.name;
    ul.appendChild(li);
  }
}
/* 
Ami asle korsi ta ki?
1. ami button e click kortesi, jar maddome onno manush er api k call ditesi.
2.se amake kisu data dicche, sei data k ami load kortesi; tarpor abar loop through kore portteak ta data r kisu ekta ami dekhai dicci.
*/

/* 
DELETE: kono api delete korte hole, fetch er por delete add kortre hoi.
*/
function deletePost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });
}

/* 
Patching:
*/
function patchPost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "foo",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

/*
POST:
*/
function createAPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// Devtools network:
// Debug API, Network tab,Status code, headers, bad API ei gula check orbo.
