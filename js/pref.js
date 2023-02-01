let selectedOptions = [];
let customInputs = [];

document.getElementById("sizeForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let sizeForm = document.getElementById("sizeForm");
  let sizeInputs = sizeForm.getElementsByTagName("input");
  for (let i = 0; i < sizeInputs.length; i++) {
    if (sizeInputs[i].checked) {
      selectedOptions.push(sizeInputs[i].value);
    }
  }
  customInputs.push(document.getElementById("sizecustom").value);
});

document.getElementById("styleForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let styleForm = document.getElementById("styleForm");
  let styleInputs = styleForm.getElementsByTagName("input");
  for (let i = 0; i < styleInputs.length; i++) {
    if (styleInputs[i].checked) {
      selectedOptions.push(styleInputs[i].value);
    }
  }
  customInputs.push(document.getElementById("stylecustom").value);
});

document.getElementById("brandForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let brandForm = document.getElementById("brandForm");
  let brandInputs = brandForm.getElementsByTagName("input");
  for (let i = 0; i < brandInputs.length; i++) {
    if (brandInputs[i].checked) {
      selectedOptions.push(brandInputs[i].value);
    }
  }
  customInputs.push(document.getElementById("brandcustom").value);
});

document.getElementById("submitButton").addEventListener("click", function() {
  updateSelectedOptions(selectedOptions, customInputs);
});

function updateSelectedOptions(selected, custom) {
  let selectedList = document.getElementById("selectedList");
  selectedList.innerHTML = "";
  for (let i = 0; i < selected.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = selected[i];
    selectedList.appendChild(li);
  }

  let customList = document.getElementById("customList");
  customList.innerHTML = "";
  let li = document.createElement("li");
  li.innerHTML = "Custom Settings: ";
  customList.appendChild(li);
  for (let i = 0; i < custom.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = custom[i];
    customList.appendChild(li);
  }
}
