const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');

form.addEventListener('input', throttle(saveInput, 500));

if (localStorage.getItem("feedback-form-state")) {
    emailInput.value = JSON.parse(localStorage.getItem("feedback-form-state")).email;
    messageInput.value = JSON.parse(localStorage.getItem("feedback-form-state")).message
}

feedbackForm = {}

function saveInput() {
    feedbackForm.email = emailInput.value;
    feedbackForm.message = messageInput.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackForm))
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    localStorage.clear();
    form.reset();
})