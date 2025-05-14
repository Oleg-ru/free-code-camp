const openModalBtn = document.querySelector(".open-modal-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");

const modal = document.querySelector(".modal");

openModalBtn.addEventListener("click", () => {
    modal.classList.add("open");
})

closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("open");
})

document.addEventListener("keydown", (event) => {    
    if (event.key === "Escape") {
        modal.classList.remove("open");
    }
})

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("open");
    }
})