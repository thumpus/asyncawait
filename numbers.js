let num = 27;
let nums = [1, 27, 400, 22, 543, 54, 3]
const baseURL = "http://numbersapi.com"

//1
async function getFact(){
    let response = await axios.get(`${baseURL}/${num}/trivia?json`);
    console.log(response.data.text);
}

//2 
async function getMultiple(){
    let response = await axios.get(`${baseURL}/${nums}/trivia?json`);
    console.log(response.data)
}

//3 
async function fourFacts(){
    let facts = await Promise.all(
        Array.from({ length: 4}, () => axios.get(`${baseURL}/${num}/trivia?json`))
    );
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
      });
}