const initSlider = () => {
  const slideButtons = document.querySelectorAll(
    ".slider-wrapper .slide-button"
  );
  const sliderScrollbar = document.querySelector(
    ".container .scrollbar"
  );
  const scrollbarThumb = sliderScrollbar.querySelector(
    ".scrollbar-pursue2"
  );
  const imgList = document.querySelector(".slider-wrapper .img-list");
  const maxScrollLeft = imgList.scrollWidth - imgList.clientWidth;

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === `prev-slide` ? -1 : 1;
      const scrollamount = imgList.clientWidth * direction;
      imgList.scrollBy({ left: scrollamount, behavior: "smooth" });
    });
  });

  const handleSlideButtons = () => {
    slideButtons[0].style.display = imgList.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display =
      imgList.scrollLeft >= maxScrollLeft ? "none" : "block";
  };
  const updateScrollThumbPosition=()=>{
    const scrollPosition = imgList.scrollLeft
    const thumbPosition = (scrollPosition/maxScrollLeft)*(sliderScrollbar.clientWidth-scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left=`${thumbPosition}px`
  }

  imgList.addEventListener("scroll", () => {
    handleSlideButtons();
    updateScrollThumbPosition();
  });
};

window.addEventListener("load", initSlider);
