export const SELECT_PLAYER = 'SELECT_PLAYER';

export default function(playerId) {
    return {
        type: SELECT_PLAYER,
        playerId
    }
}