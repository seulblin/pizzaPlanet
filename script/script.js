let doc = document.documentElement;
let scrolls;
let one = document.getElementById('burTop');
let menuTwo = document.getElementById('burCu');

window.addEventListener('scroll',function(){
  scrolls = doc.scrollTop;
  console.log(scrolls);
  
  if(scrolls > 150 && scrolls < 200){
    //console.log('빵');
    one.style.top = 2 + 'vh';
  }
  if(scrolls > 200 && scrolls < 250){
    one.style.top = 4 + 'vh';
  }
  if(scrolls > 250 && scrolls < 300){
    one.style.top = 6 + 'vh';
  }
  if(scrolls > 300 && scrolls < 350){
    one.style.top = 8 + 'vh';
    menuTwo.style.top = 8 + 'vh';
  }
  if(scrolls > 350 && scrolls < 400){
    one.style.top = 10 + 'vh';
  }
  if(scrolls > 400 && scrolls < 450){
    one.style.top = 12 + 'vh';
  }
});