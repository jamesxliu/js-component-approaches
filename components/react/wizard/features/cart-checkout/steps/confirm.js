import React from 'react';
import {Actions} from '../../../core/components/misc';
import getShippingCost from '../helpers/get-shipping-cost';

const toMoney = (dollars) => {
    const cents = dollars * 100
    return
}

const Confirm = ({wizardContext, onAction, hasPrev, hasEnd}) => (
    <div className="confirm step">
        <h2 className="heading">Confirmation</h2>
        <div className="confirmationDetails">
            {
                Object.entries(wizardContext).map((stepEntry, idx) => {
                    if(stepEntry[1] instanceof Object) {
                        return (
                            <div className={stepEntry[0]} key={`stepEntry_${idx}`}>
                                <h3>{stepEntry[0].toUpperCase()}</h3>
                                {
                                    Object.entries(stepEntry[1]).map((fieldEntry, idx2) => (
                                        <p key={`${stepEntry[0]}_field_${idx2}`}>
                                            <strong>{fieldEntry[0].toUpperCase()}: </strong>
                                            <span>{fieldEntry[1]}</span>
                                        </p>
                                    ))
                                }
                            </div>
                        )
                    }

                    if(stepEntry[0] === 'shippingOption') {
                        const optionsMap = {
                            '1': 'Ground',
                            '2': 'Priority'
                        };

                        return (
                            <div className={stepEntry[0]} key={`stepEntry_${idx}`}>
                                <h3>SHIPPING METHOD: {optionsMap[stepEntry[1]]}</h3>
                            </div>
                        )
                    }

                    return (
                        <div className={stepEntry[0]} key={`stepEntry_${idx}`}>
                            <h3>{stepEntry[0].toUpperCase()}: {stepEntry[1]} lbs</h3>
                        </div>
                    )
                })
            }
            <div className="shippingCost">
                <div>
                    <h3>SHIPPING COST: ${getShippingCost(wizardContext.weight, wizardContext.shippingOption).toFixed(2)}</h3>
                </div>
            </div>
        </div>
        <Actions onAction={onAction}
                 hasEnd={true}
                 hasPrev={true}/>
    </div>
);

export default Confirm;