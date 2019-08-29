import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

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
        <View style={{flex:1, justifyContent: 'center'}}>
        <Text>Loading...</Text>
        </View>

      );
    }
  }

  export default LoadingComponent;