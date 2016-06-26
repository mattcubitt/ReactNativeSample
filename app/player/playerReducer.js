import { MOVE_PLAYER } from './movePlayerAction';

const initialState = {
    previousPosition: {
        x: 0,
        y: 0
    },
    position: {
        x: 0,
        y: 0
    }
};

export default function(state = initialState, action) {
    console.log('here');
    switch(action.type) {
        case MOVE_PLAYER:
            return {
                previousPosition: state.position,
                position: action.position
            };
        default:
            return state;
    }
}