const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
const refs = {
    start: document.querySelector('button[data-action="start"]'),
    stop: document.querySelector('button[data-action="stop"]')
}

let timer = undefined;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


refs.start.addEventListener('click', click);
refs.stop.addEventListener('click', () => {
    if (timer) {
        clearInterval(timer);
        refs.start.disabled = false;
    }
})

function changeColor() {
    let color = colors[randomIntegerFromInterval(0, colors.length - 1)];
    console.log('color: ', color);
    document.body.style.background = color;
    timer = setTimeout(changeColor, 1000);
}

function click() {
    refs.start.disabled = true;
    timer = setTimeout(changeColor, 1000);
    return timer;
}

