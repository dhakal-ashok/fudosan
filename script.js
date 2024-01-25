const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change")
})

 function showAlert() {
      alert("Successfully submitted. We will contact you soon");
    }