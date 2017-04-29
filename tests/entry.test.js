import React from 'react'
import { shallow, mount, render } from 'enzyme'

import App from '../app'

test('asserts basic logic of universe', () => {
  expect((1 + 2)).toBe(3)
})

describe('<App />', () => {
  it('should render and be selectable by class "react-app"', function() {
    expect(shallow(<App />).is('.react-app')).toBe(true);
  });
})
