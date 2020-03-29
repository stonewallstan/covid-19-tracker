import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Location extends Component {
    constructor(props) {
       super(props);
       this.state = {}; 
    }
    render() {
        return (
            <View>
                <Text>
                    Where are you?
                </Text>
            </View>
        )
    }
}

export default Location;