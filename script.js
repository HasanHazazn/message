const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const leftImage = document.querySelector("Screenshot_2024-01-13-05-45-39-87_1c337646f29875672b5a61192b9010f9.jpg");
const rightImage = document.querySelector("Screenshot_2024-01-13-05-46-23-81_1c337646f29875672b5a61192b9010f9.jpg");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "I am the happiest man in the world..hehe";
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
    
    // Change the images along with the GIF
    leftImage.src = "new-left-image.jpg";
    rightImage.src = "new-right-image.jpg";
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
