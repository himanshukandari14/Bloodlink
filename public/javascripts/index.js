

const mobmenuslider=document.querySelector('#mobmenuslider');
const hamburger=document.querySelector('#hamburger');
const crossbtnmenu=document.querySelector('#crossbtnmenu');
const stats=document.querySelector('#stats')
const donaters=document.querySelector('#donaters')
const darkbtn=document.querySelector('#darkbtn');
const lightbtn=document.querySelector('#lightbtn');
const body=document.querySelector('body')
const p=document.querySelector('p')
const h6=document.querySelector('h6')

var noofdonaters=0;

// lazy loading

  document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img");
    images.forEach(img => img.setAttribute("loading", "lazy"));
  });



hamburger.addEventListener('click',()=>{
   
    mobmenuslider.style.display='block'
    mobmenuslider.classList.add('mobmenuopen')
    console.log("hell");

})
crossbtnmenu.addEventListener('click',()=>{

     mobmenuslider.style.display='none'

})

// //light to dark mode change logic
// darkbtn.addEventListener('click',()=>{
//   darkbtn.style.display="none"
//   lightbtn.style.display="inline-block"
//   body.style.backgroundColor="#082948"
//   p.style.color="white"
//   h6.style.color="white"

// })
// //light to dark mode change logic
// lightbtn.addEventListener('click',()=>{
//   lightbtn.style.display="none"
//   darkbtn.style.display="inline-block"
// })