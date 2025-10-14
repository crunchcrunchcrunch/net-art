document.querySelector("#dreams").addEventListener("click", function () {
  const el = document.querySelector("#dreams");
  if (!el) return;

  // go back n forth
  const currentSrc = el.getAttribute("src");
  const newSrc = currentSrc.includes("dreams")
    ? "./images/jet.jpg"
    : "./images/woman.png";
  el.setAttribute("src", newSrc);
});
setTimeout(function () {
  document.getElementById("pop4").style.display = "block";
}, 2000);

document.querySelector("#pop4").addEventListener("click", function () {
  document.getElementById("pop4").style.display = "none";
});

document.querySelector("#timb").addEventListener("click", function () {
  const el = document.querySelector("#timb");
  if (!el) return;

  // go back n forth
  const currentSrc = el.getAttribute("src");
  const newSrc = currentSrc.includes("timb")
    ? "./images/loveseat.jpeg"
    : "./images/soldout.png";

  el.setAttribute("src", newSrc);
});

document.querySelector("#one").addEventListener("click", function () {
  const el = document.querySelector("#one");
  if (!el) return;

  // go back n forth
  const currentSrc = el.getAttribute("src");
  const newSrc = currentSrc.includes("one")
    ? "./images/chemistry.jpeg"
    : "./images/credit.png";

  el.setAttribute("src", newSrc);
});

document.querySelector("#acre").addEventListener("click", function () {
  const el = document.querySelector("#acre");
  if (!el) return;

  // go back n forth
  const currentSrc = el.getAttribute("src");
  const newSrc = currentSrc.includes("acre")
    ? "./images/mule.jpeg"
    : "./images/mark.png";

  el.setAttribute("src", newSrc);
});

document.querySelector("#street").addEventListener("click", function () {
  prompt(
    "This is the tooth fairy.. Im running out of coins to give to children, can u send me some"
  );
});
document.querySelector("#amongus").addEventListener("click", function () {
  prompt(
    "At night I lie awake and wonder what would happen if I stopped pretending. If I simply confessed: I am nothing. I have always been nothing. Would the world collapse? Or would it go on, unchanged — proving that my existence was never necessary at all."
  );
});
