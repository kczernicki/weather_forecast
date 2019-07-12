import * as React from "react";
import { shallow, configure } from "enzyme";
import * as Adapter from 'enzyme-adapter-react-16';
import HomePage from "./HomePage";

configure({ adapter: new Adapter() });

it('shallow renders without crashing', () => {
  shallow(<HomePage />);
});
