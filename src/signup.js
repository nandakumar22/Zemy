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
  icon,
  label,
  Item,
  Input,
  Label,
  Button,
  Grid,
  Col,
  Row,
  Icon,
  ListItem,
  Left,
  Body,
} from 'native-base';
import {Actions} from 'react-native-router-flux';

const signUp = () => {
  Actions.indv();
};
const LogIn = () => {
  Actions.login();
};
class Signup extends Component {
  static navigationOptions = {
    title: 'Sign-Up',
    color: 'white',
    TextColor: 'white',
    headerStyle: {
      backgroundColor: '#00b0e6',
      color: 'white',
      TextColor: 'white',
    },
    //header TintColor: '#0ff',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: 'white',
      TextColor: 'white',

      flex: 0.8,
      fontSize: 20,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  render() {
    return (
      <View style={{justifyContent:"center",alignContent:"center",paddingTop:200}}>
       <Image
          style={{
            height: 70,
            width: 220,
            marginTop: 5,
            alignSelf: 'center',
          }}
          source={require('../images/zemy.png')}
        />
      <Form >
        <Button
          full
          rounded
          style={{
            marginTop: 30,
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: 'black',
          }} onPress={signUp}>
          <Text style={{color:"#ffd700"}}>
            sign Up as a Rider
            </Text>
        </Button>
        <Button
          full
          rounded
          style={{
            marginTop: 30,
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: '#ffd700',
          }} onPress={LogIn}>
           <Text>
            Log in as a Rider
            </Text>
        </Button>
        </Form>
      </View>
    );
  }
}
export default Signup;
// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
