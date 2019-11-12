import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {WizardAction} from '../../../enums';

const propTypes = {
    header: PropTypes.func.isRequired,
    steps: PropTypes.array.isRequired,
    wizardContext: PropTypes.object.isRequired,
    onComplete: PropTypes.func.isRequired
};

const actionMethodMap = Object.entries(WizardAction).reduce((acc, entry) => {
    acc[entry[1]] = entry[0];
    return acc;
}, {});

class Wizard extends Component {
    constructor(props) {
        super(props);
        // Inherit the initial context
        this.wizardContext = props.wizardContext;
        this.steps = props.steps;
        this.state = {
            currentStepIndex: 0
        };

        this.onStepAction = this.onStepAction.bind(this);
    }

    prev() {
        if(this.state.currentStepIndex > 0) {
            this.setState({
                currentStepIndex: this.state.currentStepIndex - 1
            })
        }

    }

    next() {
        if(this.state.currentStepIndex < (this.steps.length - 1)) {
            this.setState({
                currentStepIndex: this.state.currentStepIndex + 1
            })
        }
    }

    end() {
        this.props.onComplete()
    }

    onStepAction(action) {
        // actionMethodMap returns the method name corresponding to the action value
        this[actionMethodMap[String(action)]]()
    }

    render() {
        const {props: {steps, header:Header}, state: {currentStepIndex}, wizardContext} = this;
        const CurrentStep = steps[currentStepIndex];

        return (
            <div className="wizard">
                <Header/>
                <div className="progressBar">
                    <div className="progress" style={{width: `${100 * (currentStepIndex + 1) / steps.length}%`}}></div>
                </div>
                {
                    CurrentStep && CurrentStep instanceof Function ?
                        <CurrentStep wizardContext={wizardContext}
                                     onAction={this.onStepAction}/>
                        :
                        undefined
                }
            </div>
        )
    }
}

Wizard.propTypes = propTypes;
Wizard.actionMethodMap = actionMethodMap;

export default Wizard;