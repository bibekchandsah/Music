const navbarr = document.querySelectorAll(".nav");
const wrapppers = document.querySelectorAll(".wrappper");
const musics = document.querySelectorAll(".wrapperr");
const navv = document.querySelectorAll(".nav div");
const wrapppper = document.querySelectorAll(".wrappper div");
const music = document.querySelectorAll(".wrapperr .loads");
const renderCard = () => {
    //Remove the skeleton loading effect
    navbarr.forEach((navbar) => {
        navbar.classList.remove("loading");
    });
    wrapppers.forEach((onlinechecker) => {
        onlinechecker.classList.remove("loading");
    });
    musics.forEach((musics) => {
        musics.classList.remove("loading");
    });
    //Show the hidden html elements
    navv.forEach((navbarDiv) => {
        navbarDiv.style.visibility = "visible";
    });
    wrapppper.forEach((wrappperDiv) => {
        wrappperDiv.style.visibility = "visible";
    });
    music.forEach((musicDiv) => {
        musicDiv.style.visibility = "visible";
    });
}


// Execute renderCard on setTimeout
// setTimeout(() => {
//   renderCard();
// }, 4000);


//Execute renderCard after the page loaded
window.addEventListener("load", () => {
    renderCard();
});


// music function 
const wrapper = document.querySelector(".wrapperr"),
    musicImg = wrapper.querySelector(".img-area img"),
    musicName = wrapper.querySelector(".song-details .name"),
    musicArtist = wrapper.querySelector(".song-details .artist"),
    playPauseBtn = wrapper.querySelector(".play-pause"),
    prevBtn = wrapper.querySelector("#prev"),
    nextBtn = wrapper.querySelector("#next"),
    mainAudio = wrapper.querySelector("#main-audio"),
    progressArea = wrapper.querySelector(".progress-area"),
    progressBar = progressArea.querySelector(".progress-bar"),
    musicList = wrapper.querySelector(".music-list"),
    moreMusicBtn = wrapper.querySelector("#more-music"),
    closemoreMusic = musicList.querySelector("#closee");
let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
isMusicPaused = true;


// load the data when window loads
window.addEventListener("load", () => {
    renderMusicList();
    renderCard();
    loadMusic(musicIndex);
    playingSong();
    initializeMusicPlayer();
});


// initialize th music player
function initializeMusicPlayer() {
    // Event listeners for play, pause, next, and previous buttons
    playPauseBtn.addEventListener("click", togglePlayPause);
    prevBtn.addEventListener("click", prevMusic);
    nextBtn.addEventListener("click", nextMusic);
    // Event listener for loadeddata
    mainAudio.addEventListener("loadeddata", () => {
        handleLoadedData();
    });
    // Event listener for ended
    mainAudio.addEventListener("ended", () => {
        handleMusicEnded();
    });
    // Event listener for clicking on a song in the list
    const allLiTag = musicList.querySelectorAll("li");
    allLiTag.forEach((li) => {
        li.addEventListener("click", () => handleSongClick(li));
    });
}


// Show loading icon when click to play or pause button
function playMusic() {
    if (mainAudio.paused) {
        showLoadingIcon();
        mainAudio.play();
    }
}


// remove loading icon when click to pause button
function pauseMusic() {
    mainAudio.pause();
    removeLoadingIcon();
}


// Function to remove loading icon when audio is being played
function handleLoadedData() {
    removeLoadingIcon();
}


// When the music ends, go to the start of the current song or move to the next one
function handleMusicEnded() {
    let getText = repeatBtn.innerText;
    switch (getText) {
        case "repeat":
            nextMusic();
            break;
        case "repeat_one":
            mainAudio.currentTime = 0;
            loadMusic(musicIndex);
            playMusic();
            break;
        case "shuffle":
            musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
            // loadMusic(musicIndex);
            //added
            showLoadingIcon();
            // loadMusic(musicIndex, playMusic);
            loadMusic(musicIndex);
            removeLoadingIcon();

            playMusic(); // added
            playingSong();
            break;
    }
}





// Show loading icon when click to play or pause button
function showLoadingIcon() {
    playPauseBtn.querySelector("i").innerText = "rotate_right";
    playPauseBtn.querySelector("i").title = "Loading";
    playPauseBtn.querySelector("i").classList.add("rotate");
}


// remove loading icon when click to play or pause button
function removeLoadingIcon() {
    // playPauseBtn.querySelector("i").innerText = "play_arrow";
    playPauseBtn.querySelector("i").innerText = "pause";
    playPauseBtn.querySelector("i").title = "pause";
    playPauseBtn.querySelector("i").classList.remove("rotate");
}


