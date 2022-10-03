import funcs from './sources/funcs.js';

funcs.loadAll(window);

const container = query('.container');

for (let i = 0; i < 400; i++) {
    let block = document.createElement('div');
    block.classList.add('block');
    container.append(block);
};