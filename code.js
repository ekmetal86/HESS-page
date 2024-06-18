// DROPDOWN

const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl));


// VIDEO

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'v7K0ADi3Kr0?si=EzSyiggYjLXAglG3',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}


// MUSIC

// Harpokrates
const harpokrates = [
  { name: '01 - King Aiwass', source: 'music/HESS - Harpokrates/HESS - Harpokrates - 01 King Aiwass.mp3' },
  { name: '02 - God Of Silence', source: 'music/HESS - Harpokrates/HESS - Harpokrates - 02 God of Silence.mp3' },
  { name: '03 - Thoth', source: 'music/HESS - Harpokrates/HESS - Harpokrates - 03 Thoth.mp3' },
  { name: '04 - The Outsider', source: 'music/HESS - Harpokrates/HESS - Harpokrates - 04 The Outsider.mp3' },
  { name: '05 - Heroes', source: 'music/HESS - Harpokrates/HESS - Harpokrates - 05 Heroes.mp3' },
  { name: '06 - Battle Of Maldon', source: 'music/HESS - Harpokrates/HESS - Harpokrates - 06 Battle of Maldon.mp3' },
  { name: '07 - Chaos At Uruk', source: 'music/HESS - Harpokrates/HESS - Harpokrates - 07 Chaos at Uruk.mp3' },
  { name: '08 - Atlantean Dreams', source: 'music/HESS - Harpokrates/HESS - Harpokrates - 08 Atlantean Dreams.mp3' },
  { name: '09 - Hagalaz', source: 'music/HESS - Harpokrates/HESS - Harpokrates - 09 Hagalaz.mp3'}
];

// Hagalaz
const hagalaz = [
  { name: "01 - Blood & Iron", source: 'music/HESS - Hagalaz/HESS - Hagalaz - 01 Blood & Iron.mp3'},
  { name: "02 - The Hessian", source: 'music/HESS - Hagalaz/HESS - Hagalaz - 02 The Hessian.mp3'},
  { name: "03 - Clarisse`s Nightmare", source: "music/HESS - Hagalaz/HESS - Hagalaz - 03 Clarisse's Nightmare.mp3"},
  { name: "04 - Der Teufel und sein Lehrling", source: 'music/HESS - Hagalaz/HESS - Hagalaz - 04 Der Teufel und sein Lehrling.mp3'},
  { name: "05 - The Giant (in memory of Ronnie James Dio)", source: 'music/HESS - Hagalaz/HESS - Hagalaz - 05 The Giant (in memory of Ronnie James Dio).mp3'},
  { name: "06 - Interpretación", source: 'music/HESS - Hagalaz/HESS - Hagalaz - 06 Interpretación.mp3'},
  { name: "07 - Sailor`s Cross", source: "music/HESS - Hagalaz/HESS - Hagalaz - 07 Sailor's Cross.mp3"},
  { name: "08 - Perpetual Flight", source: 'music/HESS - Hagalaz/HESS - Hagalaz - 08 Perpetual Flight.mp3'},
  { name: "09 - Boleskine House", source: 'music/HESS - Hagalaz/HESS - Hagalaz - 09 Boleskine House.mp3'},
  { name: "10 - Diamonds & Rust (Joan Baez-Judas Priest)", source: 'music/HESS - Hagalaz/HESS - Hagalaz - 10 Diamonds & Rust (Joan Baez-Judas Priest).mp3'}
];

// Caught somewhere in time
const maiden = [
  {name: "Caught Somewhere In Time - Iron Maiden cover", source: 'music/HESS - Varios/HESS - Caught Somewhere In Time.mp3'}
];

// Sailor's cross
const sailor = [
  {name: "Sailor`s Cross - European Edition", source: 'music/HESS - Varios/Sailor`s Cross - European Edition.mp3'}
];

const playlistHarpokrates = document.getElementById('playlist-harpokrates');
const playlistHagalaz = document.getElementById('playlist-hagalaz');
const playlistMaiden = document.getElementById('playlist-maiden');
const playlistSailor = document.getElementById('playlist-sailor');


const audioPlayer = document.getElementById('audio-player');

harpokrates.forEach((song, index) => {
  const listItem = document.createElement('li');
  listItem.textContent = song.name;
  listItem.className = 'playlist-item';
  listItem.addEventListener('click', () => playHarpokrates(index));
  playlistHarpokrates.appendChild(listItem);
});

hagalaz.forEach((song1, index1) => {
  const listItem = document.createElement('li');
  listItem.textContent = song1.name;
  listItem.className = 'playlist-item';
  listItem.addEventListener('click', () => playHagalaz(index1));
  playlistHagalaz.appendChild(listItem);
});

maiden.forEach((song2, index2) => {
  const listItem = document.createElement('li');
  listItem.textContent = song2.name;
  listItem.className = 'playlist-item';
  listItem.addEventListener('click', () => playMaiden(index2));
  playlistMaiden.appendChild(listItem);
});

sailor.forEach((song, index) => {
  const listItem = document.createElement('li');
  listItem.textContent = song.name;
  listItem.className = 'playlist-item';
  listItem.addEventListener('click', () => playSailor(index));
  playlistSailor.appendChild(listItem);
});

function playHarpokrates(index) {
  const selectedSong = harpokrates[index];
  audioPlayer.src = selectedSong.source;
  audioPlayer.play();
}

function playHagalaz(index){
  const selectedSong1 = hagalaz[index];
  audioPlayer.src = selectedSong1.source;
  audioPlayer.play();
}

function playMaiden(index){
  const selectedSong1 = maiden[index];
  audioPlayer.src = selectedSong1.source;
  audioPlayer.play();
}

function playSailor(index){
  const selectedSong = sailor[index];
  audioPlayer.src = selectedSong.source;
  audioPlayer.play();
}