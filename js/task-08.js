const refs = {
    formEl: document.querySelector('.login-form'),
    };
refs.formEl.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;

    console.log(formElements);
    const mail = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
        mail,
        password,
    };
    
    if (formData.mail === '' || formData.password === '') {
    alert('Все поля должны быть заполнены')
    };
    console.log(formData);
    event.currentTarget.reset();
  }

