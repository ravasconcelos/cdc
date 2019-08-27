import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class GameComponent extends Component {

    componentDidMount() {
        console.log('componentDidMount');
    }
  
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
  
    render() {

        return (
            <View style={styles.container}>
                <Text>GameComponent</Text>
            </View>
      
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default GameComponent;