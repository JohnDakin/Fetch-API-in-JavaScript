const url = "https://worldtime.org/api/timezone/America/New_York";

async function getData(){
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

getData();