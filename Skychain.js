/* =========================================
   SKYCHAIN IMAGE LIGHTBOX
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  const screenshots =
    document.querySelectorAll(".project-screenshot");

  const lightbox =
    document.getElementById("imageLightbox");

  const lightboxImage =
    document.getElementById("lightboxImage");

  const closeButton =
    document.getElementById("lightboxClose");


  /* =========================================
     OPEN IMAGE
  ========================================= */

  screenshots.forEach(image => {

    image.addEventListener("click", () => {

      lightboxImage.src = image.src;

      lightboxImage.alt =
        image.alt || "SkyChain Screenshot";

      lightbox.classList.add("active");

      document.body.style.overflow = "hidden";

    });

  });


  /* =========================================
     CLOSE FUNCTION
  ========================================= */

  function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

    setTimeout(() => {

      if (!lightbox.classList.contains("active")) {

        lightboxImage.src = "";

      }

    }, 300);

  }


  /* =========================================
     CLOSE BUTTON
  ========================================= */

  closeButton.addEventListener(
    "click",
    closeLightbox
  );


  /* =========================================
     CLICK OUTSIDE IMAGE
  ========================================= */

  lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {

      closeLightbox();

    }

  });


  /* =========================================
     ESC KEY
  ========================================= */

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

      if (lightbox.classList.contains("active")) {

        closeLightbox();

      }

    }

  });

});