import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Actions} from '../../../core/components/misc';

const propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired
};

class GetSenderAddress extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weight: ''
        };

        this.handleAction = this.handleAction.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    save() {
        this.props.wizardContext.weight = this.state.weight;
    }

    handleAction(action) {
        this.save();
        this.props.onAction(action)
    }

    handleChange(event) {
        this.setState({
            weight: event.target.value
        })
    }

    render() {
        const {state: {weight}, handleChange, handleAction} = this;
        return (
            <div className="weight step">
                <h2>Quantity</h2>
                <form>
                    <label>Number of units in shipment
                        <input type="number"
                               value={weight}
                               onChange={handleChange}/>
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