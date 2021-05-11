let albums = [
  ["Operation Ivy", "Energy"],
  ["Blink 182", "Dude Ranch"],
  ["New Found Glory", "Sticks and Stones"],
];

class Jukebox {
  constructor(albums) {
    this.albums = [];
  }
  addAlbum = function (album) {
    this.albums.push(album);
  };
  favoriteAlbum = function () {
    let max = -1,
      fav;
    for (let i = 0; i < this.albums.length; i++) {
      if (this.albums[i].played > max) {
        max = this.albums[i].played;
        fav = this.albums[i];
      }
    }
    return fav.display();
  };
}

class Album {
  constructor(artist, title) {
    this.artist = artist;
    this.title = title;
    this.played = 0;
  }
  play = function () {
    this.played += 1;
  };
  display = function () {
    return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`;
  };
}

let opt1 = document.getElementById("option1");
console.log("opt1: ", opt1.innerText);
let opt2 = document.getElementById("option2");
let opt3 = document.getElementById("option3");
let optPlay = document.getElementById("play");
let btnFavAlbum = document.getElementById("btnFavAlbum");
let favoriteAlbum = document.getElementById("favoriteAlbum");

var jbox = new Jukebox();
const album1 = new Album("Operation Ivy", "Energy");
const album2 = new Album("Blink 182", "Dude Ranch");
const album3 = new Album("New Found Glory", "Sticks and Stones");

jbox.addAlbum(album1);
jbox.addAlbum(album2);
jbox.addAlbum(album3);

optPlay.addEventListener("click", function () {
  console.log("Album 1 was played");
  let chosenOption = document.querySelector(
    ".btn#dropdownMenuButton:first-child"
  );
  console.log("chosenJ: ", chosenOption.innerHTML);
  if (chosenOption.innerHTML === "'Operation Ivy', Energy") {
    album1.play();
  } else if (chosenOption.innerHTML === "'Blink 182', Dude Ranch") {
    album2.play();
  } else if (
    chosenOption.innerHTML === "'New Found Glory', Sticks and Stones"
  ) {
    album3.play();
  }
});

btnFavAlbum.addEventListener("click", function () {
  favoriteAlbum.innerText = `Your favorite album is: ${jbox.favoriteAlbum()}`;
});
