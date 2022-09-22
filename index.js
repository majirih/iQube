const nextButton = document.querySelector("#next");
const cancelButton = document.querySelector("#cancel");
const homeButton = document.querySelector("#go-home");

const navItems = document.querySelectorAll(".nav-item");

let currentStep = 0;

const formContainer = document.querySelector("#form-container");
const form = document.querySelector("form");
const step1 = document.querySelector("#step1");
const step2 = document.querySelector("#step2");
const step3 = document.querySelector("#step3");
const completed = document.querySelector("#completed");

nextButton.addEventListener("click", nextStep)
cancelButton.addEventListener("click", cancel)
homeButton.addEventListener("click", cancel)

function nextStep() {
    navItems[currentStep].classList.toggle("active-nav")

    switch (currentStep) {
        case 0:
            currentStep = 1;
            step1.style.display = "none";
            step2.style.display = "block";
            break;
        case 1:
            currentStep = 2;
            step2.style.display = "none";
            step3.style.display = "block";
            break;
        case 2:
            formContainer.style.display = "none";
            completed.style.display = "block";
            break;
        default:
            break;
    }

    navItems[currentStep].classList.toggle("active-nav")
    resetNextButton()
}

function cancel() {
    form.reset();
    navItems[currentStep].classList.toggle("active-nav")
    currentStep = 0;
    navItems[currentStep].classList.toggle("active-nav")
    step1.style.display = "block";
    step2.style.display = "none";
    step3.style.display = "none";
    formContainer.style.display = "block";
    completed.style.display = "none";
    resetNextButton()
}

function resetNextButton() {
    if (currentStep === 2) {
        nextButton.innerHTML = "Pay";
    } else {
        nextButton.innerHTML = "Next";
    }
}

