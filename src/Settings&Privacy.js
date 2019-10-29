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
import {Actions} from 'react-native-router-flux';

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

const cpw = () => {
  Actions.chng();
};

const rsp = () => {
  Actions.rst();
};
class Settingspsw extends Component {
  static navigationOptions = {
    title: 'Settings & Privacy',
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
          Welcome
        </Text>
        <Text onPress={rsp} style={styles.text3}>
          Reset Password
        </Text>

        <Text onPress={cpw} style={styles.text3}>
          Change Password
        </Text>
      </View>
    );
  }
}

export default Settingspsw;

// define your styles
const styles = StyleSheet.create({
  text3: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 12,
    color: '#00b0e6',
  },
});
