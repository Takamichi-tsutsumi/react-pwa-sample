import React from 'react'
import ReactDOM from 'react-dom'
import { AppRegistry } from 'react-native'

import './index.css'
import { DesktopApp, MobileApp } from './App'

import { registerServiceWorker } from './registerServiceWorker'

if (window.innerWidth < 767) {
  AppRegistry.registerComponent('MobileApp', () => MobileApp)
  AppRegistry.runApplication('MobileApp', {
    rootTag: document.getElementById('root')
  })
} else {
  ReactDOM.render(<DesktopApp />, document.getElementById('root'))
}

registerServiceWorker()
