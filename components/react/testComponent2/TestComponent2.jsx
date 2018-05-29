import namor from "namor";
import React, {Component} from "react";
import Table from 'react_common/Table';

import styles from './TestComponent2.scss';

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

const datum = () => {
    return {
        category: namor.generate({ words: 1, numbers: 0 }),
        aspect: namor.generate({ words: 1, numbers: 0 }),
        count: Math.floor(Math.random() * 500)
    };
};

const makeData = (len = 20) => (
    range(len).map(datum)
);

export default class TestComponent2 extends Component {
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
            <div className="testComponent2">
                <h3 className={styles.heading}>{componentHeading}</h3>
                <p className={styles.text}>{componentText}</p>
                <Table data={makeData()} classNames={styles.table}/>
            </div>
        )
    }
}