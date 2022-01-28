import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Profile from './Profile';
import { Simulate } from 'react-dom/cjs/react-dom-test-utils.production.min';
import renderer from 'react-test-renderer';


Enzyme.configure({ adapter: new Adapter() });

describe("Profile", () => {


        it('Should render correctly', function () {
            const component = renderer.create(<Profile />);
            const tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });
    
        it('Should have <div> with correct class name', function(){

            const component = shallow(<Profile />);
            expect(component.find('div').first().hasClass('flex')).toBe(true);
        });
})