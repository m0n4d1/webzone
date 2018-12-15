import React, { Component } from 'react';
import Foundation, {TopBar} from 'react-foundation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar color={this.UNSAFE_componentWillReceiveProps.SUCCES}> Test </TopBar>
    </div>
    );
  }
}

export default App;
