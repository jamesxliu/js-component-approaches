import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Actions} from '../../../core/components/misc';
import {ShippingOption} from '../../../enums'

const propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired
};

class GetSenderAddress extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shippingOption: '1' // default to ground
        };

        this.handleAction = this.handleAction.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    save() {
        this.props.wizardContext.shippingOption = this.state.shippingOption;
    }

    handleAction(action) {
        this.save();
        this.props.onAction(action)
    }

    handleChange(event) {
        this.setState({
            shippingOption: event.target.value
        })
    }

    render() {
        const {state: {shippingOption}, handleChange, handleAction} = this;
        return (
            <div className="getWeight step">
                <h2 className="heading">Select a shipping option:</h2>
                <form>
                    <label>Shipment method
                        <select value={shippingOption}
                               onChange={handleChange}>
                            {
                                Object.entries(ShippingOption).map((entry, idx) => (
                                    <option value={entry[1]} key={`${entry[0]}`}>{entry[0]}</option>
                                ))
                            }
                        </select>
                    </label>
                </form>
                <Actions onAction={handleAction}
                         hasPrev={true}/>
            </div>
        )
    }
}

GetSenderAddress.propTypes = propTypes;

export default GetSenderAddress;