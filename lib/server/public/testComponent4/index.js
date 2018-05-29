import './lib/dist/namor.umd.js';
import './lib/dist/jquery.umd.js';
import TableTpl from './Table.js';

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

const datum = () => {
    return {
        client: _namor.generate({ words: 1, numbers: 0 }),
        latency: Math.floor(Math.random() * 100)
    };
};

const makeData = (len = 20) => (
    range(len).map(datum)
);

export default class TestComponent4 {
    constructor({componentHeading, componentText, el}) {
        _jquery(() => {
            _jquery(`#${el}`).html(`
                <div class="testComponent4">
                    <h3 class="heading">${componentHeading}</h3>
                    <p class="text">${componentText}</p>
                    <div>${TableTpl(makeData())}</div>
                </div>
            `)
        })
    }
};