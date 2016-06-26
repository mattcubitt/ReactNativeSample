export const MOVE_PLAYER = 'MOVE_PLAYER';

export default function(position) {
    return {
        type: MOVE_PLAYER,
        position
    }
}