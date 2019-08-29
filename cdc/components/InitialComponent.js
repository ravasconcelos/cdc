import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class InitialComponent extends Component {

    static navigationOptions = {
      title: 'Initial',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={{flex:1, justifyContent: 'center'}}>
        <Text>Initial screen</Text>

        <Button
          title="Go to Game screen"
          onPress={() => navigate('Game')}
        />
        </View>
      );
    }
  }
  
  export default InitialComponent;
