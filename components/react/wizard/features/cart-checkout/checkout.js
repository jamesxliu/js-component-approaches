import React, {Component} from 'react';
import Wizard from '../../core/components/wizard/wizard';
import steps from './steps';
import Header from './header';
import {ShippingOption} from '../../enums'

class ShippingLabelMaker extends Component {
    constructor(props) {
        super(props);

        this.shippingInfo = {
            from: undefined,
            to: undefined,
            weight: undefined,
            shippingOption: undefined
        };

        this.onComplete = this.onComplete.bind(this);
    }

    onComplete() {
        this.print();
    }

    print() {
        window.print()
    }

    render() {
        const {shippingInfo, onComplete} = this;

        return (
            <div className="checkout">
                <Wizard steps={steps}
                        wizardContext={shippingInfo}
                        onComplete={onComplete}
                        header={Header}/>
            </div>
        )
    }
}

export default ShippingLabelMaker;
