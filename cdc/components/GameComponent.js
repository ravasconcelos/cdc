import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class GameComponent extends Component {

    static navigationOptions = {
      title: 'Game',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={{flex:1, justifyContent: 'center'}} >
        <Text>Game screen</Text>
        <Button
          title="Go to Initial screen"
          onPress={() => navigate('Initial')}
        />
        </View>
      );
    }

  }

  export default GameComponent;