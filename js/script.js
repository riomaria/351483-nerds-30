
    const linkModalFeedback = document.querySelector(".contacts__btn");
    const modalFeedback = document.querySelector(".modal-feedback");
    const modalClose = document.querySelector(".modal__close");
    const modalFocus = document.querySelector("[name=username]");


    linkModalFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalFeedback.classList.add("modal--show");
    modalFocus.focus();

    
  })
  modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal--show");
  })

 