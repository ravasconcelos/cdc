import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class LoadingComponent extends Component {

    componentWillMount() {
        console.log("Component will mount");
    }

    componentDidMount() {
        console.log("Component did mount");
        const {navigate} = this.props.navigation;
        setTimeout(() => {
            console.log("Will move to initial screen");
            navigate('Initial')
        }, 10000);
    }

    static navigationOptions = {
      title: 'Loading',
    };
    render() {
      
      return (
        <View style={{flex:1, justifyContent:'space-around', margin:100}}>
        <Text style={{fontSize: 40}}>Loading...</Text>
        <Image
          style={{flex:1, height: 200, width: 200}}
          source={require('../assets/images/loading.png')}
          resizeMode="contain"
        />
        </View>

      );
    }
  }

  export default LoadingComponent;