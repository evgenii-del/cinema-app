const mainBtn = document.querySelector(".js-main__btn");
const closePopupBtn = document.querySelector(".js-popup__close");
const popup = document.querySelector(".js-popup");
const overlay = document.querySelector(".js-overlay");

const openPopup = () => {
    popup.classList.add("popup_active");
    overlay.classList.add("overlay_active");
}

const closePopup = () => {
    popup.classList.remove("popup_active");
    overlay.classList.remove("overlay_active");
}

document.addEventListener("DOMContentLoaded", () => {
    mainBtn.addEventListener("click", openPopup);
    closePopupBtn.addEventListener("click", closePopup);
    overlay.addEventListener("click", closePopup);
})
