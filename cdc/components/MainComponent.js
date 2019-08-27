import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoadingComponent from './LoadingComponent';

class Main extends Component {

    componentDidMount() {
        console.log('componentDidMount');
    }
  
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
  
    render() {

        return (
            <View style={styles.container}>
                <Text>Cat or Dog Challenge Main component</Text>
                <LoadingComponent />
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

export default Main;