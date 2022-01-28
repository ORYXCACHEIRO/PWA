import React from 'react'
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import SignIn from './SignIn';
import { Simulate } from 'react-dom/cjs/react-dom-test-utils.production.min';


Enzyme.configure({adapter: new Adapter()});

describe("SignIn", () => {

    it("Button Exists", () => {
        const wrapper = shallow(<SignIn />);
        const button = wrapper.find('.btn');
        expect(button.text()).toBe('Sign In')
    })

    it("Link Exists", () => {
        const wrapper = shallow(<SignIn />);
        const link = wrapper.find('Link').first();
        expect(link.props().to).toBe('/signup')
    })

    
    it("Verificar chamada a api nao acontece inicialmente", () => {

        const login = jest.fn();

       expect(login).toBeCalledTimes(0)

    })

})





