const btnComplete = document.getElementsByClassName("btn-complete");

for (let btn of btnComplete) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    btn.disabled = true;

    let taskLeft = parseInt(getInnerTextById("task-left")) - 1;
    setInnerTextByIDandValue("task-left", taskLeft);

    let taskDone = parseInt(getInnerTextById("task-done")) + 1;
    setInnerTextByIDandValue("task-done", taskDone);

    const container = document.getElementById("activity-container");

    const div = document.createElement("div");
    const taskTitle = document.getElementsByClassName("task-title");
    // console.log(taskTitle[1].innerText);

    for (let title of taskTitle) {
      div.innerHTML = `
                              <div class="bg-blue-200 rounded-lg p-2 mt-10">
                                <p class="text-sm">You have completed the task: "${title.innerText}" at 12:48:15 PM</p>
                              </div>
            `;

      container.appendChild(div);
    }
  });
}
