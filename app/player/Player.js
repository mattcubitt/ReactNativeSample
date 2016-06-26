import React, {Component} from 'react';
import {
    Animated,
    StyleSheet,
    View,
} from 'react-native';

export default class Player extends Component {
    render() {
        const { player } = this.props;

        var valueXY = new Animated.ValueXY(player.previousPosition);

        Animated.spring(valueXY, {
            ...Player.SPRING_CONFIG,
            toValue: player.position
        }).start();

        var style = [
            styles.box,
            {
                transform: valueXY.getTranslateTransform()
            }
        ];

        return (
            <Animated.View style={style} />
        );
    }
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'red',
        height: 15,
        width: 15,
        position: 'absolute',
        borderRadius: 15
    }
});