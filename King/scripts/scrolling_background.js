const scrollSpeed = 0.005;

function scrollBackground() {
    const now = new Date();
    let ms = now.getMilliseconds() + now.getSeconds() * 1000;
    let p = (ms * scrollSpeed) % 100;

    let body = document.querySelector("body");
    body.style.backgroundPositionX = `${p}%`;
}