const APIKey = "";

const containerEl = document.querySelector(".photo-container");
const photoEl = document.querySelector(".photo_random");
const photographerEl = containerEl.querySelector(".photo_photographer");
const btnLikeEl = containerEl.querySelector(".photo_like");
const counterOfLikesEl = containerEl.querySelector(".photo_like-counter");
const btnPrevEl = containerEl.querySelector(".photo_previous");

let liked = false;
let likedPhoto = JSON.parse(localStorage.getItem("likedPhoto")) || [];
let savedPhoto = JSON.parse(localStorage.getItem("savedPhoto")) || [];

async function renderRandomPhoto() {
  try {
    const url = "https://api.unsplash.com/photos/random";
    const response = await fetch(url, { headers: { Authorization: "Client-ID " + APIKey } });
    const json = await response.json();
    const photoUrlEl = json.urls.regular;
    const photographerNameEl = json.user.name;

    photoEl.src = photoUrlEl;
    photographerEl.textContent = `Photographer: ${photographerNameEl}`;

    // проверка, есть ли лайк на фото
    liked = likedPhoto.includes(photoUrlEl);
    updateLikeButton();

    // добавить фото в ls
    savedPhoto.unshift({ photoEl: photoUrlEl, photographerEl: photographerNameEl });
    localStorage.setItem("savedPhoto", JSON.stringify(savedPhoto));
  } catch (error) {
    alert("Ошибка сети!");
  }
}

function updateLikeButton() {
  btnLikeEl.textContent = liked ? "Dislike" : "Like";
}

btnLikeEl.addEventListener("click", () => {
  liked = !liked;
  updateLikeButton();

  if (liked) {
    counterOfLikesEl.textContent = parseInt(counterOfLikesEl.textContent) + 1;
    likedPhoto.push(photoEl.src);
    localStorage.setItem("likedPhoto", JSON.stringify(likedPhoto));
  } else {
    counterOfLikesEl.textContent = parseInt(counterOfLikesEl.textContent) - 1;
    const index = likedPhoto.indexOf(photoEl);
    likedPhoto.splice(index, 1);
    localStorage.setItem("likedPhoto", JSON.stringify(likedPhoto));
  }
});

btnPrevEl.addEventListener("click", () => {
  if (savedPhoto.length > 1) {
    savedPhoto.shift();
    const photo = savedPhoto[0];
    photoEl.src = photo.photoEl;
    photographerEl.textContent = `Photographer: ${photo.photographerEl}`;
  } else {
    alert("Фото не доступно!");
  }
});

renderRandomPhoto();
