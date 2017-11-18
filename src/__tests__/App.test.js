import React from 'react'
import ReactDOM from 'react-dom'
import { MobileApp, DesktopApp } from '../App'
import { shallow } from 'enzyme'

it('Desktop App renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DesktopApp />, div)
})

it('DesktopApp renders correctly', () => {
  const wrapper = shallow(<DesktopApp />)
  expect(wrapper).toMatchSnapshot()
})

it('Mobile App renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MobileApp />, div)
})

it('Mobile App renders correctly', () => {
  const wrapper = shallow(<MobileApp />)
  expect(wrapper).toMatchSnapshot()
})
