import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyAMyz0emmelotQ7NQ8eWO-n2UHtyBt-UYA',
        authDomain: 'auth-84d00.firebaseapp.com',
        databaseURL: 'https://auth-84d00.firebaseio.com',
        projectId: 'auth-84d00',
        storageBucket: 'auth-84d00.appspot.com',
        messagingSenderId: '280769826987'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
