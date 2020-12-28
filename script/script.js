let doc = document.documentElement;
let scrolls;
let mobileScrolls;
let headers = document.getElementById('header');
let secArea = document.getElementById('section');
let secHeight = secArea.clientHeight;
let menuBox = document.getElementById('burger');
let moMenuBox = document.getElementById('moburger');
let one = document.getElementById('burTop');
let menuTwo = document.getElementById('burCu');
let menuTom = document.getElementById('burTom');
let menuPaty = document.getElementById('burpaty');
let menuOni = document.getElementById('burOni');
let menuChe = document.getElementById('burChe');
let menuGre = document.getElementById('burGre');
let menuBo = document.getElementById('burBo');


let moOne = document.getElementById('burTopmo');
let moMenuTwo = document.getElementById('burCumo');
let moMenuTom = document.getElementById('burTommo');
let moMenuPaty = document.getElementById('burpatymo');
let moMenuOni = document.getElementById('burOnimo');
let moMenuChe = document.getElementById('burChemo');
let moMenuGre = document.getElementById('burGremo');
let moMenuBo = document.getElementById('burBomo');

let setBoxburger = document.getElementById('mosetBoxbu');
let setBoxjuice = document.getElementById('mosetBoxju');

window.addEventListener('scroll',function(){
 
  
  scrolls = doc.scrollTop - headers.clientHeight;
  mobileScrolls = doc.scrollTop
  console.log(mobileScrolls);
  //pc버전
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

  
  //mobile버전
  if(mobileScrolls > 200 && mobileScrolls < 300){
    //console.log('빵');
    moOne.style.top = 0 + 'vh';
    moMenuTwo.style.top = 5 + 'vh';
    moMenuTom.style.top = 10 + 'vh';
    moMenuPaty.style.top = 15 + 'vh';
    moMenuOni.style.top = 20 + 'vh';
    moMenuChe.style.top = 25 + 'vh';
    moMenuGre.style.top = 30 + 'vh';
    moMenuBo.style.top = 35 + 'vh';
    moMenuBox.style.bottom = 40 + 'vh';
  
    
  }
  if(mobileScrolls > 300 && mobileScrolls < 400){
    //console.log('빵');
    moOne.style.top = 10 + 'vh';
    moMenuTwo.style.top = 18 + 'vh';
    moMenuTom.style.top = 20 + 'vh';
    moMenuPaty.style.top = 25 + 'vh';
    moMenuOni.style.top = 28 + 'vh';
    moMenuChe.style.top = 28 + 'vh';
    moMenuGre.style.top = 30 + 'vh';
    moMenuBo.style.top = 35 + 'vh';
    moMenuBox.style.bottom = 30+ 'vh';
    
  }
  if(mobileScrolls > 400 && mobileScrolls < 500){
    moOne.style.top = 29 + 'vh';
    moMenuTwo.style.top = 30 + 'vh';
    moMenuTom.style.top = 31 + 'vh';
    moMenuPaty.style.top = 30 + 'vh';
    moMenuOni.style.top = 31 + 'vh';
    moMenuChe.style.top = 34 + 'vh';
    moMenuGre.style.top = 36 + 'vh';
    moMenuBo.style.top = 35 + 'vh';
    moMenuBox.style.bottom = 20 + 'vh';
    setBoxburger.style.left = 30+ '%';
    setBoxjuice.style.left = 80+ '%';
    
  }
  if(mobileScrolls > 500 && mobileScrolls < 600){
    moOne.style.top = 31 + 'vh';
    moMenuTom.style.top = 32 + 'vh';
    moMenuTwo.style.top = 32 + 'vh';
    moMenuPaty.style.top = 31 + 'vh';
    moMenuOni.style.top = 32 + 'vh';
    moMenuChe.style.top = 35 + 'vh';
    moMenuGre.style.top = 37 + 'vh';
    moMenuBo.style.top = 36 + 'vh';
    moMenuBox.style.bottom = 10 + 'vh';
    setBoxburger.style.left = 40+ '%';
    setBoxjuice.style.left = 70+ '%';
    
  }
});