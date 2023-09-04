function displayPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayDataFromAPI(data));
}

/* 
1.get the container elements where you want to add new elements. (loop er vitore ei line ta dile bar bar jai element a get kora lagbe, tai loop er baire dea)
2. create child elements.
3.set innerText/ innerHTML
4.appenchild

*/

function displayDataFromAPI(values) {
  const findeUL = document.getElementById("section-ul");
  for (let element of values) {
    const createDiv = document.createElement("div");
    // adding a new class (for styling)
    createDiv.classList.add("posts");
    createDiv.innerHTML = `
    <h2>Displaying the Data</h2>
    <h3>Id: ${element.id}</h3>
    <p>title: ${element.title}</p>    
    <p>Body: ${element.body}</p>    
    `;
    findeUL.appendChild(createDiv);
  }
}
