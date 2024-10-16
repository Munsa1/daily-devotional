
// Add current date
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
    
    const verseName = data.reference;
    const verseNameElement = document.getElementById('dailyVerse');
    document.getElementById('verse').innerText = verseName;
    verseNameElement.innerText = verseName;
})
.catch(error => console.log(error));


//This is code for the bible verse popup

// Get the popup, button, and close elements
const popup = document.getElementById('popup');
const openPopupBtn = document.getElementById('verse');
const closePopupBtn = document.getElementById('closePopup');

// Show the popup when the button is clicked
openPopupBtn.addEventListener('click', () => {
  popup.style.display = 'flex';  // Use flex to center the popup
});

// Close the popup when the close button is clicked
closePopupBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close the popup if user clicks outside the content area
window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});


// This is code for the mobile menu pop up


const menuBars = document.querySelector('.fa-bars');
const overlay = document.querySelector('.overlay');
const myLinks = document.querySelector('.my-links');
const closeBar = document.querySelector('.fa-xmark');
const menuLinks = document.querySelectorAll('.link');

menuBars.addEventListener('click', () => {
  overlay.classList.remove('hidden');
  myLinks.classList.remove('hidden');
});

closeBar.addEventListener('click', () => {
  overlay.classList.add('hidden');
  myLinks.classList.add('hidden');
});

// menuLinks.forEach((link) => {
//   link.addEventListener('click', (e) => {
//     e.preventDefault();
//     myLinks.classList.add('hidden');
//     overlay.classList.add('hidden');
//     const sectionId = link.getAttribute('href');
//     const section = document.querySelector(sectionId);
//     section.scrollIntoView({ behavior: 'smooth' });
//   });
// });
