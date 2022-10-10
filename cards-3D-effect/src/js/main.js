const $ = selector => document.querySelector(selector);

const card_container = $('.card_container');
const cards = $('.cards');

const { width, height } = card_container.getBoundingClientRect();

const halfWidth = width / 2;
const halfHeight = height / 2;

card_container.addEventListener('mousemove', (e) => {
    const {offsetX, offsetY} = e

    const rotationX = ((offsetX - halfWidth) / halfWidth) * 10
    const rotationY = ((offsetY - halfHeight) / halfHeight) * 10

    cards.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg) `
});

card_container.addEventListener('mouseleave', () => {
    cards.style.transform = `rotateX(0deg) rotateY(0deg) `
});