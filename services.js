setTimeout(function () {
  document.getElementById("pop").style.display = "block";
}, 2000);

document.querySelector("#pop").addEventListener("click", function () {
  document.getElementById("pop").style.display = "none";
});

setTimeout(function () {
  document.getElementById("pop2").style.display = "block";
}, 2000);

document.querySelector("#pop2").addEventListener("click", function () {
  document.getElementById("pop2").style.display = "none";
});

document.querySelector("#cook").addEventListener("click", function () {
  const el = document.querySelector("#cook");
  if (!el) return;

  // go back n forth
  const currentSrc = el.getAttribute("src");
  const newSrc = currentSrc.includes("cook")
    ? "./images/chef.jpeg"
    : "./images/bank.png";

  el.setAttribute("src", newSrc);
});

document.querySelector("#drake").addEventListener("click", function () {
  const el = document.querySelector("#drake");
  if (!el) return;

  // go back n forth
  const currentSrc = el.getAttribute("src");
  const newSrc = currentSrc.includes("drake")
    ? "./images/brain.jpeg"
    : "./images/drake.png";

  el.setAttribute("src", newSrc);
});

document.querySelector("#hi").addEventListener("click", function () {
  const el = document.querySelector("#hi");
  if (!el) return;

  // go back n forth
  const currentSrc = el.getAttribute("src");
  const newSrc = currentSrc.includes("hi")
    ? "./images/henry.jpeg"
    : "./images/drake.png";

  el.setAttribute("src", newSrc);
});

document.querySelector("#ob").addEventListener("click", function () {
  const el = document.querySelector("#ob");
  if (!el) return;

  // go back n forth
  const currentSrc = el.getAttribute("src");
  const newSrc = currentSrc.includes("ob")
    ? "./images/boyf.jpeg"
    : "./images/barack.png";

  el.setAttribute("src", newSrc);
});

document.querySelector("#evade").addEventListener("click", function () {
  prompt(
    "It's David Beckham. I'm lost in the forest. The fairies said they need $900 to guide me out of here. I lost my wallet can u pls send"
  );
});

document.querySelector("#talk").addEventListener("click", function () {
  prompt(
    "Hey.. It's Ted Cruz.. Im kinda going bankrupt.. but I need to go to Cancun one more time can u Cashapp me a few thousands"
  );
});
