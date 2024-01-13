const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const audioYes = new Audio('audio-yes.mp3');  // Path to the 'yes' audio file
const audioNo = new Audio('audio-no.mp3');    // Path to the 'no' audio file

yesBtn.addEventListener("click", () => {
    question.innerHTML = "I am the happiest man in the world..hehe";
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
    audioYes.play();
});

noBtn.addEventListener("touchstart", (event) => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    // Prevent default touch event behavior to avoid issues on some devices
    event.preventDefault();

    audioNo.play();
});
