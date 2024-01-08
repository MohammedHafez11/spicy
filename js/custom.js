(function ($) {
    // packages slides
    if ($.isFunction($.fn.owlCarousel)) {
      $(".packages-carousel").owlCarousel({
        stagePadding: 0,
        margin: 20,
        loop: true,
        center: true,
        nav: true,
        dot: false,
        rtl: true,
        autoplay: true,
        autoplayTimeout: 3000,
        navText: [
          "<i class='fa-solid fa-arrow-left'></i>",
          "<i class='fa-solid fa-arrow-right'></i>",
        ],
        responsive: {
          0: {
            items: 1,
            center: false,
            margin: 0,
          },
          767: {
            items: 2,
            margin: 10,
          },
          1000: {
            items: 3,
          },
        },
      });
    }
  
    // meals slides
    if ($.isFunction($.fn.owlCarousel)) {
      $(".meals-carousel").owlCarousel({
        stagePadding: 0,
        margin: 20,
        loop: true,
        center: false,
        nav: true,
        dot: false,
        rtl: true,
        autoplay: true,
        autoplayTimeout: 3000,
        navText: [
          "<i class='fa-solid fa-arrow-left'></i>",
          "<i class='fa-solid fa-arrow-right'></i>",
        ],
        responsive: {
          0: {
            items: 1,
            margin: 0,
          },
          767: {
            items: 2,
            margin: 10,
          },
          1000: {
            items: 3,
          },
        },
      });
    }
  
    // testimonials slides
    if ($.isFunction($.fn.owlCarousel)) {
      $(".testimonials-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        rtl: true,
        autoWidth: false,
        autoplay: true,
        smartSpeed: 700,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
          },
          480: {
            items: 1,
          },
          767: {
            items: 1,
          },
          991: {
            items: 2,
          },
          1000: {
            items: 2,
          },
          1200: {
            items: 2,
          },
        },
      });
    }
  })(jQuery);
  
  // AOS
  AOS.init();
  
  // active link on scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", navHighlighter);
  function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      let sectionId = current.getAttribute("id");
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".navbar-links li a[href*=" + sectionId + "]")
          .classList.add("active");
      } else {
        document
          .querySelector(".navbar-links li a[href*=" + sectionId + "]")
          .classList.remove("active");
      }
    });
  }
  
  // sticky header
  const header = document.querySelector(".navbar-sticky");
  const toggleClass = "sticky";
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
      header.classList.add(toggleClass);
    } else {
      header.classList.remove(toggleClass);
    }
  });
  
  // offcanvas handler
  let menushow = document.querySelector(".offcanvas.offcanvas-start");
  let backdropshow = document.querySelector(".offcanvas-backdrop");
  document.querySelectorAll(".navbar-links li a").forEach((link) => {
    link.addEventListener("click", () => {
      menushow.classList.remove("showing", "show");
    });
  });