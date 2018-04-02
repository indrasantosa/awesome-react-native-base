import * as React from 'react'
import StackScreen from './StackScreen'

import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const component = renderer.create(
    <StackScreen />
  )
  expect(component).toMatchSnapshot()
})
