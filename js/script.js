 const feedbackLink = document.querySelector(".contacts__btn");
 const feedbackPopup = document.querySelector(".modal-feedback");
 const feedbackClose = feedbackPopup.querySelector(".modal__close");
 const feedbackForm = feedbackPopup.querySelector(".modal-feedback__list");
 const feedbackUserName = feedbackPopup.querySelector("[name=username]");
 const feedbackUserMail = feedbackPopup.querySelector("[name=usermail]");

 let isStorageSupport = true;
 let storage = "";

 try {
 storage = localStorage.getItem("username");
 } catch (err) {
 isStorageSupport = false;
 }


 feedbackLink.addEventListener("click", function(evt) {
   evt.preventDefault();
   feedbackPopup.classList.add("modal--show");

   if (storage) {
   feedbackUserName.value = storage;
   feedbackUserMail.focus();
   } else {
     feedbackUserName.focus();
   }

 });

 feedbackClose.addEventListener("click", function (evt) {
   evt.preventDefault();
   feedbackPopup.classList.remove("modal--show");
   feedbackPopup.classList.remove("modal--error");

 });
 
 feedbackForm.addEventListener("submit", function (evt) {
   if (!feedbackUserName.value || !feedbackUserMail.value) {
     evt.preventDefault();
     feedbackPopup.classList.remove("modal--error");
     feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
     feedbackPopup.classList.add("modal--error")
   } else { 
     if (isStorageSupport)
     localStorage.setItem("username", feedbackUserName.value);
   }
   
 });

 window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
     if (feedbackPopup.classList.contains("modal--show")) {
       evt.preventDefault();
       feedbackPopup.classList.remove("modal--show");
}
}
});
 

