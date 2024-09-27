
let currentDate = moment().format("MMMM DD YYYY");

document.getElementById('devotionDate').innerText = currentDate;



// Fetch verse from API
fetch('https://bible-api.com/john3:16')
.then(res =>{
    return res.json();
    
})
.then(data =>{

    const verse = data.text;
    const verseBin = document.getElementById('verseText');
    verseBin.innerText = verse;

    
    
})
.catch(error => console.log(error));


// const verse = document.getElementById('verse');

// verse.addEventListener('click', ()=>{
//     data.forEach(verse =>{
//         const markup = `<p>${verse.text}</p>`;
//         document.querySelector('pop-up-verse').insertAdjacentHTML('beforeend', markup);

//     })
    
// })







