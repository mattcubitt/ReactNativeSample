import { MOVE_PLAYER } from './movePlayerAction';
import { SELECT_PLAYER } from './selectPlayerAction';

const initialState = [{
    id: 1,
    position: {
        x: 0,
        y: 0
    },
    selected: true
}, {
    id: 2,
    position: {
        x: 300,
        y: 300
    }
}];

export default function(state = initialState, action) {
    switch(action.type) {
        case MOVE_PLAYER:
            return state.map(player => {
                if(player.selected) {
                    return {
                        ...player,
                        previousPosition: player.position,
                        position: action.position
                    }
                }

                return player;
            });
        case SELECT_PLAYER:
            return state.map(player => {
                return {
                    ...player,
                    previousPosition: undefined,
                    selected: player.id === action.playerId
                };
            });
        default:
            return state;
    }
}