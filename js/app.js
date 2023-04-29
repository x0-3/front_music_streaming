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

var myAudio = document.getElementById("myAudio");
var isPlaying = false;
let btnPrev = document.querySelector("#prev"); // Take the switch button of the previous track
let btnNext = document.querySelector("#next");

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};


// previous next
// Array with song titles

// TODO:find a way to make it dynamique
let playlist = [
  'Aaliyah - Giving You More.mp3',
  'Aaliyah - Giving You More.mp3',
];

let treck; // Variable with track index
      
// Event before page loading
window. onload = function() {
  treck = 0; // Assign zero to the variable
}

function switchTreck (numTreck) {
  // Change the src attribute value
  myAudio.src = './music/' + playlist[numTreck];
  // Assign a song time of zero
  myAudio. currentTime = 0;
  // Play the song
  myAudio.play();
}


// play previous song
btnPrev.addEventListener("click", function() {
  // Check that the treck variable is greater than zero
  if (treck > 0) {
    treck--; // If true, reduce the variable by one
    switchTreck(treck); // Change the song.
  } else { // Otherwise
    treck = 3; // Assign three
    switchTreck(treck); // Change the song
  }
});


// play nex song
btnNext.addEventListener("click", function() {
  // Check that the treck variable is greater than three
  if (treck < 3) { // If so
    treck++; // increase it by one
    switchTreck(treck); // Change the song 
  } else { // Otherwise
    treck = 0; // Assign a zero to it
    switchTreck(treck); // Change the song
  }
});


// volume control
let volume = document.getElementById('volume-slider');
volume.addEventListener("change", function(e) {
    myAudio.volume = e.currentTarget.value / 100;
})