import React, { Component } from 'react';
import {TopBar, Menu, Button} from 'react-foundation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar>
          <Menu>
            <Button color={"success"}>Test1</Button>
            <Button>Test2</Button>
            <Button>Test3</Button>
          </Menu>
        </TopBar>
    </div>
    );
  }
}

export default App;
