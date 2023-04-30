// ******************************************* Toggle light and dark mode ********************************************************************* //
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark");
}


// ********************************************** Hamburger menu ****************************************************************** * // 
/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}


// *********************************************************************************************************** * //
// audio player

// var myAudio = document.getElementById("myAudio");
// var isPlaying = false;
// let btnPrev = document.querySelector("#prev"); // Take the switch button of the previous track
// let btnNext = document.querySelector("#next");

// function togglePlay() {
//   isPlaying ? myAudio.pause() : myAudio.play();
// };

// myAudio.onplaying = function() {
//   isPlaying = true;
// };
// myAudio.onpause = function() {
//   isPlaying = false;
// };


// // previous next

// let playlist = [
//   'Aaliyah - Giving You More.mp3',
//   'Aaliyah - Giving You More.mp3',
// ];

// let track; // Variable with track index
      
// // Event before page loading
// window. onload = function() {
//   track = 0; // Assign zero to the variable
// }

// function switchtrack (numtrack) {
//   // Change the src attribute value
//   myAudio.src = './music/' + playlist[numtrack];
//   // Assign a song time of zero
//   myAudio. currentTime = 0;
//   // Play the song
//   myAudio.play();
// }


// // play previous song
// btnPrev.addEventListener("click", function() {
//   // Check that the track variable is greater than zero
//   if (track > 0) {
//     track--; // If true, reduce the variable by one
//     switchtrack(track); // Change the song.
//   } else { // Otherwise
//     track = 3; // Assign three
//     switchtrack(track); // Change the song
//   }
// });


// // play next song
// btnNext.addEventListener("click", function() {
//   // Check that the track variable is greater than three
//   if (track < 3) { // If so
//     track++; // increase it by one
//     switchtrack(track); // Change the song 
//   } else { // Otherwise
//     track = 0; // Assign a zero to it
//     switchtrack(track); // Change the song
//   }
// });


// // volume control
// let volume = document.getElementById('volume-slider');
// volume.addEventListener("change", function(e) {
//     myAudio.volume = e.currentTarget.value / 100;
// })



// test

const playBtn = document.querySelector("#mainPlayBtn");
const audio = document.querySelector("#audio");
const btnPrev = document.querySelector("#btnPrev");
const btnNext = document.querySelector("#btnNext");
const trackTitle = document.querySelector(".trackTitle");
const ArtistName = document.querySelector(".ArtistName");
const cover = document.querySelector(".cover");
const slider = document.querySelector(".slider");
const thumb = document.querySelector(".slider-thumb");
const progress = document.querySelector(".progress");
const time = document.querySelector(".time");
const fulltime = document.querySelector(".fulltime");
const volumeSlider = document.querySelector(".volume-slider .slider");
const volumeProgress = document.querySelector(".volume-slider .progress");
const volumeIcon = document.querySelector("volume-icon");


let trackPlaying = false;

let volumeMuted = false;

let trackId = 0; 

const tracks = [
  "Aaliyah - Giving You More.mp3",
  "Aaliyah - Giving You More.mp3"
]


playBtn.addEventListener("click", playTrack);

function playTrack(){

  if(trackPlaying === false){

    audio.play();

    playBtn.innerHTML = `
    <span class="fa-solid fa-pause"></span>
    `;

    trackPlaying = true;
  }else{

    audio.pause();

    playBtn.innerHTML = ` <span class="fa-solid fa-circle-play"></span> `;

    trackPlaying = false;

  }
}


function switchtrack(){

  if(trackPlaying === true){

    audio.play();

  }
}

const trackScr = 'music/' + tracks[trackId] + "mp3";

function loadTrack(){

  audio.scr = 'music/' + tracks[trackId] + "mp3";

  audio.load();

  progress.style.width = 0;
  thumb.style.left = 0;

  audio.addEventListener('loadedData', () => {

    setTime(fulltime, audio.duration);

    slider.setAttribute("max", audio.duration);
  });
}

loadTrack();

btnPrev.addEventListener('click', () => {

  trackId--;

  if (trackId < 0) {
    
    trackId = tracks.length - 1;
  }

  loadTrack();

  switchtrack();

});

btnNext.addEventListener("click", nextTrack);

function nextTrack(){

  trackId++;

  if (trackId > tracks.length - 1) {

    trackId = 0;
  }
    
  loadTrack();

  switchtrack();

}


audio.addEventListener('ended', nextTrack);


function setTime(output, input){

  const minutes = Math.floor(input / 60);
  
  const seconds = Math.floor(input % 60);

  if (seconds < 10) {
    
    output.innerHTML = minutes + ":0" + seconds;

  }else{
    output.innerHTML = minutes + ":" + seconds;
  }
}


setTime(fulltime, audio.duration);


audio.addEventListener("timeupdate", () => {

  const currentAudioTime = Math.floor(audio.currentTime);
  
  const timePercentage = (currentAudioTime / audio.duration) * 100 + "%";

  setTime(time, currentAudioTime);

  progress.style.width = timePercentage;
  thumb.style.left = timePercentage;

});


function customSlider(){

  const val = (slider.value / audio.duration) * 100 + "%";

  progress.style.width = val;
  thumb.style.left = val;

  setTime(time, slider.value);

  audio.currentTime = slider.value;
}

customSlider();

slider.addEventListener("input", customSlider);

// 12:30
