const slider = document.querySelector("#slider");
const sliderSections = document.querySelectorAll(".slider__section");
const sliderSectionLast = sliderSections[sliderSections.length - 1];
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function shiftSlide(direction) {
    const sliderSections = document.querySelectorAll(".slider__section");
    const sliderSectionLast = sliderSections[sliderSections.length - 1];
    const marginLeftValue = direction === "next" ? "-200%" : "0%";
    const marginRightValue = direction === "next" ? "-100%" : "-100%";
    slider.style.marginLeft = marginLeftValue;
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        if (direction === "next") {
            slider.insertAdjacentElement("beforeend", sliderSections[0]);
        } else {
            slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        }
        slider.style.marginLeft = marginRightValue;
    }, 500);
}

btnRight.addEventListener("click", function() {
    shiftSlide("next");
});

btnLeft.addEventListener("click", function() {
    shiftSlide("prev");
});

setInterval(function() {
    shiftSlide("next");
}, 7000);