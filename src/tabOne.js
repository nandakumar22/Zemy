import {
  View,
  Text,
  TextInput,
  ScrollView,
  Alert,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';

import {Dimensions, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';

import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Icon,
  Button,
  Grid,
  Row,
  Col,
  Card,
  CardItem,
  Left,
  Body,
  Right,
  Thumbnail,
} from 'native-base';
import BottomDrawer from 'rn-bottom-drawer';
const {width, height} = Dimensions.get('window');
import SlidingPanel from 'react-native-sliding-up-down-panels';

const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const legs = [
  {
    distance: {
      text: '10.5 mi',
      value: '1684 kms',
    },
    duration: {
      text: '29 hours',
      value: 1732,
    },
    end_address: 'Queens, NY, USA',
    end_location: {
      latitude: 40.7282247,
      longitude: -73.7948437,
    },
    start_address: 'Brooklyn, NY, USA',
    start_location: {
      latitude: 40.678183,
      longitude: -73.94416129999999,
    },
    travel_mode: 'DRIVING',
  },
];
const GOOGLE_MAPS_APIKEY = 'AIzaSyAWqJkw2nY1fPTA5sINnp6hdu7xjLtBfbA';

class Tabone extends Component {
  constructor(props) {
    super(props);
    alert('legs' + legs[0].start_address);
    // AirBnB's Office, and Apple Park
    this.state = {
      coordinates: [
        {
          latitude: 40.678183,
          longitude: -73.94416129999999,
        },
        {
          latitude: 40.7282247,
          longitude: -73.7948437,
        },
      ],
    };
    this.state.start;
    this.state.end;
    this.state.durtion;
    this.state.distance;
    this.mapView = null;
  }

  onMapPress = e => {
    this.setState({
      coordinates: [...this.state.coordinates, e.nativeEvent.coordinate],
    });
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          ref={c => (this.mapView = c)}
          ress={this.onMapPress}>
          {this.state.coordinates.map((coordinate, index) => (
            <MapView.Marker
              key={`coordinate_${index}`}
              coordinate={coordinate}
            />
          ))}
          {this.state.coordinates.length >= 2 && (
            <MapViewDirections
              origin={this.state.start}
              destination={this.state.end}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="blue"
              optimizeWaypoints={true}
              onStart={params => {
                console.log(
                  `Started routing between "${params.origin}" and "${
                    params.destination
                  }"`,
                );
              }}
              onReady={result => {
                console.log('Duration: ${result.duration} min.');

                this.mapView.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: width / 20,
                    bottom: height / 20,
                    left: width / 20,
                    top: height / 20,
                  },
                });
              }}
              onError={errorMessage => {
                // console.log('GOT AN ERROR');
              }}
            />
          )}
        </MapView>
        <Item regular style={styles.itemStyle}>
          <Icon active name="pin" />

          <Input placeholder="Start Point" value={legs[0].start_address} />
        </Item>
        <Item regular style={styles.itemStyle}>
          <Icon active name="pin" />

          <Input placeholder="End Point" value={legs[0].end_address} />
        </Item>

        <Grid>
          <Row style={{width: 300}}>
            <Col style={{width: 105}}>
              <Item regular style={styles.itemStyle2}>
                <Input placeholder="" value={this.state.duration} />
              </Item>
            </Col>
            <Col style={{width: 105}}>
              <Item regular style={styles.itemStyle2}>
                <Input placeholder="" value={this.state.distance} />
              </Item>
            </Col>

            <Col style={{width: 80}}>
              <Button
                rounded
                style={{right: -30, top: 1.5}}
                onPress={this.handleSubmit.bind(this)}>
                <Text style={{textAlign: 'center'}}>Show Route</Text>
              </Button>
            </Col>
          </Row>
        </Grid>
      
      </View>
    );
  }
  handleSubmit() {
    this.setState({start: legs[0].start_location});
    this.setState({end: legs[0].end_location});
    this.state.coordinates.push(legs[0].start_location, legs[0].end_location);
    this.setState({duration: legs[0].duration.text});
    this.setState({distance: legs[0].distance.value});
  }
}

export default Tabone;

//css
const styles = StyleSheet.create({
  MainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  itemStyle: {
    marginLeft: 5,
    marginTop: 3,
    borderColor: 'white',
    marginRight: 5,
    backgroundColor: 'white',
    height: 40,
    justifyContent: 'space-around',
  },
  itemStyle2: {
    borderColor: 'white',
    borderRadius: 40,
  },

 
});
