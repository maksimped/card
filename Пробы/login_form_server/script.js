const loginformEl = document.querySelector('.loginform'),
loginformInputs = loginformEl.querySelectorAll('.loginform__input');



loginformInputs.forEach(function(loginformInput){
    loginformInput.addEventListener('focus', loginformInputFocusHandler);
    loginformInput.addEventListener('blur', loginformInputblurHandler);
});

loginformEl.addEventListener('submit',loginFormSubmit);


function loginformInputFocusHandler(event){
    const inputEl = event.currentTarget,
    rowEl = inputEl.closest('.loginform__row');
    
    rowEl.classList.add('loginform__row--active');
}

function loginformInputblurHandler(event){
    const inputEl = event.currentTarget,
    rowEl = inputEl.closest('.loginform__row');
    
    if (!inputEl.value){
    rowEl.classList.remove('loginform__row--active');
   }
}



function loginFormSubmit( event ){
     event.preventDefault();
}