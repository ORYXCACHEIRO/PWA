import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Homepage from './Homepage';
import { Simulate } from 'react-dom/cjs/react-dom-test-utils.production.min';
import renderer from 'react-test-renderer';


Enzyme.configure({ adapter: new Adapter() });

describe("Homepage", () => {


        it('Should render correctly', function () {
            const component = renderer.create(<Homepage />);
            const tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });
    



})