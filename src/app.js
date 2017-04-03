import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null }; // i dont know if you're signed in or not

  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyAMyz0emmelotQ7NQ8eWO-n2UHtyBt-UYA',
        authDomain: 'auth-84d00.firebaseapp.com',
        databaseURL: 'https://auth-84d00.firebaseio.com',
        projectId: 'auth-84d00',
        storageBucket: 'auth-84d00.appspot.com',
        messagingSenderId: '280769826987'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
