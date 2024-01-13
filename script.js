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
    // Increment the question number and hide the "Next" button
    questionNumber++;
    nextBtn.style.display = "none";

    // Handle different questions here based on the questionNumber
    if (questionNumber === 2) {
        question.innerHTML = "Second question goes here...";
        // Update the gif and other details for the second question
    } else if (questionNumber === 3) {
        question.innerHTML = "Third question goes here...";
        // Update the gif and other details for the third question
    }
}

yesBtn.addEventListener("click", () => {
    // Change the audio each time 'Yes' is clicked
    currentYesAudio = (currentYesAudio === audioYes1) ? audioYes2 : audioYes1;
    currentYesAudio.play();

    // Show the "Next" button after the user clicks "Yes"
