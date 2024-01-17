const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const audioYes = new Audio('audio-yes.mp3');  // Path to the 'yes' audio file
const audioNo = new Audio('audio-no.mp3');    // Path to the 'no' audio file

// Check if the user is on a mobile device
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
    // Mobile behavior: move the 'No' button on touch
    noBtn.addEventListener("touchstart", (event) => {
        moveNoButton();
        event.preventDefault(); // Prevent default touch event behavior
        audioNo.play();
    });
} else {
    // Desktop behavior: move the 'No' button on mouseover
    noBtn.addEventListener("mouseover", () => {
        moveNoButton();
        audioNo.play();
    });
}

function moveNoButton() {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

yesBtn.addEventListener("click", () => {
    question.innerHTML = "I'm gonna make you smile and spend some time as long as you are here";
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
    audioYes.play();
});
