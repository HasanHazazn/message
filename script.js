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

// Initially hide the "Next" button
nextBtn.style.display = "none";

function showNextQuestion() {
    // Show the "Next" button after the user clicks "Yes" for the current question
    nextBtn.style.display = "block";

    // Increment the question number
    questionNumber++;

    // Handle different questions here based on the questionNumber
    if (questionNumber === 2) {
        question.innerHTML = "Second question goes here...";
        // Update the gif and other details for the second question
    } else if (questionNumber === 3) {
        question.innerHTML = "Third question goes here...";
        // Update the gif and other details for the third question
        // Since it's the last question, hide the "Next" button
        nextBtn.style.display = "none";
    }
}

yesBtn.addEventListener("click", () => {
    // Change the audio each time 'Yes' is clicked
    currentYesAudio = (currentYesAudio === audioYes1) ? audioYes2 : audioYes1;
    currentYesAudio.play();

    showNextQuestion();
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

    // Hide the "Next" button after it is clicked
    nextBtn.style.display = "none";
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
