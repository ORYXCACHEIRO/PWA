import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import LoginForm from './LoginForm';
import { Simulate } from 'react-dom/cjs/react-dom-test-utils.production.min';
import renderer from 'react-test-renderer';


Enzyme.configure({ adapter: new Adapter() });

describe("LoginForm", () => {


    it('Should have <div> with correct class name', function(){

        const component = shallow(<LoginForm />);
        expect(component.find('div').first().hasClass('flex')).toBe(true);
    });


})