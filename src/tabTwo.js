import React from 'react';
import {
  Text,
  View,
  Animated,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Card} from 'react-native-elements';
import {RadioButton} from 'react-native-paper';

import SlidingUpPanel from 'rn-sliding-up-panel';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Segment,
  Content,
  Item,
  Input,
  Grid,
  Col,
  Row,
  CardItem,
  Picker,
} from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';

const {height, width} = Dimensions.get('window');

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  panel: {
    flex: 1,
    backgroundColor: 'grey',
    position: 'relative',
  },
  panelHeader: {
    height: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  favoriteIcon: {
    position: 'absolute',
    top: -24,
    right: 24,
    backgroundColor: '#2b8a3e',
    width: 48,
    height: 48,
    padding: 8,
    borderRadius: 24,
    zIndex: 1,
  },
};

class BottomSheet extends React.Component {
  state = {
    checked: 'first',
  };
  state = {
    active: 0,
    xTabOne: 0,
    xTabTwo: 0,
    translateX: new Animated.Value(0),
    translateXTabOne: new Animated.Value(0),
    translateXTabTwo: new Animated.Value(width),
    translateY: -1000,
  };

  handleSlide = type => {
    let {
      active,
      xTabOne,
      xTabTwo,
      translateX,
      translateXTabOne,
      translateXTabTwo,
    } = this.state;
    Animated.spring(translateX, {
      toValue: type,
      duration: 1,
    }).start();
    if (active === 0) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: 0,
          duration: 1,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: width,
          duration: 1,
        }).start(),
      ]);
    } else {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: -width,
          duration: 1,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: 0,
          duration: 1,
        }).start(),
      ]);
    }
  };
  constructor() {
    super();

    this.state = {
      textValue: '',
    };
    //The following line must be added to attach "state",  for non React methods
    this.fun_name = this.fun_name.bind(this);
  }
  fun_name(value) {
    this.setState({textValue: value});
  }

  render() {
    const {checked} = this.state;

    let {
      xTabOne,
      xTabTwo,
      translateX,
      active,
      translateXTabOne,
      translateXTabTwo,
      translateY,
    } = this.state;
    return (
      <View style={styles.container}>
        <Text>Hello world</Text>
        <SlidingUpPanel
          ref={c => (this._panel = c)}
          draggableRange={{top: height / 1.3, bottom: 10}}
          animatedValue={this._draggedValue}
          showBackdrop={false}>
          <View style={styles.panel}>
            <View style={styles.panelHeader}>
              <Icon active name="angle-up" size={100} />
              {/* <Text style={{color: '#FFF'}}>Bottom Sheet Peek</Text> */}
            </View>
            <View style={styles.container}>
              <View style={{flex: 1}}>
                <View
                  style={{
                    width: '90%',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 40,
                      marginBottom: 20,
                      height: 36,
                      position: 'relative',
                    }}>
                    <Animated.View
                      style={{
                        position: 'absolute',
                        width: '50%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        backgroundColor: 'black',
                        borderRadius: 4,
                        transform: [
                          {
                            translateX,
                          },
                        ],
                      }}
                    />
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: 'black',
                        borderRadius: 4,
                        borderRightWidth: 0,
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                      }}
                      onLayout={event =>
                        this.setState({
                          xTabOne: event.nativeEvent.layout.x,
                        })
                      }
                      onPress={() =>
                        this.setState({active: 0}, () =>
                          this.handleSlide(xTabOne),
                        )
                      }>
                      <Text
                        style={{
                          color: active === 0 ? '#ffd700' : '#ffd700',
                          fontWeight: 'bold',
                        }}>
                        Tab One
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        flex: 1,

                        borderWidth: 1,
                        borderColor: 'black',
                        borderRadius: 5,
                        borderLeftWidth: 0,
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onLayout={event =>
                        this.setState({
                          xTabTwo: event.nativeEvent.layout.x,
                        })
                      }
                      onPress={() =>
                        this.setState({active: 1}, () =>
                          this.handleSlide(xTabTwo),
                        )
                      }>
                      <Text
                        style={{
                          color: active === 1 ? '#ffd700' : '#ffd700',
                          fontWeight: 'bold',
                        }}>
                        Tab Two
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <ScrollView>
                    <Animated.View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',

                        transform: [
                          {
                            translateX: translateXTabOne,
                          },
                        ],
                      }}
                      onLayout={event =>
                        this.setState({
                          translateY: event.nativeEvent.layout.height,
                        })
                      }>
                      <Text></Text>
                      {/* <Item regular style={{width: 294}}>
                          <Input placeholder="Regular Textbox" />
                        </Item> */}
