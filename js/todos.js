// *url tai api.
// 1.first kaj fetch  kora.
// 2.then jei response ta pai ota k json e convert korte hoi.
// 3.tarpor 1st step e console kore dekte hoi, data thik vabe paisi kina
// 4.tarpor console poriborte, function diye call data k kori, ebong dekhi ager mot odta thik vabe ashe kina.
//
/*
Aon ami data gula api e maddome amar webbrowser dwkhate chaile, 
1.first e ami jekane dta gula dekhate chai, tar getElementById korte hobe.
2. for loop er maddon e api et data gula k split korbo.
3.then, for loop er modde cleate element korbo. 
4.inner html ba inner text add korbo.
*/

function createTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => callTodos(data));
}

function callTodos(todo) {
  //1. get the container
  const todoId = document.getElementById("allTodos");
  for (const item of todo) {
    console.log(item);
    //2. create element
    const todoData = document.createElement("div");
    //3. set innerText or innerHTML
    todoData.innerHTML = `
    <h3>Title: ${item.title}</h3>
    <p>Id:${item.id}</p>
    <p>Completed: ${item.completed}</p>
    `;
    //4. append child
    todoId.appendChild(todoData);
  }
}