// Function to load music using URLs
// function loadMusic(indexNumb) {
function loadMusic(indexNumb, playCallback) {
    // Set loading icon, title, and add spinning class
    if (!wrapper.classList.contains("paused")) {
        playPauseBtn.querySelector("i").innerText = "rotate_right";
        playPauseBtn.querySelector("i").title = "Loading";
        playPauseBtn.querySelector("i").classList.add("rotate");

    }
    // Show loading message in the console
    console.log(`Loading ${allMusic[indexNumb - 1].name}...`);
    // set the music name, artist name, image and audio source
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImg.src = allMusic[indexNumb - 1].img;
    mainAudio.src = allMusic[indexNumb - 1].src;
    // Event listener for when metadata is loaded
    mainAudio.addEventListener("loadedmetadata", function () {
        // Log "Loaded" message in the console
        console.log(`Loaded ${allMusic[indexNumb - 1].name}`);
        playMusic(); // Play the audio once metadata is loaded
    });
    mainAudio.addEventListener("loadeddata", () => {
        // Remove loading icon, show play icon, set title, and remove spinning class
        // playPauseBtn.querySelector("i").innerText = "play_arrow";
        playPauseBtn.querySelector("i").innerText = "pause";
        playPauseBtn.querySelector("i").title = "play";
        playPauseBtn.querySelector("i").classList.remove("rotate");
        if (playCallback) {
            playCallback();
        }
    });
}
// loadMusic(musicIndex, playMusic);


// Get volume-related elements
const volumeIcon = wrapper.querySelector("#volumeIcon");
const volumeBar = wrapper.querySelector(".volume-bar");
const volumeRange = wrapper.querySelector("#volumeRange");
const volumeControl = wrapper.querySelector(".volume-control");
// Event listener for volume icon click
volumeIcon.addEventListener("click", toggleVolumeBar);
// Event listener for volume range input
volumeRange.addEventListener("input", setVolume);
// Event listener for clicking outside volume control
document.addEventListener("click", function (e) {
    // Check if the click is outside the volume control
    if (!volumeControl.contains(e.target)) {
        // Hide the volume bar
        volumeBar.style.display = "none";
    }
});
// Function to toggle visibility of volume bar
function toggleVolumeBar() {
    // Toggle the display property based on the current state
    volumeBar.style.display = volumeBar.style.display === "none" ? "flex" : "none";
}


// Function to set the volume based on the range input
function setVolume() {
    const volumeValue = volumeRange.value;
    mainAudio.volume = volumeValue;
}


//  handle the clicked song list item, updating the UI, and playing the selected song.
function handleSongClick(li) {
    const liIndex = li.getAttribute("li-index");
    musicIndex = liIndex;
    loadMusic(musicIndex);
    playMusic();
    removeLoadingIcon(); // added
    playingSong();
}


// Update your playMusic function to handle volume when music starts playing
function playMusic() {
    if (mainAudio.paused) {
        try {
            // wrapper.classList.add("paused");
            wrapper.classList.remove("paused");
            playPauseBtn.querySelector("i").innerText = "rotate_right";
            mainAudio.play();
            // Set the initial volume based on the volume range input
            mainAudio.volume = volumeRange.value;
        } catch (error) {
            // Handle the play interruption error
            console.error("Play request interrupted:", error);
        }
    }
}


//pause music function
function pauseMusic() {
    wrapper.classList.remove("paused");
    // wrapper.classList.add("paused");
    playPauseBtn.querySelector("i").innerText = "play_arrow";
    mainAudio.pause();
}


// Event listener for keyboard shortcuts
document.addEventListener("keydown", function (e) {
    const isShiftPressed = e.shiftKey;
    const focusedElement = document.activeElement;
    if (!focusedElement.tagName || focusedElement.tagName.toLowerCase() !== "input") {
        // Check if no input field is focused
        switch (e.code) {
            // Shift + Left Arrow: Trigger the click event on the previous icon
            case "ArrowLeft":
                // Prevent the default action for Shift + Left Arrow
                e.preventDefault();
                // Trigger the click event on the previous icon
                prevBtn.click();
                break;
            // Shift + Right Arrow: Trigger the click event on the previous icon
            case "ArrowRight":
                // Prevent the default action for Shift + Right Arrow
                e.preventDefault();
                // Trigger the click event on the next icon
                nextBtn.click();
                break;
            default:
                // Handle other key combinations if needed
                break;
        }
    }
});


