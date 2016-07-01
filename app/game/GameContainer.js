import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Pitch from '../pitch/Pitch'
import Player from '../player/Player'
import movePlayerAction from '../player/movePlayerAction'
import selectPlayerAction from '../player/selectPlayerAction'

export default class GameContainer extends Component {
    render() {
        const { players, onClickPlayer } = this.props;

        return (
            <Pitch {...this.props}>
                {
                    players.map(player => {
                        player.onClickPlayer = () => onClickPlayer(player.id);
                        return <Player key={player.id} {...player}/>
                    })
                }
            </Pitch>
        );
    }
}

GameContainer.propTypes = {
    players: PropTypes.array.isRequired,
    onClickPitch: PropTypes.func.isRequired,
    onClickPlayer: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        players: state.players
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClickPitch: (event) => {
            const touches = event.touchHistory.touchBank;

            const firstTouch = touches[0];
            const position = {
                x: firstTouch.currentPageX,
                y: firstTouch.currentPageY
            };

            dispatch(movePlayerAction(position));
        },
        onClickPlayer: (playerId) => dispatch(selectPlayerAction(playerId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);