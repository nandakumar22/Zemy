import React, {Component} from 'react';
import {
  Container,
  Header,
  Tab,
  Tabs,
  Left,
  Right,
  Body,
  Title,
  TabHeading,
  Icon,
} from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';
import Tab4 from './tabFour';

import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
} from 'react-native';

export default class Dash extends Component {
  static navigationOptions = {
    headerTitle: (
      <Image
        style={{
          height: 30,
          width: 70,
          marginLeft: 20,
        }}
        source={require('../images/zemy.png')}
      />
    ),
    headerStyle: {
      backgroundColor: 'white',
    },
  };
  render() {
    return (
      <Container>
        <Tabs style={{borderRadius: 80, backgroundColor: 'white'}}>
          <Tab
            heading={
              <TabHeading>
                {/* <Icon name="car" /> */}
                <Text>Instant</Text>
              </TabHeading>
            }>
            <Tab1 />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                {/* <Icon name="train" /> */}

                <Text>Schedule</Text>
              </TabHeading>
            }>
            <Tab2 />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                {/* <Icon name="walk" /> */}

                <Text>Transfer</Text>
              </TabHeading>
            }>
            <Tab3 />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                {/* <Icon name="walk" /> */}

                <Text>Buy</Text>
              </TabHeading>
            }>
            <Tab4 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
