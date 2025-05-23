function getInputValueByID(id) {
  const value = document.getElementById(id).value;
  return value;
}

function getInnerTextById(id) {
  const value = document.getElementById(id).innerText;
  return value;
}

function setInnerTextByIDandValue(id, value) {
  document.getElementById(id).innerText = value;
}

function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}
