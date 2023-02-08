const showFaqButton = document.getElementById("showFaq");
const faqList = document.querySelector(".faq");

showFaqButton.addEventListener("click", function() {
  const dts = faqList.querySelectorAll("dt");
  dts.forEach(function(dt) {
    dt.addEventListener("click", function() {
      const answer = this.getAttribute("data-answer");
      const dd = document.createElement("dd");
      dd.textContent = answer;
      this.parentNode.appendChild(dd);
    });
    dt.style.display = "block";
  });
  this.style.display = "none";
});