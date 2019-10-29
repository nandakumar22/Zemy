import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
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
  Icon,
  Right,
  Col,
} from 'native-base';
import {Actions} from 'react-native-router-flux';

const logIn = () => {
  Actions.map();
};
const signUP = () => {
  Actions.indv();
};
const lOgin = () => {
  Actions.dd();
};

class Login extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          style={{
            height: 70,
            width: 180,
            marginTop: 20,
            alignSelf: 'center',
          }}
          source={require('../images/zemy.png')}
        />
        <View>
          <Text style={{fontSize: 38, fontWeight: 'bold', marginTop: 50}}>
            {' '}
            Log in{' '}
          </Text>
          <Form>
            <Item floatingLabel>
              <Icon active name="mail" />

              <Label>email address</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Icon active name="call" />

              <Label>ph no</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Icon active name="lock" />

              <Label>Password</Label>
              <Input />
            </Item>
            <Right>
              <Text style={{color:"#1e90ff",fontSize:18,paddingLeft:160}}>Forgot Password</Text>
            </Right>
            <Button
              full
              regular
              style={{
                marginTop: 30,
                marginLeft: 5,
                marginRight: 5,
                backgroundColor: '#ffd700',
              }}onPress={{lOgin}}>
              <Text style={{color: 'black', alignSelf: 'center', fontSize: 20}} onPress={logIn}>
                Log in
              </Text>
            </Button>
            <Text style={styles.text2}>
              Don't have account ?{' '}
              <Text style={styles.text3} onPress={signUP}>
                Sign Up
              </Text>
            </Text>
          </Form>
        </View>
      </ScrollView>
    );
  }
}
export default Login;
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    color: '#fff',
  },
  buttonContainer: {
    backgroundColor: '#ff7f50',
    paddingVertical: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  logo: {
    width: 300,
    height: 100,
    marginTop: 10,
    marginLeft: 10,
  },
  loginContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    justifyContent: 'center',
  },
  text2: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 15,
    marginLeft: 30,
  },
  text3: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    color: '#1e90ff',
  },
  socialIcons: {
    width: 30,
    height: 30,
    marginLeft: 40,
  },
  socialIconsFacebook: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  socialIconsGoogle: {
    width: 30,
    height: 30,
    marginLeft: 30,
  },
  text4: {
    fontSize: 15,
    textAlign: 'right',
    marginTop: 5,
    marginBottom: 5,
    color: 'grey',
  },
  gridStyles: {
    margin: 15,
    marginTop: 5,
    backgroundColor: 'white',
    borderRadius: 100,
  },
});
