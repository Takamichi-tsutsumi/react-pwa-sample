import React from 'react'
import ReactDOM from 'react-dom'
import { AppRegistry } from 'react-native'

import './index.css'
import { DesktopApp, MobileApp } from './App'

if (window.innerWidth < 767) {
  AppRegistry.registerComponent('MobileApp', () => MobileApp)
  AppRegistry.runApplication('MobileApp', {
    rootTag: document.getElementById('root')
  })
} else {
  ReactDOM.render(<DesktopApp />, document.getElementById('root'))
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration)
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}
