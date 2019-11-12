import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AddressForm, Actions} from '../../../core/components/misc';

const propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired
};

class GetSenderAddress extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            street: '',
            city: '',
            state: '',
            zip: ''
        };

        this.handleNext = this.handleNext.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    save() {
        this.props.wizardContext.from = this.state;
    }

    handleNext(action) {
        this.save();
        this.props.onAction(action)
    }

    handleChange(event) {
        let newState = {...this.state};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    render() {
        const {state: {name, street, city, state, zip}, handleChange, handleNext} = this;
        return (
            <div className="billingAddress step">
                <h2 className="heading">Billing Address</h2>
                <AddressForm name={name}
                             street={street}
                             city={city}
                             state={state}
                             zip={zip}
                             handleChange={handleChange}/>
                <Actions onAction={handleNext}/>
            </div>
        )
    }
}

GetSenderAddress.propTypes = propTypes;

export default GetSenderAddress;