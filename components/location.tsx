import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Constants} from 'expo';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { MAPS_KEY } from 'react-native-dotenv';

class Locations extends Component {
    state = {
        errorMessage: null,
        state: null
    }; 

    async componentDidMount() {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState(
                {
                errorMessage: 'Location Access Denied'
                }
            );
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        const latitude = JSON.stringify(location.coords.latitude);
        const longitude = JSON.stringify(location.coords.longitude);
        axios.get('https://maps.googleapis.com/maps/api/geocode/json',
            {
              params: {
                latlng: latitude + ', ' + longitude,
                result_type: 'administrative_area_level_1',
                key: MAPS_KEY 
            }
        }).then(response => {
            alert(JSON.stringify(response.data));
            const state = JSON.stringify(response.data.results[0].address_components[0].short_name);
            this.setState({
                state
            });
        }).catch(error => {
            alert(error);
        });
    }

    render() {
        let text = '';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        }
        else if (this.state.state) {
            text = 'Current State: ' + this.state.state;
        }
        console.log(this.state.state);
        return (
            <View>
                <TouchableOpacity>
                    <Text>
                       Where are you?
                    </Text>
                    <Text>
                        { text }
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Locations;