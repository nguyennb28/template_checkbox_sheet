const selectMonth = document.getElementById("list-month");
const inputYear = document.getElementById("input-year");
const tableDateTimes = document.getElementById("table-date-month-year");
// list-date-month-year
const currentYear = new Date().getFullYear();
inputYear.value = currentYear;
// Get list month
const listMonth = function () {
  for (let index = 12; index > 0; index--) {
    selectMonth.innerHTML += `<option value="${index}">${index}</option>`;
  }
};
// run listMonth()
listMonth();

let days = getDateByMonthAndYear(inputYear.value, selectMonth.value);
listDateMonthYear(days);
// Get current year
selectMonth.addEventListener("change", function (e) {
  if (inputYear.value) {
    days = getDateByMonthAndYear(inputYear.value, e.target.value);
    listDateMonthYear(days);
  }
});
inputYear.addEventListener("keyup", function (e) {
  if (e.target.value.length == 4) {
    days = getDateByMonthAndYear(e.target.value, selectMonth.value);
    listDateMonthYear(days);
    // change title year
    const titleYear = document.querySelector(".title-year");
  }
});

// get date of month and year
function getDateByMonthAndYear(year, month) {
  if (year && month) {
    const date = new Date(year, month, 0);
    const days = date.getDate();
    return days;
  }
  return 0;
}

function listDateMonthYear(days) {
  const listDate = document.querySelector(".list-date-month-year");
  const listCheckbox = document.querySelector(".list-checkbox");
  listDate.innerHTML = "";
  listCheckbox.innerHTML = "";
  for (let index = days; index > 0; index--) {
    listDate.innerHTML += `<td>
    ${new Date(
      inputYear.value,
      selectMonth.value - 1,
      index
    ).toLocaleDateString("vi-VN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })}
    </td>`;
    listCheckbox.innerHTML += `<td><input type="checkbox" class="input-checkbox" name="date" value="${index}-${selectMonth.value}-${inputYear.value}" /></td>`;
  }
}

const inputCheckbox = document.querySelectorAll(".input-checkbox");
const listTotal = document.querySelector(".list-total");
let total = 0;
for (let event of inputCheckbox) {
  event.addEventListener("change", function (e) {
    if (e.target.checked) {
      total += 1;
    } else {
      total -= 1;
    }
    listTotal.textContent = total;
  });
}
