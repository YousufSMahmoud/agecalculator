let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");
let errorMessage = document.querySelectorAll(".card__errorMessage");
let button = document.querySelector(".card__button");
let input = document.querySelectorAll(".card__input");
let result = document.querySelector(".card__resultValue");
let isValid = true;
// validation
console.log(input);
function validateYear() {
  const date = new Date();
  let maximumYear = date.getFullYear();
  let minumumYear = 1890;
  if (year.value > maximumYear || year.value < minumumYear) {
    errorMessage[2].style.visibility = "visible";
    errorMessage[2].style.opacity = "1";
    input[2].classList.add("card__input--error");
    isValid = false;
  } else {
    input[2].classList.remove("card__input--error");
    errorMessage[2].style.visibility = "hidden";
    errorMessage[2].style.opacity = "0";
  }
}

function validateMonth() {
  const date = new Date();
  let maximumMonth = 12;
  let minumumMonth = 1;
  if (month.value > maximumMonth || month.value < minumumMonth) {
    errorMessage[1].style.visibility = "visible";
    errorMessage[1].style.opacity = "1";
    input[1].classList.add("card__input--error");
    isValid = false;
  } else {
    input[1].classList.remove("card__input--error");
    errorMessage[1].style.visibility = "hidden";
    errorMessage[1].style.opacity = "0";
  }
}
function validateDay() {
  const date = new Date();
  let maximumDay = 31;
  let minumumDay = 1;
  if (day.value > maximumDay || day.value < minumumDay) {
    errorMessage[0].style.visibility = "visible";
    errorMessage[0].style.opacity = "1";
    input[0].classList.add("card__input--error");
    isValid = false;
  } else {
    input[0].classList.remove("card__input--error");
    errorMessage[0].style.visibility = "hidden";
    errorMessage[0].style.opacity = "0";
  }
}
function validate() {
  isValid = true;
  validateYear();
  validateMonth();
  validateDay();
}
function calculateAge() {
  validate();
  if (isValid) {
    const date = new Date();
    let birthYear = year.value;
    let currentYear = date.getFullYear();
    let birthMonth = month.value;
    let currentMonth = date.getMonth() + 1;
    let birthDay = day.value;
    let currentDay = date.getDate();
    yearDifferent = currentYear - birthYear;
    monthDifferent = currentMonth - birthMonth;
    dayDifferent = currentDay - birthDay;
    if (monthDifferent < 0) {
      yearDifferent--;
    } else if (monthDifferent === 0 && dayDifferent < 0) {
      yearDifferent--;
    }
    result.textContent = yearDifferent;
  } else {
    result.textContent = "--";
  }
}
button.addEventListener("click", calculateAge);
input.forEach((item) => {
  item.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      calculateAge();
    }
  });
});
