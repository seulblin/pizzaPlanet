let doc = document.documentElement;
let scrolls;
let headers = document.getElementById('header');
let secArea = document.getElementById('section');
let secHeight = secArea.clientHeight;
let one = document.getElementById('burTop');
let menuTwo = document.getElementById('burCu');
let menuTom = document.getElementById('burTom');
let menuPaty = document.getElementById('burpaty');
let menuOni = document.getElementById('burOni');
let menuChe = document.getElementById('burChe');
let menuGre = document.getElementById('burGre');
let menuBo = document.getElementById('burBo');


window.addEventListener('scroll',function(){
 
  
  scrolls = doc.scrollTop - headers.clientHeight;
  console.log(scrolls);

  if(scrolls > 0 && scrolls < 100){
    //console.log('빵');
    one.style.top = 2 + 'vh';
  }
  if(scrolls > 100 && scrolls < 200){
    one.style.top = 4 + 'vh';
  }
  if(scrolls > 200 && scrolls < 300){
    one.style.top = 6 + 'vh';
  }
  if(scrolls > 300 && scrolls < 400){
    one.style.top = 8 + 'vh';
    menuTwo.style.top = 8 + 'vh';
  }
  if(scrolls > 400 && scrolls < 500){
    one.style.top = 10 + 'vh';
    menuTwo.style.top = 10 + 'vh';
  }
  if(scrolls > 500 && scrolls < 600){
    one.style.top = 12 + 'vh';
    menuTwo.style.top = 12 + 'vh';
    menuTom.style.top = 13 + 'vh';
  }
  if(scrolls > 600 && scrolls < 700){
    one.style.top = 14 + 'vh';
    menuTwo.style.top = 14 + 'vh';
    menuTom.style.top = 16 + 'vh';
    menuPaty.style.top = 18 + 'vh';
  }
  if(scrolls > 700 && scrolls < 800){
    one.style.top = 16 + 'vh';
    menuTwo.style.top = 16 + 'vh';
    menuTom.style.top = 18 + 'vh';
    menuPaty.style.top = 20 + 'vh';
  }
  if(scrolls > 800 && scrolls < 900){
    one.style.top = 18 + 'vh';
    menuTwo.style.top = 18 + 'vh';
    menuTom.style.top = 20 + 'vh';
    menuPaty.style.top = 22 + 'vh';
  }
});