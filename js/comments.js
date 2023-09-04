function allAboutComments() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => connemtsData(data));
}

function connemtsData(values) {
  const getCommentsId = document.getElementById("comments-id");
  for (const item of values) {
    const dataStorage = document.createElement("div");
    dataStorage.innerHTML = `
     <h2>name: ${item.name}</h2>
    <h3>Id: ${item.id}</h3>
    <p>Email: ${item.email}</p>
    <p>Body: ${item.body}</p>
    `;
    getCommentsId.appendChild(dataStorage);
  }
}
