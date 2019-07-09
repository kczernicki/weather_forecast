import * as React from "react";
import { shallow, configure } from "enzyme";
import * as Adapter from 'enzyme-adapter-react-16';

import SomeModule from "../SomeModule";
const testChildProps = {
  appName: 'testing enzyme!!',
};

configure({ adapter: new Adapter() });

it('shallow renders without crashing', () => {
  shallow(<SomeModule {...testChildProps}/>);
});
