window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const inputBox = document.getElementById("inputBox").value;

    document.querySelector("span#readerName").innerText = inputBox;
    document.querySelector("main#sendLetter").removeAttribute("class");
    console.log("moved form tag above main tag");
  };
};