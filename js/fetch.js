// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

/* 
JSON Placeholder code :
*json placeholder theke code copy kore html er sateh linked kora js file e paste korbo.
*fetch html er maddome link kore hobe, eta browser er ekta  api  call korar system.


 1. fetch naam ekta function ase, seta k ami call martesi.
 1. fetch er modde jei url ta se oita ekta api, oi api ta ke call kora hoise.
 
 2.api ( ekane url ta ) k call korle 3 ta case hoite pare.
  1. se vodro bacchar moto ja chaisi state sate amake dea dilo.
  2. delay kore dilo.
  3. diloi na.
  
// Tarpor jei resposne er arrow function ta pabo seta jason er ekta promise e convert e korbo.
// jeta k call korle ami jeson ta ke pabo. 
//json. parse er sathe response.json er difference hocce, JASON.pase k ekta json. dile sorasori diea dei,
ar response.json erekta promise dei, then oita k call korle maan pabo.  
*/

/* Full jinish ta ke abar chinta kori.
1.amake keo ekta url dilo, bollo ektane gele tumi data paba.
2. taile ami fetch likhe first bracket er modde ('') url ta bosai dibo.
(fetch diye amra data gula niye ashi)
3.tarpor ami jodi url theke kono response pai, taile .then diea oi responsoe ta ke arrow function er ekta para meter dhore ,json er ekta promise e convert korbo.
4.Tarpor json ta k chaile ami console.log korte pari.
*/
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// abar chaile fetch ta ekta function er moddeo kore pari.

function helloFetch() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}
