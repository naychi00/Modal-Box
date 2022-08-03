'use strict';
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelectorAll(".show-modal")
// console.log(overlay);

const removeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let i = 0; i < btnOpenModal.length; i++){
    console.log(
       btnOpenModal[i].addEventListener('click', openModal)
    )
}

closeModal.addEventListener('click',removeModal );

overlay.addEventListener('click',removeModal);

document.addEventListener('keyPress', () => {
    console.log("MOuse Down ...");
});

document.addEventListener('keydown', (e) =>{
    if(e.key === "Escape" && !modal.classList.contains('hidden')){
        removeModal();
        console.log(e.key)
    }
})