 let allAudios  = document.querySelectorAll('.audios');
    const playIcons = document.querySelectorAll('.plyIcon');
    let seekBar = document.getElementById("seekBar");
    const playingDiv= document.querySelector('.playingDiv');
    const closePlydiv=document.querySelector('.closePlydiv');
    const playBtn=document.getElementById('playBtn');
    let currentAudio = null; // to keep track of currently active nasheed

playIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const parentDiv = icon.closest('.singleNshd');
    const selectedAudio = parentDiv.querySelector('.audios');
    const thumb = parentDiv.querySelector('.nshdTmb');
    const playerThumb = playingDiv.querySelector('.plyThumb');
    //  get the nasheed title and artist from the clicked div
    const gotplyNSHD = parentDiv.querySelector('h4').innerText;
    const gotArtist = parentDiv.querySelector('p').innerText;
    //  select elements inside the playingDiv where you want to show name/artist
const plyingNshd = playingDiv.querySelector('.plyingNshd');
const plyingArtist = playingDiv.querySelector('.plyingAut');
    // Show player divvvvvvvvvvvvvvvvvvvvvvvvv
    playingDiv.style.display = "flex";
    //Update player imageee
    playerThumb.src = thumb.src;
//  update them
plyingNshd.innerText = gotplyNSHD;
plyingArtist.innerText = gotArtist;
    // If this audio is already playing → pause it
    if (selectedAudio === currentAudio && !selectedAudio.paused) {
      selectedAudio.pause();
      icon.src = "nasheedsFld/nsdpics/play_circleB.png";
      playBtn.innerHTML = `<img src="nasheedsFld/nsdpics/play_circle.png" class="pupl">`;
      return;
    }

    // Pause and reset all other audios
    allAudios.forEach(aud => {
      aud.pause();
      aud.currentTime = 0;
    });
    playIcons.forEach(ic => {
      ic.src = "nasheedsFld/nsdpics/play_circleB.png";
    });

    // Set the current audio
    currentAudio = selectedAudio;

    // Play it
    currentAudio.play();
    icon.src = "nasheedsFld/nsdpics/pause_circleB.png";
    playBtn.innerHTML = `<img src="nasheedsFld/nsdpics/pause_circle.png" class="pupl">`;

    // Audio Controllllllllllllllllllllllllll
    currentAudio.ontimeupdate = () => {
      seekBar.value = (currentAudio.currentTime / currentAudio.duration) * 100;
    };
    seekBar.oninput = () => {
      currentAudio.currentTime = (seekBar.value / 100) * currentAudio.duration;
    };

    // When it ends, reset
    currentAudio.addEventListener('ended', () => {
      icon.src = "nasheedsFld/nsdpics/play_circleB.png";
      playBtn.innerHTML = `<img src="nasheedsFld/nsdpics/play_circle.png" class="pupl">`;
    });
  });
});

// Handle playBtn inside playingDiv
playBtn.addEventListener('click', () => {
  if (!currentAudio) return; // do nothing if no nasheed selected yet

  if (currentAudio.paused) {
    currentAudio.play();
    playBtn.innerHTML = `<img src="nasheedsFld/nsdpics/pause_circle.png" class="pupl">`;
  } else {
    currentAudio.pause();
    playBtn.innerHTML = `<img src="nasheedsFld/nsdpics/play_circle.png" class="pupl">`;
  }
});

// Handle close button
closePlydiv.addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  playingDiv.style.display = 'none';
  playIcons.forEach(ic => {
    ic.src = "nasheedsFld/nsdpics/play_circleB.png";
  });
  playBtn.innerHTML = `<img src="nasheedsFld/nsdpics/play_circle.png" class="pupl">`;
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

// playBtn.addEventListener('click',()=>{
//                    if(currentAudio.paused){
//                     currentAudio.play();
//                    }else{
//                     currentAudio.pause();
//                    }
//                 })

    // audio.ontimeupdate = () => {
    //     seekBar.value = (audio.currentTime / audio.duration) * 100;
    // };
    // seekBar.oninput = () => {
    //     audio.currentTime = (seekBar.value / 100) * audio.duration;
    // };

    // // onclick show playingDivvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    // plyIcon.forEach(icon=>{
    //     icon.addEventListener('click',()=>{
    //         audio.play();
    //         playBtn.innerHTML = `<img src="nasheedsFld/nsdpics/pause_circle.png" class="pupl">`;  // play icon
    //         playingDiv.style.display="flex";
    //     })
    // })
    // closePlydiv.addEventListener('click',()=>{
    //     audio.pause();
    //     audio.currentTime=0;
    //     playBtn.innerHTML = `<img src="nasheedsFld/nsdpics/play_circle.png" class="pupl">`;  // play icon
    //     playingDiv.style.display='none';
    // })