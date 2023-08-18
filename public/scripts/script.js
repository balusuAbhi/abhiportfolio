const menuicon =document.querySelector('.burger');
const menuBar = document.querySelector('.nav_conatiner');

function toggleMenu(){
   if(menuBar.classList.contains('active')){
    menuBar.classList.remove('active');
   } else{
    menuBar.classList.add('active');
   }
}