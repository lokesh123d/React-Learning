const taskList = [];

const elementObject = {
  form: document.querySelector("form"),
  titleInput: document.querySelector("#titleInput"),
  startTimeInput: document.querySelector("#startTimeInput"),
  endTimeInput: document.querySelector("#endTimeInput"),
  submitBtn: document.querySelector(".submitBtn"),
  calenderContainer: document.querySelector(".calenderContainer"),
//   hourContainer: document.querySelector(".hourContainer"),
  titleContainer: document.querySelector(".titleContainer"),
};
const hourContainers = [];

function calenderUiShowing() {
  for (let i = 0; i < 24; i++) {
    let hourCont = document.createElement("div");
    hourCont.classList.add("hourContainer");
    hourCont.textContent = `${i}:00`;

    elementObject.calenderContainer.appendChild(hourCont);
    hourContainers.push(hourCont); 
  }

}
calenderUiShowing();

function showTaskUi() {


  taskList.forEach((val) => {
    for (let i = 0; i < 24; i++) {
      if (val.startTimeHour <= i && val.endTimeHour >= i) {
        let width = 100;
        let left = 0;

        if (val.startTimeHour === i && val.endTimeHour === i) {
          width = ((val.endTimeMin - val.startTimeMin) / 60) * 100;
          left = (val.startTimeMin / 60) * 100;
        } else if (val.startTimeHour === i) {
          width = ((60 - val.startTimeMin) / 60) * 100;
          left = (val.startTimeMin / 60) * 100;
        } else if (val.endTimeHour === i) {
          width = (val.endTimeMin / 60) * 100;
          left = 0;
        }

        const taskContainer = document.createElement("div");
        const titleContainer = document.createElement("h3");

        titleContainer.textContent = val.title;

        taskContainer.classList.add("taskContainer");
        titleContainer.classList.add("titleContainer");

        taskContainer.style.width = width + "%";
        taskContainer.style.left = left + "%";
        taskContainer.style.position = "relative";

        taskContainer.appendChild(titleContainer);
        hourContainers[i].appendChild(taskContainer);
      }
    }
  });
}

showTaskUi();

elementObject.form.addEventListener("submit", function (e) {
  e.preventDefault();
  const titleInputValue = elementObject.titleInput.value.trim();
  const startTimeInputValue = elementObject.startTimeInput.value.trim();
  const endTimeInputValue = elementObject.endTimeInput.value.trim();

  if (
    titleInputValue !== "" &&
    startTimeInputValue !== "" &&
    endTimeInputValue !== ""
  ) {
    let [startTimeHour, startTimeMin] = startTimeInputValue
      .split(":")
      .map(Number);
    let [endTimeHour, endTimeMin] = endTimeInputValue.split(":").map(Number);

    let newTask = {
      title: titleInputValue,
      startTimeHour,
      startTimeMin,
      endTimeHour,
      endTimeMin,
    };
    taskList.push(newTask);
    showTaskUi();
    console.log(taskList);
  } else {
    return null;
  }
});
