let doc = document.documentElement;
let scrolls;
let containerOne = document.getElementById('burger');
let bgTxtOne = document.getElementById('thisis');
let bgTxtTwo = document.getElementById('analien');
let bgTxtThr = document.getElementById('burgersub');

let stuff = document.querySelectorAll('meterial');
let sectionOne = [];


window.addEventListener('scroll',function(){

 scrolls = doc.scrollTop;
 console.log(scrolls);

 if(scrolls > 150){
   // containerOne.classList.add('opacitya');
 }

});
