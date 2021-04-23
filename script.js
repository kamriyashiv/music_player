//ACCESS MUSIC AUDIO
var music = document.querySelector('.music>audio');
var adani = document.getElementById('img');
//ACCESS PLAY BUTTON AND ADD CLICK EVENT LISTENER
var btn = document.querySelector('.play').addEventListener("click", () => {
    //PLAY MUSIC
    music.play();
    adani.classList.add('anim');
});
//ACCESS PAUSE BUTTON AND ADD CLICK EVENT LISTENER
var pouse = document.querySelector('.pouse').addEventListener('click', () => {
    //POUSE MUSIC
    music.pause();
    adani.classList.remove('anim');
})

//ACCESS DATA CONTENT FOR ARREY OBJECTS
var title = document.querySelector('.nam');
var img = document.getElementById('img');
var artist = document.querySelector('.artist');
var next = document.querySelector('.right');
var back = document.querySelector('.left');

///CREATE SONG OBJECTS
var song = [{
    title: "Bhoot Banega",
    artist: "Muhfad",
    img: "muhfad",
    music: "song01"
}, {
    title: "Kabool hai",
    artist: "Muhfad",
    img: "song02",
    music: "song02"
}];
//console.log(song.title)

//CREATE FUNCTION load function for next button
var loadSong = (song) => {
    //CHANGE DATA AFTER CLICK ON NEXT BUTTON
    title.innerHTML = song.title;
    artist.innerHTML = song.artist;
    music.src = "music/" + song.music + ".mp3 ";
    img.src = "img/" + song.img + ".jpg ";
}

songIndex = 0;
nextSong = () => {
    songIndex = (songIndex + 1) % song.length;
    loadSong(song[songIndex]);
    music.play();
}
prevSong = () => {
    songIndex = (songIndex - 1 + song.length);
    loadSong(song[songIndex]);
    music.play();
}
next.addEventListener("click", nextSong);
back.addEventListener("click", prevSong);


//add loader
var data01 = document.querySelector('.min');
var foot = document.querySelector('.footer_content');
var load = document.querySelector('.load');
var loadData = document.querySelector('.load_content');
window.addEventListener("load", function() {
    setTimeout(function() {
        data01.style.display = "block";
        loadData.style.display = "none"
        load.style.display = "none";
        foot.style.display = "block";

    }, 3000);
})

var moreData = [{
    songName: "Kabool Hai",
    artist: "Muhfad",
    Image: "img/song02.jpg",
    song: "music/song02.mp3",
    id: "f01",
    event: "playMusic(event,'f01')",
    imgId: "i01",
}, {
    songName: "Adayein",
    artist: "Muhfad",
    Image: "img/adayein-muhfaad.jpg",
    song: "music/ADAYEIN (Official Audio) _ MUHFAAD _ KARTAVYA _ 2020(MP3_128K).mp3",
    id: "f02",
    event: "playMusic(event,'f02')",
    imgId: "i02",
}, {
    songName: "BackFlip",
    artist: "Muhfad",
    Image: "img/hqdefault.jpg",
    song: "music/BackFlip __ Official Audio _ Muhfaad _ 2020(MP3_128K).mp3",
    id: "f03",
    event: "playMusic(event,'f03')",
    imgId: "i03",
}, {
    songName: "Are Bhai Bhai",
    artist: "Muhfad",
    Image: "img/bj.jpg",
    song: "music/Are Bhai Bhai _ Muhfaad _ Harjas _ Mynk ki filam(MP3_128K).mp3",
    id: "f04",
    event: "playMusic(event,'f04')",
    imgId: "i04",
}, {
    songName: "HAR HAR...",
    artist: "Muhfad",
    Image: "img/harhar.jpg",
    song: "music/HAR HAR GANGE _ MUHFAAD _ Dis Is Safed Sach (D.I.S.S.) _ 2018(MP3_128K).mp3",
    id: "f05",
    event: "playMusic(event,'f05')",
    imgId: "i05",
}, {
    songName: "Jashan hai ",
    artist: "Muhfad",
    Image: "img/Jashan-Hai-Lyrics-Muhfaad-768x432.jpg",
    song: "music/Jashan hai _ Muhfaad _ 2020 (Shot on IPhone)(MP3_128K).mp3",
    id: "f06",
    event: "playMusic(event,'f06')",
    imgId: "i06",
}, {
    songName: "Dussehra ",
    artist: "Muhfad",
    Image: "img/dussehra-muhfaad.jpg",
    song: "music/Dussehra __ Muhfaad __ Kartavya __ Official Song __ New Rap 2020 __ Maharaj(MP3_128K).mp3",
    id: "f07",
    event: "playMusic(event,'f07')",
    imgId: "i07",
}, {
    songName: "INSTAGRAM... ",
    artist: "Muhfad",
    Image: "img/maxresdefault.jpg",
    song: "music/INSTAGRAM LIVE _ MUHFAAD _ KARTAVYA _ 2020(MP3_128K).mp3",
    id: "f08",
    event: "playMusic(event,'f08')",
    imgId: "i08",
}]
var data = document.querySelector('.data').innerHTML += `
      <div class="container">
        <h1><strong>Tranding song</strong></h1>
        <hr>
        <ul class=""></ul>
      </div>
    `;
for (var i in moreData) {
    var data = document.querySelector('.data>.container>ul').innerHTML += `
    
       <li>
          <a>
            <div class="main">
            <div class="musics text-center">
            <h3>${moreData[i].songName}</h3>
            <h4>${moreData[i].artist}</h4>
            <img src="${moreData[i].Image}" id="${moreData[i].imgId}">
        </div>
        <div class="song">
            <audio src="${moreData[i].song}" class="audio" id="${moreData[i].id}"></audio>
        </div>
        <div class="cntrl text-center">
            <a class="playMore" onclick="${moreData[i].event}"><i class="fas fa-play"></i></a>
            <a class="playMore pause" onclick="pauseSong()"><i class="fas fa-pause"></i></a>
        </div>
            </div>
          </a>
       </li>
    
  `;

}

function playMusic(evt, playSong) {
    var playBtn = document.querySelectorAll('.playMore');


    for (var i in playBtn) {

    }

    document.getElementById(playSong).play();
    document.getElementById(playSong).play().innerHTML += `Hello`;
    evt.currentTarget.className += " active";
}
pauseSong = () => {
    var audio = document.getElementsByClassName('audio');
    for (var i in audio) {
        audio[i].pause();
    }
}

// function myFunction() {
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("myTable");
//     tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[0];
//         if (td) {
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//     }
// }


//search bar
function myFunction() {
    var input, filter, S_music, li, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();

    S_music = document.querySelectorAll("li");
    for (i = 0; i < S_music.length; i++) {
        if (S_music[i]) {
            txtValue = S_music[i].textContent;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                S_music[i].style.display = "";
            } else {
                S_music[i].style.display = "none";
            }
        }
    }
}