const videos = document.querySelectorAll(".myVideo");
    const overlay = document.getElementById("videoOverlay");
    const popupVideo = document.getElementById("popupVideo");
    const closeBtn = document.getElementById("closeBtn");

       videos.forEach(v => {
  v.addEventListener("click", () => {
    popupVideo.src = v.src;      // copy same video source
    popupVideo.poster = v.poster; // optional (shows same thumbnail)
    overlay.style.display = "flex"; // show overlay
    popupVideo.play();            // start playing
  });
});

// close overlay
closeBtn.addEventListener("click", () => {
  popupVideo.pause();  // stop video
  popupVideo.currentTime = 0; // reset to start
  overlay.style.display = "none"; // hide overlay
  popupVideo.removeAttribute("src"); // unload video (optional)
});
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