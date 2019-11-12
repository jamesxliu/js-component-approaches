import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Wizard from './wizard';

configure({ adapter: new Adapter() })

describe('Wizard responds to actions sent by steps', () => {
    const headerMock = () => {};
    const stepsMock = [1,2,3,4,5,6];
    const wizardContextMock = {};
    const onCompleteMock = () => {};

    describe('actions 1 & 2', () => {
        const FOWARD = 2;
        const BACK = 1;

        it('should go forward and backward based on action', () => {
            const wrapper = shallow(<Wizard header={headerMock}
                                           steps={stepsMock}
                                           wizardContext={wizardContextMock}
                                           onComplete={onCompleteMock}/>);

            const instance = wrapper.instance();
            expect(wrapper.state('currentStepIndex')).toEqual(0);
            instance.onStepAction(FOWARD);
            expect(wrapper.state('currentStepIndex')).toEqual(1);
            instance.onStepAction(FOWARD);
            expect(wrapper.state('currentStepIndex')).toEqual(2);
            instance.onStepAction(BACK);
            expect(wrapper.state('currentStepIndex')).toEqual(1);
        });
    });
});