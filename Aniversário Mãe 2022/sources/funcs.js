const funcs = {
    loadAll: (reffer) => {
        for (const func in funcs) {
            if (func != 'loadAll') reffer[func] = funcs[func];
        };
    },
    query: (elem, all = false) => {
        return document[`querySelector${all ? 'All' : ''}`](elem);
    },
    toggleClass: (className, ...elems) => {
        elems.forEach(elem => elem.classList.toggle(className));
    },
    showCuteText: (...elems) => {
        elems.forEach(elem => {
            let text = elem.innerHTML.split('');
            for (const l in text) {
                text[l] = text[l] == ' ' ? '</span> <span class="word">' : ((l >= text.length - 3 && l < text.length) ? `<span class="letter">&#x1F389;&#x1F970;</span>` : `<span class="letter">${text[l]}</span>`);
            };
            text = '<span class="word">'+text.join('');
            elem.innerHTML = text;
        });
    },
    bodyClick: (hasStarted, audio, body, animation) => {
        hasStarted ? null: setTimeout(() => audio.play(), 1.5e3), body.classList.remove('freeze'), animation.add({scale: 1, duration: 1e3, delay: anime.stagger(50, {start: 3e3}), opacity: 1}, hasStarted = true)
    },
    addListenerEvents: (elem, func, ...events) => {
        events.forEach(ev => elem.addEventListener(ev, func));
    }
};

export default funcs;