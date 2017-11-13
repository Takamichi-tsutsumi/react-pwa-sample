import React, { Component } from 'react'
import Media from 'react-responsive'
import Loadable from 'react-loadable'

const Loading = () => {
  return <div>Loading...</div>
}

const LoadableMobileApp = Loadable({
  loader: () => import('./mobile'),
  loading: Loading
})

const LoadableDesktopApp = Loadable({
  loader: () => import('./desktop'),
  loading: Loading
})

class App extends Component {
  render() {
    return (
      <div>
        <Media query={'(max-device-width: 699px)'}>
          <LoadableMobileApp />
        </Media>
        <Media query={'(min-device-width: 700px)'}>
          <LoadableDesktopApp />
        </Media>
      </div>
    )
  }
}

export default App
