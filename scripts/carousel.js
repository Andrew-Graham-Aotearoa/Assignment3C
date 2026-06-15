//wait for page to be fully load before running any script
document.addEventListener("DOMContentLoaded", () => {

  // ── Index Carousel ──────────────────────────────────────
  const track = document.getElementById('carouselTrack');
  const prev = document.getElementById('carouselPrev');
  const next = document.getElementById('carouselNext');

  if (track && prev && next) {
    next.addEventListener('click', () => {
      const isAtEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 5;
      isAtEnd
        ? track.scrollTo({ left: 0, behavior: 'smooth' })
        : track.scrollBy({ left: 110, behavior: 'smooth' });
    });

    prev.addEventListener('click', () => {
      const isAtStart = track.scrollLeft <= 5;
      isAtStart
        ? track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' })
        : track.scrollBy({ left: -110, behavior: 'smooth' });
    });
  }

  // ── Gallery Carousel ────────────────────────────────────
  const galleryTrack = document.getElementById("galleryTrack");
  const galleryPrev = document.getElementById("galleryPrev");
  const galleryNext = document.getElementById("galleryNext");

  if (galleryTrack && galleryPrev && galleryNext) {
    const SCROLL_AMOUNT = 164;

    function updateCenterImage() {
      const imgs = galleryTrack.querySelectorAll(".gallery-img");
      const trackRect = galleryTrack.getBoundingClientRect();
      const trackCenter = trackRect.left + trackRect.width / 2;

      imgs.forEach((img) => {
        const imgRect = img.getBoundingClientRect();
        const imgCenter = imgRect.left + imgRect.width / 2;
        img.classList.toggle("is-center", Math.abs(imgCenter - trackCenter) < 80);
      });
    }

    let scrollTimer;
    galleryTrack.addEventListener("scroll", () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(updateCenterImage, 150);
    });

    galleryNext.addEventListener("click", () => {
      const isAtEnd = galleryTrack.scrollLeft + galleryTrack.clientWidth >= galleryTrack.scrollWidth - 5;
      isAtEnd
        ? galleryTrack.scrollTo({ left: 0, behavior: "smooth" })
        : galleryTrack.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
    });

    galleryPrev.addEventListener("click", () => {
      const isAtStart = galleryTrack.scrollLeft <= 5;
      isAtStart
        ? galleryTrack.scrollTo({ left: galleryTrack.scrollWidth, behavior: "smooth" })
        : galleryTrack.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
    });

    setTimeout(updateCenterImage, 100);
  }


});
