import React from 'react'
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Reservations from './Reservations';
import { Simulate } from 'react-dom/cjs/react-dom-test-utils.production.min';


Enzyme.configure({adapter: new Adapter()});

describe("Reservations", () => {

    it("Button Exists", () => {

        const reservaData = [];

        const wrapper = shallow(<Reservations reservaData={reservaData} />);
        const button = wrapper.find('.btn');
        expect(button.text()).toBe('Delete')
    })

})