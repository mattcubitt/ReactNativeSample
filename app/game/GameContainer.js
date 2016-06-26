import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Pitch from '../pitch/Pitch';
import Player from '../player/Player';
import movePlayerAction from '../player/movePlayerAction';

export default class GameContainer extends Component {
    onClickPitch(event) {
        const { dispatch } = this.props;
        const touches = event.touchHistory.touchBank;

        const firstTouch = touches[0];
        const position = {
            x: firstTouch.currentPageX,
            y: firstTouch.currentPageY
        };

        dispatch(movePlayerAction(position));
    }

    render() {
        return (
            <Pitch onClickPitch={this.onClickPitch.bind(this)}>
                <Player {...this.props}/>
            </Pitch>
        );
    }
}

GameContainer.propTypes = {
    player: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        player: state.player
    }
}

export default connect(mapStateToProps)(GameContainer);