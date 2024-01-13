const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const audioYes1 = new Audio('audio222.mp3');  // Path to the first 'yes' audio file
const audioYes2 = new Audio('audio222.mp3');  // Path to the second 'yes' audio file
const audioNo = new Audio('audio-no.mp3');      // Path to the 'no' audio file

let currentYesAudio = audioYes1;

yesBtn.addEventListener("click", () => {
    question.innerHTML = "I am the happiest man in the world..hehe";
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";

    // Change the audio each time 'Yes' is clicked
    if (currentYesAudio === audioYes1) {
        currentYesAudio = audioYes2;
    } else {
        currentYesAudio = audioYes1;
    }

    currentYesAudio.play();
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    audioNo.play();
});
