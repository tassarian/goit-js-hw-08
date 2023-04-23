const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');

form.addEventListener('input', throttle(saveInput, 500));

if (localStorage.getItem("feedback-form-state")) {
    const state = JSON.parse(localStorage.getItem("feedback-form-state"));
    emailInput.value = state.email;
    messageInput.value = state.message;
}

let feedbackForm = {}

function saveInput() {
    feedbackForm.email = emailInput.value;
    feedbackForm.message = messageInput.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackForm))
}

function handleSubmit(e) {
    e.preventDefault();
    const state = JSON.parse(localStorage.getItem("feedback-form-state"))
    console.log();
    localStorage.clear(state);
    form.reset();
}

form.addEventListener('submit', handleSubmit)