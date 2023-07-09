/* 0 nav bar script */
const toggleButton = document.getElementById("toggle-button");
const naviList = document.getElementById("navi-list");
toggleButton.addEventListener("click", () => {
  naviList.classList.toggle("active");
});


/* date formate script */
const startDateInput = document.getElementById('start-date');
const endDateInput = document.getElementById('end-date');

// Convert the date to the desired format (dd-mm-yyyy)
const formatDate = (date) => {
  const d = new Date(date);
  const day = d.getDate().toString().padStart(2, '0');
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const year = d.getFullYear().toString();
  return `${day}-${month}-${year}`;
};

// Set the formatted date as the input value
startDateInput.value = formatDate(startDateInput.value);
endDateInput.value = formatDate(endDateInput.value);

/* */