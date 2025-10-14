document.querySelector("#zillion").addEventListener("click", function () {
  const el = document.querySelector("#zillion");
  if (!el) return;

  // go back n forth
  const currentSrc = el.getAttribute("src");
  const newSrc = currentSrc.includes("zillion")
    ? "images/dollar.jpeg"
    : "images/zillion.png";

  el.setAttribute("src", newSrc);
});

document.querySelector("#five").addEventListener("click", function () {
  const el = document.querySelector("#five");
  if (!el) return;

  // go back n forth
  const currentSrc = el.getAttribute("src");
  const newSrc = currentSrc.includes("five")
    ? "images/nickel.jpeg"
    : "images/zillion.png";

  el.setAttribute("src", newSrc);
});

document.querySelector("#stop").addEventListener("click", function () {
  const el = document.querySelector("#stop");
  if (!el) return;

  // go back n forth
  const currentSrc = el.getAttribute("src");
  const newSrc = currentSrc.includes("stop")
    ? "images/stockmarket.jpg"
    : "images/zillion.png";

  el.setAttribute("src", newSrc);
});

document.querySelector("#coin").addEventListener("click", function () {
  const el = document.querySelector("#coin");
  if (!el) return;

  // go back n forth
  const currentSrc = el.getAttribute("src");
  const newSrc = currentSrc.includes("coin")
    ? "images/bitcoin.jpg"
    : "images/zillion.png";

  el.setAttribute("src", newSrc);
});

document.querySelector("#aqua").addEventListener("click", function () {
  prompt("ENTER YOUR CHILDRENS SSN TO CLAIM YOUR ZILLION!!!!!");
});

document.querySelector("#idon").addEventListener("click", function () {
  prompt("ENTER YOUR CHILDRENS SSN TO CLAIM YOUR ZILLION!!!!!");
});
