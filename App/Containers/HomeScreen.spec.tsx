import * as React from 'react'
import HomeScreen from './HomeScreen'

import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const component = renderer.create(
    <HomeScreen />
  )
  expect(component).toMatchSnapshot()
})
