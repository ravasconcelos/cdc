import React, { Component } from 'react';
import { Image, Alert, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class GameComponent extends Component {

    static navigationOptions = {
      title: 'Game',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={{flex:1, justifyContent:'space-around', margin:40}} >
        <Text style={{fontSize: 20}}>Game screen</Text>
        <Image
          style={{height: 400, width: 400}}
          source={require('../assets/images/dogs/dog_1.jpg')}
          resizeMode="contain"
        />
        <Button
          title="CAT"
          onPress={() => Alert.alert(
            'Try Again',
            'It is not a CAT!',
            [
                {
                    text: 'OK',
                    onPress: () => console.log('CAT Alert OK')
                }
            ]
            )}
        />
        <Button
          title="DOG"
          onPress={() => Alert.alert(
            'Good Job!',
            'It is DOG!',
            [
                {
                    text: 'OK',
                    onPress: () => console.log('DOG Alert OK')
                }
            ]
            )}
        />
        <Button
          title="Exit"
          onPress={() => navigate('Initial')}
        />
        </View>
      );
    }

  }

  export default GameComponent;