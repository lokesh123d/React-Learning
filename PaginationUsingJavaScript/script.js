const main = document.querySelector(".main");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const buttons = document.querySelector(".buttons");
const PageNo = document.querySelector(".pageNo");
const input = document.querySelector(".searchInput");
const suggestion = document.querySelector(".suggestion");
let Page = 1;
let LastPage = null;
let currentData = null;
const url = `https://jsonplaceholder.typicode.com/photos`;
buttons.addEventListener("click", (e) => {
  e.target.innerHTML == "Next" ? (Page = Page + 1) : (Page = Page - 1);
  main.innerHTML = "";
  fetchingData();
});
const fetchingData = async () => {
  PageNo.innerHTML = Page;
  if (Page <= 0) {
    prevBtn.disabled = true;
    main.innerHTML = "Last thing";
    return;
  } else if (Page == LastPage) {
    nextBtn.disabled = true;
    main.innerHTML = "Last thing";
    return;
  } else {
    nextBtn.disabled = false;
    prevBtn.disabled = false;
  }
  const response = await fetch(url);
  const res = await response.json();
  currentData = res;
  CalculatePages(res);
};
fetchingData();
function renderData(data) {
  for (let i = 8 * (Page - 1); i < Page * 8; i++) {
    const li = document.createElement("li");
    li.textContent = data[i].title;
    main.append(li);
  }
}

function CalculatePages(data) {
  const dataLength = data.length;
  const TotalPages = Math.floor(dataLength / 8);
  LastPage = TotalPages;
  renderData(data);
}
input.addEventListener("input", (event) => {
  handleSearchInput(event.target.value);
});
const debounce = (callback, delay) => {
  let timeoutId = null;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};


const handleSearchInput = debounce((searchText) => {
  renederSuggestion(searchText);
}, 300);
function renederSuggestion(searchText) {
  suggestion.innerHTML = "";
  for (let i = 8 * (Page - 1); i <= Page * 8; i++) {
    const isvalid = currentData[i].title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    if (isvalid) {
      let li = document.createElement("li");
      li.innerHTML = currentData[i].title;
      suggestion.append(li);
    }
  }
}

// i can fetch data form a api and after that i want to show this data at  a screen with the pagination so first i have calculate the data length which is helping me to find the how much pages we have like a we create a only that much buttons and pages and according how much i want to screen like if i get to i have to create a 10 pages then i run a one function which is run and get a remains data and show the screen and i check which button it will be created or whats going on ?
