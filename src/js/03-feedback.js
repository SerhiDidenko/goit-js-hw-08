import throttle  from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const { elements: { email, message } } = form;
let feedbackData

try {
    let formItems = JSON.parse(localStorage.getItem("feedback-form-state"))
    email.value = formItems.email;
    message.value = formItems.message;
} catch (error) {
    console.log(error);
}

const getFormData = throttle((evt) => {
    if (evt.currentTarget) {
        let formData = JSON.stringify({
            email: email.value,
            message: message.value
        })
        localStorage.setItem("feedback-form-state", formData);
    }
}, 500);

const submitEvent = (evt) => {
    evt.preventDefault();
    localStorage.removeItem("feedback-form-state");
    let formData = JSON.stringify({
        email: email.value,
        message: message.value
    })
    console.log(formData);
    evt.currentTarget.reset();
}

form.addEventListener('input', getFormData);
form.addEventListener('submit', submitEvent);
