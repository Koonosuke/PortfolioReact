import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Scroll = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal({
      reset: true,
      distance: "60px",
      duration: 2000, // 2s for the animation
      delay: 200, // 0.2s delay before starting
    });

    ScrollReveal().reveal(".main-title, .section-title", {
      delay: 200,
      origin: "left",
    });
    ScrollReveal().reveal(".sec-01 .image, .info", {
      delay: 600,
      origin: "bottom",
    });
    ScrollReveal().reveal(".text-box", {
      delay: 700,
      origin: "right",
    });
    ScrollReveal().reveal(".media-icons i", {
      delay: 500,
      origin: "bottom",
      interval: 200,
    });
    ScrollReveal().reveal(".sec-02 .image, .sec-03 .image", {
      delay: 500,
      origin: "top",
    });
    ScrollReveal().reveal(".media-info h4", {
      delay: 500,
      origin: "left",
      interval: 200,
    });
  }, []);

  return null;
};

export default Scroll;
