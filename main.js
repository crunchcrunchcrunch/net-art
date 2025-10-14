// Add event to [first] product (only one)
document.querySelector(".product").addEventListener("click", function () {
  prompt("Enter your SSN!");
});

document.querySelector("#one").addEventListener("click", function () {
  const el = document.querySelector("#one");
  if (!el) return;

  // go back n forth
  const currentSrc = el.getAttribute("src");
  const newSrc = currentSrc.includes("one")
    ? "/images/parttwo.jpg"
    : "/images/partone.jpg";

  el.setAttribute("src", newSrc);
});

document.querySelector("#obama").addEventListener("click", function () {
  const el = document.querySelector("#obama");
  if (!el) return;

  // go back n forth
  const currentSrc = el.getAttribute("src");
  const newSrc = currentSrc.includes("obama")
    ? "/images/lambo.jpeg"
    : "/images/barack.png";

  el.setAttribute("src", newSrc);
});
document.querySelector("#wish").addEventListener("click", function () {
  prompt("It's opposite day!!! I wish you give me your credit card number!");
});

document.querySelector("#hypo").addEventListener("click", function () {
  const el = document.querySelector("#hypo");
  if (!el) return;

  // go back n forth
  const currentSrc = el.getAttribute("src");
  const newSrc = currentSrc.includes("obama")
    ? "/images/dust.jpeg"
    : "/images/credit.png";

  el.setAttribute("src", newSrc);
});
document.querySelector("#irs").addEventListener("click", function () {
  const el = document.querySelector("#irs");
  if (!el) return;

  // go back n forth
  const currentSrc = el.getAttribute("src");
  const newSrc = currentSrc.includes("irs")
    ? "/images/fda.jpeg"
    : "/images/bank.png";

  el.setAttribute("src", newSrc);
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
// document.querySelectorAll(".product").forEach((el) => {
//   el.addEventListener("click", function () {
//     prompt("Enter your SSN!");
//   });
// });
