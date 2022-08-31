const $ = selector => document.querySelector(selector);

const card_wrapper = $('.card_wrapper');
const card = $('.card');

const { width, height } = card_wrapper.getBoundingClientRect();

const halfWidth = width / 2;
const halfHeight = height / 2;

card_wrapper.addEventListener('mousemove', (e) => {
    const {offsetX, offsetY} = e

    const rotationX = ((offsetX - halfWidth) / halfWidth) * 10
    const rotationY = ((offsetY - halfHeight) / halfHeight) * 10

    card.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg) `
});

card_wrapper.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg) `
});