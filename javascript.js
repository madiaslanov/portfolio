const menu = document.querySelector('.listofheader');
const mobileMenuButton = document.querySelector('.mobile-menu'); 
const close = document.getElementById('close');

mobileMenuButton.addEventListener('click', () => {
  menu.classList.toggle('active'); 
});

if(close){
  close.addEventListener('click', () => {
    menu.classList.remove('active');
  });
}
