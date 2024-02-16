const userBirthDate = document.querySelectorAll(".card__input");
const calculate = document.querySelector(".card__button");

// Start validation
function isValidDay(day) {
  if (day > 0 && day < 32) {
    return true;
  } else {
    return false;
  }
}
function isValidMonth(month) {
  if (month > 0 && month < 13) {
    return true;
  }
  return false;
}

function isValidYear(year) {
  currentYear = new Date().getFullYear();
  if (currentYear - year >= 0 && year > 1900) {
    return true;
  } else {
    return false;
  }
}
function isValidDate(yearElement, monthElement, dayElement) {
  const result = [false, false, false];

  if (!isValidYear(yearElement.value)) {
    yearElement.classList.add("card__input--error");
  } else {
    yearElement.classList.remove("card__input--error");
    result[0] = true;
  }

  if (!isValidMonth(monthElement.value)) {
    monthElement.classList.add("card__input--error");
  } else {
    monthElement.classList.remove("card__input--error");
    result[1] = true;
  }
  if (!isValidDay(dayElement.value)) {
    dayElement.classList.add("card__input--error");
  } else {
    dayElement.classList.remove("card__input--error");
    result[2] = true;
  }
  return result.every((item) => item === true);
}

// End validation

function calculateAge(year, month, age) {
  let today = new Date();
  let birthDate = new Date(year, month - 1, age);
  let yearDiff = today.getFullYear() - birthDate.getFullYear();
  let monthDiff = today.getMonth() - birthDate.getMonth();
  let daysDiff = today.getDate() - birthDate.getDate();
  if (
    monthDiff < 0 ||
    // (monthDiff === 0 && today.getDate() < birthDate.getDate())
    (monthDiff === 0 && daysDiff > 0)
  ) {
    yearDiff--;
  }
  return yearDiff;
}
function clickHandler() {
  const day = document.querySelector(".card__input[name='day']");
  const month = document.querySelector(".card__input[name='month'");
  const year = document.querySelector(".card__input[name='year']");
  const result = document.querySelector(".card__resultValue");

  if (isValidDate(year, month, day)) {
    result.textContent = calculateAge(year.value, month.value, day.value);
  } else {
    result.textContent = "-_-";
  }
}

userBirthDate.forEach((card) => {
  card.addEventListener("keydown", (e) => {
    e.key === "Enter" && clickHandler();
  });
});
calculate.addEventListener("click", clickHandler);
