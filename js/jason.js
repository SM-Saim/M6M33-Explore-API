// java script er objecrt/array ke  JASON string e convert korar upay holo JASON.stringify
// java script er JASON.stringify ke  normal form e convert korar upay holo JASON.parse
/*
1stringify. ( kono js value k JSON string e convert kore)
jodi object declere kori, taile property er naam gula string er modde rake, karon property name number ba space hoise problem hoi jite pare.
2.parse.(stringify ke normal form e niye ase.)
*/
const person = { name: "Garib Khan", age: 33, location: "UK" };
console.log(person);
// { name: 'Garib Khan', age: 33, location: 'UK' }

const stringified = JSON.stringify(person);
console.log(stringified);
// {"name":"Garib Khan","age":33,"location":"UK"}

// Ex:2
const shop = {
  owner: "Waren",
  address: "Silicon Vally",
  country: "USA",
  scpcifications: {
    shopID: 9988,
    location: "1/3 street",
    opening: "Alltime",
  },
  authorized: true,
  rush: true,
};
console.log(shop);

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

//Stringify theke normal e anar upay holo parse diea.
const shopParse = JSON.parse(shopJSON);
console.log(shopParse);
