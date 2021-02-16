const closePopupBtn = document.querySelector(".js-popup__close");
const popup = document.querySelector(".js-popup");
const overlay = document.querySelector(".js-overlay");
const form = document.forms[0];

const openPopup = () => {
    popup.classList.add("popup_active");
    overlay.classList.add("overlay_active");
}

const closePopup = () => {
    popup.classList.remove("popup_active");
    overlay.classList.remove("overlay_active");
}

const createBlock = values => {
    const {months, times} = values
    const block = document.createElement('div');
    block.className = "js-popup__inner";
    block.innerHTML = `
        <div class="popup__data">
            <img class="popup__image" src="images/banner.webp" alt="banner">
            <div class="popup__content">
                <h2 class="popup__title">The Queen's Gambit</h2>
                <span class="popup__technology">CINETECH+</span>
                <span class="popup__time">${months}</span>
                <span class="popup__day">${times}</span>
            </div>
        </div>
        <div class="popup__tickets">
            <div class="popup__ticket">
                <span class="popup__ticket-row">2 ряд</span>
                <span class="popup__ticket-column">4 место</span>
                <span class="popup__ticket-price">150 грн.</span>
            </div>
        </div>
    `
    return block;
}

const changeCartData = values => {
    const fragment = document.createDocumentFragment();
    const popupInner = popup.querySelector(".js-popup__inner");
    const block = createBlock(values);

    popupInner.innerHTML = "";
    fragment.appendChild(block);
    popupInner.appendChild(fragment);

    openPopup();
}

const retrieveFormValue = event => {
    event.preventDefault();
    const values = {};

    for (const field of form) {
        const {name} = field;

        if (name) {
            const {value} = field;

            if (name === "seats" && field.checked) {
                values[name] = values[name] ? [...values[name], value] : [value];
            } else {
                if (field.checked) {
                    values[name] = value;
                }
            }
        }
    }
    changeCartData(values)
}

document.addEventListener("DOMContentLoaded", () => {
    form.addEventListener("submit", retrieveFormValue);
    closePopupBtn.addEventListener("click", closePopup);
    overlay.addEventListener("click", closePopup);
})
