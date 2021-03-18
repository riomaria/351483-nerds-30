
    const linkModalFeedback = document.querySelector(".contacts__btn");
    const modalFeedback = document.querySelector(".modal-feedback");
    const modalClose = document.querySelector(".modal__close");
    


    linkModalFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalFeedback.classList.add("modal--show");
    
  })
  modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal--show");
  })

 