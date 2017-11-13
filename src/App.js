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

const LoadableDefaultApp = Loadable({
  loader: () => import('./default'),
  loading: Loading
})

class App extends Component {
  render() {
    return (
      <div>
        <Media query={'(max-device-width: 767px)'}>
          <LoadableMobileApp />
        </Media>
        <Media query={'(min-device-width: 768px)'}>
          <LoadableDefaultApp />
        </Media>
      </div>
    )
  }
}

export default App
