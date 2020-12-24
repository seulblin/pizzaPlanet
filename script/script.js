let doc = document.documentElement;
let scrolls;
let headers = document.getElementById('header');
let secArea = document.getElementById('section');
let secHeight = secArea.clientHeight;
let menuBox = document.getElementById('burger');
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
  //scrolls = doc.scrollTop
  console.log(scrolls);
  if(scrolls > 400 && scrolls < 500){
    //console.log('빵');
    one.style.top = 0 + 'vh';
    menuTwo.style.top = 5 + 'vh';
    menuTom.style.top = 10 + 'vh';
    menuPaty.style.top = 15 + 'vh';
    menuOni.style.top = 20 + 'vh';
    menuChe.style.top = 25 + 'vh';
    menuGre.style.top = 30 + 'vh';
    menuBo.style.top = 35 + 'vh';
    menuBox.style.bottom = 40 + 'vh';
  }
  if(scrolls > 500 && scrolls < 600){
    //console.log('빵');
    one.style.top = 7 + 'vh';
    menuTwo.style.top = 8 + 'vh';
    menuTom.style.top = 10 + 'vh';
    menuPaty.style.top = 15 + 'vh';
    menuOni.style.top = 20 + 'vh';
    menuChe.style.top = 25 + 'vh';
    menuGre.style.top = 30 + 'vh';
    menuBo.style.top = 35 + 'vh';
    menuBox.style.bottom = 35+ 'vh';
  }
  if(scrolls > 600 && scrolls < 700){
    one.style.top = 14 + 'vh';
    menuTwo.style.top = 15 + 'vh';
    menuTom.style.top = 16 + 'vh';
    menuPaty.style.top = 17 + 'vh';
    menuOni.style.top = 20 + 'vh';
    menuChe.style.top = 25 + 'vh';
    menuGre.style.top = 30 + 'vh';
    menuBo.style.top = 35 + 'vh';
    menuBox.style.bottom = 30 + 'vh';
  }
  if(scrolls > 700 && scrolls < 800){
    one.style.top = 21 + 'vh';
    menuTwo.style.top = 22 + 'vh';
    menuTom.style.top = 23 + 'vh';
    menuPaty.style.top = 24 + 'vh';
    menuOni.style.top = 25 + 'vh';
    menuChe.style.top = 28 + 'vh';
    menuGre.style.top = 30 + 'vh';
    menuBo.style.top = 35 + 'vh';
    menuBo.style.top = 35 + 'vh';
    menuBox.style.bottom = 25 + 'vh';
  }
  if(scrolls > 800 && scrolls < 900){
    one.style.top = 28 + 'vh';
    menuTwo.style.top = 29 + 'vh';
    menuTom.style.top = 30 + 'vh';
    menuPaty.style.top = 31 + 'vh';
    menuOni.style.top = 31 + 'vh';
    menuChe.style.top = 32 + 'vh';
    menuGre.style.top = 33 + 'vh';
    menuBox.style.bottom = 20 + 'vh';

  }
});