// Function to show loading icon
// function showLoadingIcon() {
//     const icon = playPauseBtn.querySelector("i");
//     // Set inner text and title to "Loading" if they are not "play_arrow" or "pause"
//     // if (icon.innerText !== "play_arrow" && icon.innerText !== "pause") {
//     if (icon.innerText == "play_arrow" || icon.innerText == "pause") {
//         icon.innerText = "rotate_right";
//         icon.title = "Loading";
//         icon.classList.add("rotate");
//     }
// }


// Event listener for play/pause button click for space bar
playPauseBtn.addEventListener("click", function () {
    togglePlayPauseWithSpaceBar();
});
// Toggle between playing and pausing with space bar
// Event listener for space bar keydown
document.addEventListener("keydown", function (e) {
    if (e.code === "Space" && e.target.tagName !== "INPUT") {
        e.preventDefault(); // Prevent the default space bar behavior (e.g., scrolling)
        togglePlayPauseWithSpaceBar();
    }
});
// Function to toggle play/pause button icon and play/pause the music
function togglePlayPauseWithSpaceBar() {
    const isMusicPlaying = !mainAudio.paused;
    // Check if the music is currently loading
    const isLoading = mainAudio.readyState < 4; // Using readyState to check if the audio is still loading
    if (isLoading) {
        // Show loading icon
        playPauseBtn.querySelector("i").innerText = "rotate_right";
        playPauseBtn.querySelector("i").title = "Loading";
        playPauseBtn.querySelector("i").classList.add("rotate");
        return;
    }
    wrapper.classList.toggle("paused");
    const isPaused = wrapper.classList.contains("paused");
    // Update play/pause button icon based on the current state
    if (isPaused) {
        playPauseBtn.querySelector("i").innerText = "play_arrow";
        playPauseBtn.querySelector("i").title = "Play";
    } else {
        playPauseBtn.querySelector("i").innerText = "pause";
        playPauseBtn.querySelector("i").title = "Pause";
    }
    // Play or pause the music based on the current state
    isPaused ? mainAudio.pause() : mainAudio.play();
    playingSong();
}


//prev music button event
prevBtn.addEventListener("click", () => {
    playPauseBtn.querySelector("i").innerText = "rotate_right";
    showLoadingIcon();
    prevMusic();
});


//next music button event
nextBtn.addEventListener("click", () => {
    playPauseBtn.querySelector("i").innerText = "rotate_right";
    showLoadingIcon();
    nextMusic();
});


//prev music function
function prevMusic() {
    playPauseBtn.querySelector("i").innerText = "rotate_right";
    showLoadingIcon();
    musicIndex--; //decrement of musicIndex by 1
    //if musicIndex is less than 1 then musicIndex will be the array length so the last music play
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    // Show loading icon
    // loadMusic(musicIndex);
    loadMusic(musicIndex, playMusic);
    // removeLoadingIcon(); // add
    playMusic();
    playingSong();
}


function nextMusic() {
    playPauseBtn.querySelector("i").innerText = "rotate_right";
    showLoadingIcon();
    musicIndex++; //increment of musicIndex by 1
    //if musicIndex is greater than array length then musicIndex will be 1 so the first music play
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    // Show loading icon
    // loadMusic(musicIndex);
    loadMusic(musicIndex, playMusic);
    // removeLoadingIcon(); // add
    playMusic();
    playingSong();
}


// update progress bar width according to music current time
mainAudio.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime; //getting playing song currentTime
    const duration = e.target.duration; //getting playing song total duration
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;
    let musicCurrentTime = wrapper.querySelector(".current-time"),
        musicDuration = wrapper.querySelector(".max-duration");
    mainAudio.addEventListener("loadeddata", () => {
        // update song total duration
        let mainAdDuration = mainAudio.duration;
        let totalMin = Math.floor(mainAdDuration / 60);
        let totalSec = Math.floor(mainAdDuration % 60);
        if (totalSec < 10) { //if sec is less than 10 then add 0 before it
            totalSec = `0${totalSec}`;
        }
        musicDuration.innerText = `${totalMin}:${totalSec}`;
    });
    // update playing song current time
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) { //if sec is less than 10 then add 0 before it
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});


// progress area
progressArea.addEventListener("click", (e) => {
    let progressWidth = progressArea.clientWidth;
    let clickedOffsetX = e.offsetX;
    let songDuration = mainAudio.duration;
    // Check if songDuration is valid before calculating
    if (progressWidth > 0 && isFinite(songDuration)) {
        // Calculate the new currentTime based on the clicked position
        mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
        // Play music from the new currentTime
        playMusic();
        playingSong();
    }
});