<View>
                      <Picker
                        selectedValue={this.state.textValue}
                        onValueChange={this.fun_name}>
                        <Picker.Item label="HTML Code Play" value="1" />
                        <Picker.Item label="Android Code Play" value="2" />
                        <Picker.Item label="3Dthreejs Code Play" value="3" />
                      </Picker>
</View>
                      <Text style={{fontWeight: 'bold', marginStart: -220}}>
                        Share Options
                      </Text>
                      <Card>
                        <CardItem style={{width: 290, height: 5}}>
                          <Grid style={{height: 36, marginStart: -10}}>
                            <Row style={{width: 290}}>
                              <Col style={{width: 230}}>
                                <RadioButton
                                  value="first"
                                  status={
                                    checked === 'first'
                                      ? 'checked'
                                      : 'unchecked'
                                  }
                                  onPress={() => {
                                    this.setState({checked: 'first'});
                                  }}
                                />
                              </Col>

                              <Col style={{width: 60}}>
                                <Text style={{marginLeft: -195, marginTop: 10}}>
                                  Share with others
                                </Text>
                              </Col>
                              <Col style={{width: 220, marginLeft: -120}}>
                                <RadioButton
                                  value="second"
                                  status={
                                    checked === 'second'
                                      ? 'checked'
                                      : 'unchecked'
                                  }
                                  onPress={() => {
                                    this.setState({checked: 'second'});
                                  }}
                                />
                              </Col>
                              <Col style={{width: 60}}>
                                <Text style={{marginLeft: -185, marginTop: 10}}>
                                  Personal
                                </Text>
                              </Col>
                            </Row>
                          </Grid>
                        </CardItem>
                      </Card>

                      <Text
                        style={{
                          marginStart: -200,
                          fontWeight: 'bold',
                          paddingTop: 10,
                        }}>
                        Deduct miles from
                      </Text>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <Card>
                          <View style={{flex: 1, alignItems: 'center'}}>
                            <Icon active name="home" size={30} />
                            <Text style={{fontSize: 12, textAlign: 'center'}}>
                              Corporate
                            </Text>
                          </View>
                        </Card>
                        <Card>
                          <View style={{flex: 1, alignItems: 'center'}}>
                            <Icon active name="home" size={30} />
                            <Text style={{fontSize: 12, textAlign: 'center'}}>
                              Personal
                            </Text>
                          </View>
                        </Card>
                        <Card>
                          <View style={{flex: 1, alignItems: 'center'}}>
                            <Icon active name="home" size={30} />
                            <Text style={{fontSize: 12, textAlign: 'center'}}>
                              {' '}
                              Total{' '}
                            </Text>
                          </View>
                        </Card>
                      </View>
                    </Animated.View>

                    <Animated.View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        transform: [
                          {
                            translateX: translateXTabTwo,
                          },
                          {
                            translateY: -translateY,
                          },
                        ],
                      }}>
                      <Text>Hi, I am a cute dog</Text>
                    </Animated.View>
                  </ScrollView>
                </View>
                <Button
                  full
                  rounded
                  style={{
                    marginLeft: 20,
                    marginRight: 20,
                    backgroundColor: '#ffd700',
                  }}>
                  <Text>Search Cabs</Text>
                </Button>
              </View>
              <Button
                full
                rounded
                style={{
                  marginLeft: 20,
                  marginRight: 20,
                  backgroundColor: '#ffd700',
                }}>
                <Text>Search Cabs</Text>
              </Button>
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    );
  }
}

export default BottomSheet;
