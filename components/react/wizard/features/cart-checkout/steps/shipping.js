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

        this.handleAction = this.handleAction.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    save() {
        this.props.wizardContext.to = this.state;
    }

    handleAction(action) {
        this.save();
        this.props.onAction(action)
    }

    handleChange(event) {
        let newState = {...this.state};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    render() {
        const {state: {name, street, city, state, zip}, handleChange, handleAction} = this;
        return (
            <div className="shipping step">
                <h2 className="heading">Shipping Address</h2>
                <AddressForm name={name}
                             street={street}
                             city={city}
                             state={state}
                             zip={zip}
                             handleChange={handleChange}/>
                <Actions onAction={handleAction}
                         hasPrev={true}/>
            </div>
        )
    }
}

GetSenderAddress.propTypes = propTypes;

export default GetSenderAddress;