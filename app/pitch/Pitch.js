import React, {Component} from 'react';
import {
    Animated,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgreen'
    }
});

export default class Pitch extends Component {
    render() {
        return (
            <TouchableWithoutFeedback onPress={(a, b) => this.props.onClickPitch(a, b)}>
                <View style={styles.container}>
                    {this.props.children}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}