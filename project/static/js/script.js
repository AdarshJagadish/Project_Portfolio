function toggleMobileNav() {
    const nav = document.getElementById("mobileNav");
    const burger = document.querySelector(".hamburger");
  
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    burger.classList.toggle("open");
  }
  
  function closeMobileNav() {
    document.getElementById("mobileNav").style.display = "none";
    document.querySelector(".hamburger").classList.remove("open");
  }
  