import funcs from './sources/funcs.js';

funcs.loadAll(window);

window.addEventListener('load', () => {
    if (window.pageYOffset > 0) setTimeout(() => window.scrollTo(0, 0), 1);
});

const body = query('body');
const otherImgs = query('.other-imgs');
const showImgs = query('.other-imgs .show-imgs');
const finishBirthday = query('.finish-birthday');
const showBirthday = query('.finish-birthday .show-birthday');
let sImgs = query('.other-imgs.show');

otherImgs.style.height = `${window.innerHeight - 40}px`;
finishBirthday.style.height = otherImgs.style.height;

showImgs.addEventListener('click', () => {
    toggleClass('show', otherImgs);
    sImgs = query('.other-imgs.show');
    window.scrollTo({
        top: window.innerHeight * (sImgs ? 1 : 0),
        left: 0,
        behavior: 'smooth'
    });
});

showBirthday.addEventListener('click', () => {
    toggleClass('show', finishBirthday);
    const sBirthday = query('.finish-birthday.show');
    window.scrollTo({
        top: window.innerHeight * (sBirthday ? 2 : 1),
        left: 0,
        behavior: 'smooth'
    });
});

const txt = query('.bg-img h1');

showCuteText(txt);

const letters = query('.bg-img h1 .word .letter', true);

const animation = anime.timeline({
    targets: letters,
    easing: 'easeInOutExpo'
});

animation
.add({
    scale: 5,
    duration: 0,
    opacity: 0
});

const confettiSettings = {
    target: 'my-canvas',
    max: 300
};

const confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

const audio = query('audio');

audio.currentTime = 7;

let hasStarted = false;

const fullBodyClick = () => (bodyClick(hasStarted, audio, body, animation), hasStarted = true);

audio.addEventListener('canplaythrough', () => addListenerEvents(body, fullBodyClick, 'click', 'keypress'));
