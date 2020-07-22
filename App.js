
import React, { Component } from 'react'
import { StatusBar } from 'react-native';

import Routing from './src/router-config/Routing'

import Header from './src/shared/Header/Header'
class App extends Component {

  render() {
    return (
          <>
        <StatusBar barStyle="dark-content" backgroundColor='#fff'/>
            <Header />
            <Routing />
          </>  
    )
  }
}

export default App;
