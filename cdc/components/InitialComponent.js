import React, { Component } from 'react';
import { TouchableHighlight, Image, View, Text } from 'react-native';

class InitialComponent extends Component {

    static navigationOptions = {
      title: 'Initial',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={{flex:1, justifyContent: 'center'}}>
        <Text style={{fontSize: 20}}>CAT and DOG Challenge!</Text>
        <TouchableHighlight 
            onPress={() => { console.log("play button pressed"); navigate('Game')} } >
            <Image
            style={{height: 200, width: 200}}
            source={require('../assets/images/play.png')}
            resizeMode="contain"
            
            />
        </TouchableHighlight>
        </View>
      );
    }
  }
  
  export default InitialComponent;
