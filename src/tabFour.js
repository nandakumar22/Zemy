import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Alert,
    Image,
  } from 'react-native';
  import React, {Component} from 'react';
  import {
    Container,
    Header,
    Content,
    Form,
    Item,
    Input,
    Label,
    Button,
    Grid,
    Col,
  } from 'native-base';
  class Tabfour extends Component {
    static navigationOptions = {
      title: 'Doog',
      headerStyle: {
        backgroundColor: 'lightskyblue',
      },
      //header TintColor: '#0ff',
      headerTitleStyle: {
        fontWeight: 'bold',
  
        flex: 0.8,
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      },
    };
    render() {
      return (
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              alignSelf: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              alignItems: 'center',
              marginTop: 200,
            }}>
            {' '}
            Welcome3
          </Text>
        </View>
      );
    }
  }
  
  export default Tabfour;
  