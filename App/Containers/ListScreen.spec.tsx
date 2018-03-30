import * as React from 'react'
import ListScreen from './ListScreen'

import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const component = renderer.create(
    <ListScreen />
  )
  expect(component).toMatchSnapshot()
})
