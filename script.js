document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".line");
  const delayed = document.getElementById("delayed");

  let index = 0;

  document.body.addEventListener("click", () => {
    if (index < lines.length) {
      lines[index].classList.add("visible");
      index++;

      // after last line, reveal delayed message
      if (index === lines.length) {
        setTimeout(() => {
          delayed.classList.add("show");
        }, 3000);
      }
    }
  });
});
