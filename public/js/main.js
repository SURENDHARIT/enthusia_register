var slt = document.getElementById("slt");

var solo = document.getElementById("solo");

var group = document.getElementById("group");

function handleSlt() {
  console.log(slt.value);
  if (slt.value === "solo") {
    group.style.display = "none";
    solo.style.display = "block";
  }
  if (slt.value === "group") {
    solo.style.display = "none";
    group.style.display = "block";
  }
}
