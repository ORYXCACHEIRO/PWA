import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import SearchResult from './SearchResult';
import renderer from 'react-test-renderer';


Enzyme.configure({ adapter: new Adapter() });

describe("SearchResult", () => {


        it('Should render correctly', function () {
            const component = renderer.create(<SearchResult />);
            const tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });

})