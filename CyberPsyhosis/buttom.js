const button = document.getElementById("helpbar-button");
const faqList = document.getElementById("faq-list");
const faqLinks = document.querySelectorAll("#faq a");
const answer = document.getElementById("answer");

button.addEventListener("click", function () {
    faqList.style.display = faqList.style.display === "none" ? "block" : "none";
});

faqLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        answer.innerHTML = this.dataset.answer;
        answer.style.display = "block";
    });
});
