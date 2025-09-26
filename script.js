const menuToggle = document.querySelector(".bars");
const navLinks = document.querySelector(".nav-links");

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".Navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

let faqQuestion = document.querySelectorAll(".faq-question");
let faqItem = document.querySelectorAll(".faq-item");
faqQuestion.forEach((element) => {
  element.addEventListener("click", () => {
    const faqItem = element.parentElement;
    faqItem.classList.toggle("active");

    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove("active");
      }
    });
  });
});
