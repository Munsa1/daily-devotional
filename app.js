

let currentDate = moment().format("MMMM DD YYYY");

document.getElementById('devotionDate').innerText = currentDate;

fetch('https://bible-api.com/john3:16')
.then(res =>{
    return res.json();
    
})
.then(data =>{
    console.log(data);
    
})
.catch(error => console.log(error));





