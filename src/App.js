import React, { Component } from 'react';
import Media from 'react-responsive'
import MobileApp from './mobile'
import DesktopApp from './desktop'

class App extends Component {
  render() {
    return (
      <div>
        <Media query={'(max-device-width: 699px)'}>
          <MobileApp />
        </Media>
        <Media query={'(min-device-width: 700px)'}>
          <DesktopApp />
        </Media>
      </div>
    );
  }
}

export default App;
