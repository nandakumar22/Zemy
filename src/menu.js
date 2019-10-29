import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {
  Content,
  List,
  ListItem,
  Thumbnail,
  Icon,
  Left,
  Body,
} from 'native-base';

const MyProfile = () => {
  Actions.myPf();
};

const logout = () => {
  Actions.login();
};
const Settings = () => {
  Actions.Settings();
};

class Menu extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{flex: 1, justifyContent: 'center', alignItmems: 'center'}}>
          <Image
            style={{
              marginTop: 15,
              flexShrink: 1,
              height: 100,
              width: 250,
              alignSelf: 'center',
            }}
            source={require('../images/zemy.png')}
          />

          <Text style={{color: '#fff', fontSize: 15, marginTop: -12}}>
            Profile
          </Text>
        </View>
        <View style={{flex: 2}}>
          <Content>
            <List>
              <ListItem icon onPress={MyProfile}>
                <Left>
                  <Icon name="person" />
                </Left>
                <Body>
                  <Text>My Profile</Text>
                </Body>
              </ListItem>
              <ListItem icon onPress={Settings}>
                <Left>
                  <Icon name="settings"/>
                </Left>
                <Body>
                  <Text>Settings & Privacy</Text>
                </Body>
              </ListItem>

              <ListItem icon onPress={logout}>
                <Left>
                  <Icon name="log-out" />
                </Left>
                <Body>
                  <Text>Logout</Text>
                </Body>
              </ListItem>
            </List>
          </Content>
        </View>
      </View>
    );
  }
}
export default Menu;
