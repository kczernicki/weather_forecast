import * as React from 'react'
import { shallow, configure } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import { PlaceChooser } from './PlaceChooser'

const Props = {
  handleSelect: () => null
}

configure({ adapter: new Adapter() })

it('shallow renders without crashing', () => {
  shallow(<PlaceChooser {...Props} />)
})
