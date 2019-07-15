import * as React from 'react'
import { shallow, configure } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import HomePage from './HomePage'

configure({ adapter: new Adapter() })

it('shallow renders without crashing', () => {
  shallow(<HomePage />)
})

it('includes title', () => {
  const app = shallow(<HomePage />)
  expect(app.containsMatchingElement(<h1>Weather app</h1>)).toEqual(true)
})
