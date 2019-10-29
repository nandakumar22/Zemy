import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Button,
  Item,
  Input,
  Label,
  Icon,
} from 'native-base';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

//import {Icon} from 'react-native-vector-icons/FontAwesome';
//import {Icon} from 'react-native-elements';
const log = () => {
  Actions.login();
};
export default class SignupInd extends Component {
  render() {
    return (
      <ScrollView>
        <Image
          style={{
            height: 70,
            width: 220,
            marginTop: 20,
            alignSelf: 'center',
          }}
          source={require('../images/zemy.png')}
        />
        <View style={styles.container}>
          <Text style={{fontSize: 38, fontWeight: 'bold', marginTop: 10}}>
            {' '}
            Register{' '}
          </Text>
          <Form>
            <Item floatingLabel>
              <Icon active name="person" />

              <Label>Firs Namet</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Icon active name="person" />

              <Label>Last Name</Label>
              <Input />
            </Item>
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
            <Item floatingLabel>
              <Icon active name="person" />

              <Label>Occupation</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Icon active name="pin" />

              <Label>Address</Label>
              <Input />
            </Item>
            <Button
              full
              regular
              style={{
                marginTop: 30,
                marginLeft: 5,
                marginRight: 5,
                backgroundColor: '#ffd700',
              }}>
              <Text style={{color: 'black', alignSelf: 'center', fontSize: 20}}>
                Register
              </Text>
            </Button>
            <Text style={styles.text2}>
              Already have an account ?{' '}
              <Text onPress={log} style={styles.text3}>
                Log in{' '}
              </Text>
            </Text>
          </Form>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  text2: {
    fontSize: 15,

    marginTop: 20,
    marginBottom: 15,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
  },
  text3: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: '#1e90ff',
  },
});
