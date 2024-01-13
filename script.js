const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const nextBtn = document.querySelector(".next-btn");

const audioYes1 = new Audio('audio-yes1.mp3');  // Path to the first 'yes' audio file
const audioYes2 = new Audio('audio-yes2.mp3');  // Path to the second 'yes' audio file
const audioNo = new Audio('audio-no.mp3');      // Path to the 'no' audio file

let currentYesAudio = audioYes1;
let questionNumber = 1;  // Keep track of the question number

yesBtn.addEventListener("click", () => {
    // Change the audio each time 'Yes' is clicked
    if (currentYesAudio === audioYes1) {
        currentYesAudio = audioYes2;
    } else {
        currentYesAudio = audioYes1;
    }

    currentYesAudio.play();

    // Show the "Next" button after the first "Yes"
    if (questionNumber === 1) {
        nextBtn.style.display = "block";
    }

    // Handle different questions here based on the questionNumber
    if (questionNumber === 1) {
        question.innerHTML = "I am the happiest man in the world..hehe";
        gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
    } else if (questionNumber === 2) {
        question.innerHTML = "Second question goes here...";
        // Update the gif and other details for the second question
    } else {
        // If there are no more questions, hide the "Next" button
        nextBtn.style.display = "none";
    }

    // Increment the question number
    questionNumber++;
});

noBtn.addEventListener("mouseover", () => {
    moveNoButton();
    audioNo.play();
});

nextBtn.addEventListener("click", () => {
    // Reset to the initial state for the next question
    question.innerHTML = "Hey, will you let me know you :)";
    gif.src = "https://media.giphy.com/media/FTGah7Mx3ss04PcasF/giphy.gif";
    currentYesAudio = audioYes1;
});

function moveNoButton() {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}