//change loop, shuffle, repeat icon onclick
const repeatBtn = wrapper.querySelector("#repeat-plist");
repeatBtn.addEventListener("click", () => {
    let getText = repeatBtn.innerText; //getting this tag innerText
    switch (getText) {
        case "repeat":
            repeatBtn.innerText = "repeat_one";
            repeatBtn.setAttribute("title", "Song looped");
            break;
        case "repeat_one":
            repeatBtn.innerText = "shuffle";
            repeatBtn.setAttribute("title", "Playback shuffled");
            break;
        case "shuffle":
            repeatBtn.innerText = "repeat";
            repeatBtn.setAttribute("title", "Playlist looped");
            break;
    }
});


//code for what to do after song ended
mainAudio.addEventListener("ended", () => {
    // we'll do according to the icon means if user has set icon to
    // loop song then we'll repeat the current song and will do accordingly
    let getText = repeatBtn.innerText; //getting this tag innerText
    switch (getText) {
        case "repeat":
            nextMusic(); //calling nextMusic function
            break;
        case "repeat_one":
            mainAudio.currentTime = 0; //setting audio current time to 0
            loadMusic(musicIndex); //calling loadMusic function with argument, in the argument there is a index of current song
            playMusic(); //calling playMusic function
            break;
        case "shuffle":
            let randIndex = Math.floor((Math.random() * allMusic.length) + 1); //genereting random index/numb with max range of array length
            do {
                randIndex = Math.floor((Math.random() * allMusic.length) + 1);
            } while (musicIndex == randIndex); //this loop run until the next random number won't be the same of current musicIndex
            musicIndex = randIndex; //passing randomIndex to musicIndex
            // added
            showLoadingIcon();
            loadMusic(musicIndex, playMusic);
            // removeLoadingIcon();

            // loadMusic(musicIndex);
            playMusic();
            playingSong();
            break;
    }
});


// Event listener for showing/hiding music list and closing it when clicked outside
document.addEventListener("click", function (e) {
    const musicList = wrapper.querySelector(".music-list");
    const closemoreMusic = musicList.querySelector("#closee");
    // Toggle music list visibility when the music icon is clicked
    if (e.target === moreMusicBtn) {
        musicList.classList.toggle("show");
    } else if (!musicList.contains(e.target) && musicList.classList.contains("show")) {
        // Close music list when clicked outside and the list is visible
        musicList.classList.remove("show");
    }
});
// Event listener to close music list when "closee" is clicked
closemoreMusic.addEventListener("click", function () {
    moreMusicBtn.click();
});


const ulTag = wrapper.querySelector("ul");
// Function to render the music list
function renderMusicList() {
    const ulTag = wrapper.querySelector("ul");
    // Loop through allMusic array to generate list items
    for (let i = 0; i < allMusic.length; i++) {
        // Generate a unique ID for each audio element
        const audioId = `audio-${i}`;
        // Generate liTag
        let liTag = `<li li-index="${i + 1}">
              <div class="row">
                <span>${allMusic[i].name}</span>
                <p>${allMusic[i].artist}</p>
              </div>
              <span class="audio-duration" data-duration="Play"></span>
              <audio id="${audioId}" src="${allMusic[i].src}"></audio>
              </li>`;
            //   <span class="audio-duration" data-duration="3:42"></span>
        ulTag.insertAdjacentHTML("beforeend", liTag);
        let liAudioDurationTag = ulTag.querySelector(`[id="${audioId}"] + .audio-duration`);
        let liAudioTag = ulTag.querySelector(`#${audioId}`);
        // Check if liAudioDurationTag is found before setting innerText
        if (liAudioDurationTag) {
            liAudioTag.addEventListener("loadeddata", () => {
                // Update the duration once the audio is loaded
                let duration = liAudioTag.duration;
                let totalMin = Math.floor(duration / 60);
                let totalSec = Math.floor(duration % 60);
                if (totalSec < 10) {
                    totalSec = `0${totalSec}`;
                }
                liAudioDurationTag.innerText = `${totalMin}:${totalSec}`;
                liAudioDurationTag.setAttribute("t-duration", `${totalMin}:${totalSec}`); //adding t-duration attribute with total duration value
            });
        } else {
            // console.error(`Could not find audio duration tag for ${allMusic[i].name}`);
            console.log(`Could not find audio duration tag for ${allMusic[i].name}`);
        }
    }

    // Add event listener for search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);

    // Initial render of the music list
    filterAndRenderList('');

}

