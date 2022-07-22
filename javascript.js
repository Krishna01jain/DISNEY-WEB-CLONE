const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 100}ms">${letter}</span>`
    )
    .join("");
});

// var img_slide = document.querySelector('body');
var image = ["1", "2", "3", "4"];
var i = image.length; //5

function next() {
  if (i < image.length) {
    i = i + 1;
  } else {
    i = 1;
  }

  document.body.style.background = "url(" + image[i - 1] + ".jpg) no-repeat";
  // document.body.style.height = "100%";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundSize = "cover";
}

setInterval(next, 5000);
