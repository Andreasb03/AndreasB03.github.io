const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const fileNames = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];
/* Declaring the alternative text for each image file */
const alts = {
    'pic1.jpg': 'Closeup of a blue human eye',
    'pic2.jpg': 'i dont know what this is',
    'pic3.jpg': 'purple flowers',
    'pic4.jpg': 'a picture of old egyption art and writing',
    'pic5.jpg': 'a butterfly sitting on a leaf'
};
/* Looping through images */
for (const i of fileNames){

    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${i}`);
    newImage.setAttribute('alt', alts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click',e =>{
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
    
    }

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',() =>{
    const Bttn = btn.getAttribute('class');
    if(Bttn === 'dark'){
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else{
        btn.setAttribute('class','darken');
        btn.textContent = 'darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.0)';
    }
});
