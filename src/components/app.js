import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {
  render () {
    return (
      <View style={styles.viewStyle}>
        <Text>Oh wow, it's an app!</Text>
      </View>
    )
  }
}

const styles = {
  viewStyle: {
    height: 100,
    marginTop: 20,
    backgroundColor: 'skyblue'
  }
}

export default App;
