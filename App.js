
import React, { Component } from 'react'
import { StatusBar } from 'react-native';

import Routing from './src/router-config/Routing'
import { Provider as PaperProvider } from 'react-native-paper';
class App extends Component {

  render() {
    return (
      <PaperProvider>
        <StatusBar barStyle="dark-content" backgroundColor='#fff'/>
            <Routing />
      </PaperProvider>  
    )
  }
}

export default App;
