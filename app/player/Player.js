import React, { Component, PropTypes } from 'react';
import {
    Animated,
    StyleSheet,
    View,
    TouchableWithoutFeedback
} from 'react-native';

export default class Player extends Component {
    render() {
        var { position, previousPosition, selected, onClickPlayer } = this.props;

        var valueXY;

        if(selected) {
            previousPosition = previousPosition === undefined ?
                position : previousPosition;

            valueXY = new Animated.ValueXY(previousPosition);

            Animated.spring(valueXY, {
                ...Player.SPRING_CONFIG,
                toValue: position
            }).start();
        } else {
            valueXY = new Animated.ValueXY(position);
        }

        const style = [
            {
                backgroundColor: selected === true ? 'yellow' : 'red',
                height: 15,
                width: 15,
                position: 'absolute',
                borderRadius: 15
            },
            {
                transform: valueXY.getTranslateTransform()
            }
        ];

        return (
            <TouchableWithoutFeedback onPress={onClickPlayer}>
                <Animated.View style={style} />
            </TouchableWithoutFeedback>
        );
    }
}

Player.propTypes = {
    position: PropTypes.object.isRequired,
    previousPosition: PropTypes.object.isRequired,
    selected: PropTypes.bool.isRequired,
    onClickPlayer: PropTypes.func.isRequired
};