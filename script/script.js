const btnComplete = document.getElementById("btn-complete");

btnComplete.addEventListener("click", function (event) {
  event.preventDefault();

  let taskLeft = parseInt(getInnerTextById("task-left")) - 1;

  setInnerTextByIDandValue("task-left", taskLeft);

  btnComplete.disabled = true;

  const container = document.getElementById("activity-container");

  const div = document.createElement("div");
  tasktTitle = getInnerTextById("task-title");

  div.innerHTML = `
                  <div class="bg-blue-200 rounded-lg p-2 mt-10">
                    <p class="text-sm">You have completed the task: "${tasktTitle}" at 12:48:15 PM</p>
                  </div>
`;

  container.appendChild(div);
});
