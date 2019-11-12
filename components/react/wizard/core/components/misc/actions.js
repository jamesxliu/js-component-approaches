import React from 'react';
import {WizardAction} from '../../../enums';

const Actions = ({onAction, hasPrev, hasEnd}) => (
    <div className="actions">
        {
            hasPrev ? <div className="action"><button onClick={()=>{onAction(WizardAction.prev)}}>Previous</button></div> : undefined
        }
        {
            hasEnd ?
                <div className="action">
                    <button onClick={()=>{onAction(WizardAction.end)}}>End</button>
                </div>
                :
                <div className="action">
                    <button onClick={()=>{onAction(WizardAction.next)}}>Next</button>
                </div>
        }
    </div>
);

export default Actions;