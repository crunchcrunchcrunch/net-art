setTimeout(function () {
  document.getElementById("popup3").style.display = "block";
}, 1000);

document.querySelector("#milk").addEventListener("click", function () {
  prompt("type in your credit card number to win a $1million shopping spree!");
});

document.querySelector("#fastrak").addEventListener("click", function () {
  const el = document.querySelector("#fastrak");
  if (!el) return;

  // go back n forth
  const currentSrc = el.getAttribute("src");
  const newSrc = currentSrc.includes("irs")
    ? "./images/ant.jpeg"
    : "./images/fastrak.png";

  el.setAttribute("src", newSrc);
});

document.querySelector("#che").addEventListener("click", function () {
  const el = document.querySelector("#che");
  if (!el) return;

  // go back n forth
  const currentSrc = el.getAttribute("src");
  const newSrc = currentSrc.includes("chess")
    ? "./images/che.png"
    : "./images/chess.jpg";

  el.setAttribute("src", newSrc);
});
document.querySelector("#popup3").addEventListener("click", function () {
  document.getElementById("popup3").style.display = "none";
});

document.querySelector("#chili").addEventListener("click", function () {
  prompt(
    "Put in your legal name and address for a chance to have dinner with Kim Kardashian"
  );
});

document.querySelector("#mark").addEventListener("click", function () {
  prompt("security question time! whats your SSN?????");
});

document.querySelector("#zuck").addEventListener("click", function () {
  const el = document.querySelector("#zuck");
  if (!el) return;

  // go back n forth
  const currentSrc = el.getAttribute("src");
  const newSrc = currentSrc.includes("mark")
    ? "./images/crumbs.png"
    : "./images/mark.png";

  el.setAttribute("src", newSrc);
});
