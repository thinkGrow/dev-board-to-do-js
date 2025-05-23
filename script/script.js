const btnComplete = document.getElementsByClassName("btn-complete");

for (let btn of btnComplete) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated succesfully");
    btn.disabled = true;

    let taskLeft = parseInt(getInnerTextById("task-left")) - 1;
    setInnerTextByIDandValue("task-left", taskLeft);

    let taskDone = parseInt(getInnerTextById("task-done")) + 1;
    setInnerTextByIDandValue("task-done", taskDone);

    const container = document.getElementById("activity-container");

    // Get task title from the same card
    const taskCard = btn.closest(".task-card");
    const taskTitle = taskCard.querySelector(".task-title").innerText;

    const div = document.createElement("div");
    div.innerHTML = `
      <div class="bg-blue-200 rounded-lg p-2 mt-10">
        <p class="text-sm">You have completed the task: "${taskTitle}" at ${new Date().toLocaleTimeString()}</p>
      </div>
    `;

    container.appendChild(div);
  });
}

const clearHistoryBtn = document.getElementById("clear-history-btn");

clearHistoryBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const container = document.getElementById("activity-container");
  container.innerHTML = "";
  alert("History cleared");
});



