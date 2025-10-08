const menudiv= document.getElementById('menudiv')
const sidMenu= document.getElementById('sidMenu');
menudiv.addEventListener('click',()=>{
    sidMenu.style.display='block';
})
// Hide sidebar if clicked outside
document.addEventListener('click', (event) => {
  if (window.innerWidth <= 800) { // check screen size
    if (!sidMenu.contains(event.target) && !menudiv.contains(event.target)) {
      sidMenu.style.display = 'none';
    }
  }
});