// Function to filter and render the music list based on search input
function filterAndRenderList(searchText) {
    const ulTag = wrapper.querySelector("ul");
    ulTag.innerHTML = ''; // Clear the existing list

    for (let i = 0; i < allMusic.length; i++) {
        // Check if the music name or artist matches the search input
        if (allMusic[i].name.toLowerCase().includes(searchText.toLowerCase()) ||
            allMusic[i].artist.toLowerCase().includes(searchText.toLowerCase()) || 
            allMusic[i].category.toLowerCase().includes(searchText.toLowerCase())) {

            // Render the matching item
            const audioId = `audio-${i}`;
            let liTag = `<li li-index="${i + 1}">
                  <div class="row">
                    <span>${allMusic[i].name}</span>
                    <p>${allMusic[i].artist}</p>
                  </div>
                  <span class="audio-duration" data-duration="Play"></span>
                  <audio id="${audioId}" src="${allMusic[i].src}"></audio>
                  </li>`;
                  
                  //   <span class="audio-duration" data-duration="3:42"></span>
                  ulTag.insertAdjacentHTML("beforeend", liTag);
        }
    }
}

// Event handler for search input
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchText = searchInput.value;
    filterAndRenderList(searchText);
}


// Function to play a particular song from the list onclick of li tag
// add loading 
function playingSong() {
    const ulTag = wrapper.querySelector("ul");
    const allLiTag = ulTag.querySelectorAll("li");
    for (let j = 0; j < allLiTag.length; j++) {
        let audioTag = allLiTag[j].querySelector(".audio-duration");
        if (allLiTag[j].classList.contains("playing")) {
            allLiTag[j].classList.remove("playing");
            let adDuration = audioTag.getAttribute("data-duration");
            audioTag.innerText = adDuration;
        }
        if (allLiTag[j].getAttribute("li-index") == musicIndex) {
            allLiTag[j].classList.add("playing");
            audioTag.innerText = "Playing";
        }
        allLiTag[j].setAttribute("onclick", "clicked(this)");
    }
}


//particular li clicked function
// add loading
function clicked(element) {
    let getLiIndex = element.getAttribute("li-index");
    musicIndex = getLiIndex; //updating current song index with clicked li index
    // loadMusic(musicIndex);

    // added
    // Show loading icon
    showLoadingIcon();;
    loadMusic(musicIndex, playMusic);
    // removeLoadingIcon();


    playMusic();
    playingSong(ulTag);

    // close the playlist after selecting the music
    // const musicList = wrapper.querySelector(".music-list");
    // musicList.classList.remove("show");
}



// Assuming your music list container has an ID, e.g., "musicListContainer"
const musicListContainer = wrapper.querySelector(".music-list");
// Add a click event listener to the container
musicListContainer.addEventListener("click", function (e) {
    // Check if the clicked element is a song item
    if (e.target.tagName === "LI") {
        // Handle the song click
        handleSongClick(e.target);
    }
});


function handleSongClick(li) {
    const liIndex = li.getAttribute("li-index");
    musicIndex = liIndex;
    loadMusic(musicIndex);
    playMusic();
    playingSong();
}




// search box
function searchOnEnter(event) {
    if (event.keyCode === 13) {
        searchGoogle();
    }
}
// search on google
function searchGoogle() {
    const searchInput = document.querySelector(".search__input");
    const query = searchInput.value.trim();
    if (query !== "") {
        const searchUrl = "https://www.bing.com/search?q=" + encodeURIComponent(query);
        window.open(searchUrl, "_blank");
        // Select the text inside the input after the search button is pressed
        searchInput.select();
    }
}
// toggle the clear icon
// function toggleClearIcon() {
//     var input = document.querySelector('.search__input');
//     var clearIcon = document.querySelector('.clear__icon');

//     // If there's text in the input, show the cross icon; otherwise, hide it
//     clearIcon.style.display = input.value.trim() !== '' ? 'block' : 'none';
// }
// clear the search input
function clearSearchInput() {
    var input = document.querySelector('.search__input');
    input.value = '';
    renderMusicList();
    // toggleClearIcon(); // Hide the cross icon after clearing the input
}




// Event listener when the window is loaded
window.addEventListener("load", () => {
    initializeMusicPlayer();
    renderCard();
    // Event listener for when metadata is loaded
    mainAudio.addEventListener("loadedmetadata", function () {
        // playMusic(); // Play the audio once metadata is loaded
    });
});
