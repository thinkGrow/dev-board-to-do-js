const btnComplete = document.getElementById("btn-complete");

btnComplete.addEventListener("click", function (event) {
  event.preventDefault();
  // "task-left"

  let taskLeft = getInnerTextById("task-left") - 1;
  // console.log(taskLeft);
  setInnerTextByIDandValue("task-left", taskLeft);

  btnComplete.disabled = true;
});
