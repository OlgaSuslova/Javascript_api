const scheduleData = `[
    {
        "id": 1,
        "name": "Йога",
        "time": "10:00 - 11:00",
        "maxParticipants": "15",
        "currentParticipants": "8"
    },
    {
        "id": 2,
        "name": "Пилатес",
        "time": "11:30 - 12:30",
        "maxParticipants": "10",
        "currentParticipants": "5"
    },
    {
        "id": 3,
        "name": "Кроссфит",
        "time": "13:00 - 14:00",
        "maxParticipants": "20",
        "currentParticipants": "15"
    },
    {
        "id": 4,
        "name": "Танцы",
        "time": "14:30 - 15:30",
        "maxParticipants": "12",
        "currentParticipants": "10"
    },
    {
        "id": 5,
        "name": "Бокс",
        "time": "16:00 - 17:00",
        "maxParticipants": "8",
        "currentParticipants": "6"
    }
  ]`;

const localStorageKey = "schedule";
const container = document.querySelector(".container");

if (!localStorage.getItem(localStorageKey)) {
  localStorage.setItem(localStorageKey, scheduleData);
}

let lessons = JSON.parse(scheduleData);
lessons.forEach((lesson) => {
  container.insertAdjacentHTML("beforeend", drawSchedule(lesson));
});

const cancelBtns = document.querySelectorAll(".cancel");
cancelBtns.forEach((cancelBtn) => {
  cancelBtn.disabled = true;
});

const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (e.target.classList.contains("register")) {
      registerLesson(e, btn);
    }
    if (e.target.classList.contains("cancel")) {
      cancelLesson(e, btn);
    }
  });
});

function registerLesson(e, btn) {
  const lesson = e.target.closest(".lesson");
  for (const item of lesson.children) {
    if (item.classList.contains("lesson__currentParticipants")) {
      const cur = Number(item.textContent);
      const max = Number(item.previousElementSibling.textContent);
      if (cur === max) {
        btn.disabled = true;
      }
      if (cur + 1 < max) {
        item.textContent = Number(item.textContent) + 1;
        btn.disabled = true;
        btn.nextElementSibling.disabled = false;
      }
    }
  }
}

function cancelLesson(e, btn) {
  const lesson = e.target.closest(".lesson");
  for (const item of lesson.children) {
    if (item.classList.contains("lesson__currentParticipants")) {
      const cur = Number(item.textContent);
      if (cur + 1 > 0) {
        item.textContent = Number(item.textContent) - 1;
        btn.disabled = true;
        btn.previousElementSibling.disabled = false;
      }
    }
  }
}

function drawSchedule(lesson) {
  return `<div class="lesson" data-id="${lesson.id}">
      <h3 class="lesson__name">${lesson.name}</h3>
      <p class="lesson__id">${lesson.id}</p>
      <p class="lesson__time">${lesson.time}</p>
      <p class="lesson__maxParticipants">${lesson.maxParticipants}</p>
      <p class="lesson__currentParticipants">${lesson.currentParticipants}</p>
      <button class="register">Записаться</button>
      <button class="cancel">Отменить запись</button>
      </div>
      `;
}
