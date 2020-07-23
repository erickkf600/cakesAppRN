
import React, { Component } from 'react'
import { StatusBar } from 'react-native';

import Routing from './src/router-config/Routing'
import { Provider as PaperProvider } from 'react-native-paper';
import Header from './src/shared/Header/Header'
class App extends Component {

  render() {
    return (
      <PaperProvider>
        <StatusBar barStyle="dark-content" backgroundColor='#fff'/>
            <Header />
            <Routing />
      </PaperProvider>  
    )
  }
}

export default App;
