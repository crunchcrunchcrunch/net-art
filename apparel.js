document.querySelector("#cute").addEventListener("click", function () {
  prompt(
    "YOU JUST WON 2 MILLION DOLLARS!! TYPE YOUR MOTHER'S SSN NUMBER TO CLAIM!!!"
  );
});
document.querySelector("#meta").addEventListener("click", function () {
  const el = document.querySelector("#meta");
  if (!el) return;

  // go back n forth
  const currentSrc = el.getAttribute("src");
  const newSrc = currentSrc.includes("mark")
    ? "images/jeans.jpg"
    : "images/mark.png";

  el.setAttribute("src", newSrc);
});

document.querySelector("#hot").addEventListener("click", function () {
  prompt("Save the turtles!!! donate to iloveturtles@yahoo.com");
});
setTimeout(function () {
  document.getElementById("pop").style.display = "block";
}, 2000);

document.querySelector("#pop").addEventListener("click", function () {
  document.getElementById("pop").style.display = "none";
});

setTimeout(function () {
  document.getElementById("popup").style.display = "block";
}, 2000);
setTimeout(function () {
  document.getElementById("popup2").style.display = "block";
}, 2500);
document.querySelector("#popup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});

document.querySelector("#popup2").addEventListener("click", function () {
  document.getElementById("popup2").style.display = "none";
});
