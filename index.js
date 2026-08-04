/*
let email = "jdakin749@gmail.com";

let username = email.split()
.map(word => word.charAt(0).toUpperCase() + word.slice(1,word.indexOf('@'))).toString()
console.log(username);
*/
//Fetch api usually takes two things as input
  //1. URL of the server/api endpoint which you want to communicate
  //2. Options object

/*
async function test(){
  let data = await fetch("https://catfact.ninja/fact", {method: 'GET'});

  let txt = await data.json();
  console.log(txt);
}
test();
*/

/*
let exmp = {
      "name": "Apple MacBook Pro 16",
      "data": {
        "year": 2019,
        "price": 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
      }
    }


async function testRestApi(){
  let data = await fetch("https://api.restful-api.dev/objects", 
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // "Authorization": "un/pwd(JWT)",
      // "User-Agent": "browser/os"
    },
    body: JSON.stringify(exmp)
  });

  console.log(data);
  let txt = await data.json();
  console.log(txt);
}

testRestApi();
*/

async function testRestApi(){
  let data = await fetch("https://api.restful-api.dev/objects/12", 
  {method: 'DELETE'});

  console.log(data);
  let txt = await data.json();
  console.log(txt);
}

testRestApi();