'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';

const styles = require('../../../styles.js')
const constants = styles.constants 
const {StyleSheet, Text, View, TouchableHighlight} = ReactNative; 

class CenterButton extends Component { 
	render() {
		return( 
		<View style={styles.actionCenter}>
			<TouchableHighlight
			underlayColor={constants.actionColor}
			onPress={this.props.onPress}>
			<Text style={styles.actionText}>{this.props.title} </Text>
			</TouchableHighlight>
		</View> 
		);
	}
}


module.exports = CenterButton;
