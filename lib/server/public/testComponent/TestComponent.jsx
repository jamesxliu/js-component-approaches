import namor from 'namor';
import React, {Component} from 'react';
import Table from 'react_common/Table';

import styles from './TestComponent.scss';

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

const datum = () => {
    return {
        name: namor.generate({ words: 2, numbers: 0 }),
        type: namor.generate({ words: 1, numbers: 0 }),
        score: Math.floor(Math.random() * 30)
    };
};

const makeData = (len = 20) => (
    range(len).map(datum)
);

export default class TestComponent extends Component {
    constructor(props, ctx) {
        super(props, ctx);
    }

    render() {
        const {
            initOptions: {
                componentHeading,
                componentText
            }
        } = this.props;

        return (
            <div className="testComponent">
                <h3 className={styles.heading}>{componentHeading}</h3>
                <p className={styles.text}>{componentText}</p>
                <Table data={makeData()} classNames={styles.table}/>
            </div>
        )
    }
}