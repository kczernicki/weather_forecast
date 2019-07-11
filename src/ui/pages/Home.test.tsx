import * as React from "react";
import { shallow, configure } from "enzyme";
import * as Adapter from 'enzyme-adapter-react-16';
import Home from "./Home";

configure({ adapter: new Adapter() });

it('shallow renders without crashing', () => {
  shallow(<Home />);
});
