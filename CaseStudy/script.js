let progress = document.getElementById("music--progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let startDuration = document.getElementById("start--duration");
let endDuration = document.getElementById("end--duration");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
  startDuration.textContent = formatTime(0);
  endDuration.textContent = formatTime(song.duration);
};

function playPause() {
  if (song.paused) {
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
  } else {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
    startDuration.textContent = formatTime(song.currentTime);
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
};

function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

const imageCollection = [
  {
    img: "https://i.pinimg.com/564x/ce/68/10/ce6810d4bbbba4225ebcd9f6df6add54.jpg",
    title: "The Light Music Club | Keionbu",
    text: "Where musical dreams take flight amidst a backdrop of high school adventures. Here, a group of students bonds over their love for music, forming the band Houkago Tea Time, and igniting their shared passion for playing instruments, composing tunes, and nurturing lifelong friendships. With the quirky guidance of their club advisor Sawako Yamanaka, the Light Music Club is the stage where the excitement of youth, music, and camaraderie harmoniously collide, creating an enchanting and unforgettable story",
    contentClass: "content--1",
  },
  {
    img: "https://i.pinimg.com/736x/26/73/53/2673534217846e690c9432fc8897d097.jpg",
    title: "Harmonious Bonds: The Heart of K-On!",
    text: "Witness the heartwarming friendships of the characters, including the cheerful Yui, reserved Mio, mischievous Ritsu, gentle Mugi, and dedicated Azusa, share a deep bond that transcends their shared love for music. Their enduring friendships, filled with laughter, support, and growth, are a testament to the power of connection and form the emotional core of the series.",
    contentClass: "content--2",
  },
  {
    img: "https://i.pinimg.com/564x/21/a7/b3/21a7b3f44d973c3e4cf9bf84e1e26172.jpg",
    title: "K-On!'s Musical Journey",
    text: "Be part of captivating exploration of youth, camaraderie, and the transformative power of music. As the characters evolve from complete beginners to a formidable band, you'll witness their dedication, passion, and the joy of making music together. Throughout the series, expect endearing characters, relatable high school experiences, and a heartwarming narrative that celebrates the essence of friendship and the bittersweet beauty of adolescence.",
    contentClass: "content--3",
  },
];

function displayImageCollection() {
  const contentSection = document.getElementById("section--content");
  const contentImage = document.getElementById("content--image");

  contentSection.innerHTML = imageCollection
    .map(
      (image) =>
        `
        <div class="content--con ${image.contentClass}">
          <div id="content--image">
            <img src="${image.img}" alt="" />
          </div>
          <div id="content--body">
            <h2>${image.title}</h2>
            <p>${image.text}</p>
          </div>
        </div>
   `
    )
    .join("");
}

const imageSlider = [
  {
    img: "https://i.pinimg.com/564x/3b/f0/0b/3bf00b85765349fc025ff01e0cfb94d1.jpg",
  },
  {
    img: "https://i.pinimg.com/564x/37/aa/25/37aa256bee130e9983f16b5112e017ca.jpg",
  },
  {
    img: "https://i.pinimg.com/564x/4d/b7/b7/4db7b7fc5a7f7285c9d5803176191dba.jpg",
  },
  {
    img: "https://i.pinimg.com/736x/c6/7f/c2/c67fc27e48157e9a879160d80d9557da.jpg",
  },
  {
    img: "https://i.pinimg.com/564x/81/db/08/81db0832a934ffbc8d5d05f0d4a90847.jpg",
  },
  {
    img: "https://i.pinimg.com/736x/cf/04/0e/cf040ec8014477d4c4e3df42c9913b77.jpg",
  },
  {
    img: "https://i.pinimg.com/564x/1c/68/8a/1c688a8b04fc4f87a800321d220d5734.jpg",
  },
  {
    img: "https://i.pinimg.com/564x/7b/b0/3d/7bb03d53b918a474873944877503b63c.jpg",
  },
  {
    img: "https://i.pinimg.com/564x/25/26/70/2526708e909dfaec3d4c7d3834d61263.jpg",
  },
  {
    img: "https://i.pinimg.com/564x/ac/34/dc/ac34dc9001958e27a7d545196b575058.jpg",
  },
  {
    img: "https://i.pinimg.com/564x/86/01/e2/8601e2e978bac70055a2dfa3e25bce37.jpg",
  },
  {
    img: "https://i.pinimg.com/736x/5d/96/84/5d9684f9747f958186e8b2fa9ec8166f.jpg",
  },
  {
    img: "https://i.pinimg.com/736x/de/d5/ec/ded5ec29922d02a45b1d9e4f338acdd0.jpg",
  },
  {
    img: "https://i.pinimg.com/564x/26/1b/3d/261b3d9136717dc5cbe528ec7f352c9b.jpg",
  },
];

function displayImageSlider() {
  const slideTrack = document.querySelector(".slide-track");
  const slide = document.querySelector(".slide");

  slideTrack.innerHTML = imageSlider
    .map(
      (image) =>
        `<div class="slide">
      <img src="${image.img}" alt="" />
    </div>
    `
    )
    .join("");
}

displayImageSlider();
displayImageCollection();
