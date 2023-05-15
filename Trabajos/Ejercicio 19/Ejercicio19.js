document.addEventListener("mousemove", function(event) {
  var title = document.querySelector("title");
  title.textContent = "X: " + event.clientX + " | Y: " + event.clientY;
});