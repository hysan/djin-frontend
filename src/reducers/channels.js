const defaultChannel = {
  currentSong: null,
  playing: false,

  volume: .5,
  bpmFactor: 1,

  calculatedVolume: .5,
  calculatedAudioRate: 1
}

const defaultChannels = {
  left: {...defaultChannel},
  right: {...defaultChannel}
}

const channels = (state = defaultChannels, action) => {

  function returnChannelState(side, key, newValue) {
    const newChannel = {...state[side]}
    newChannel[key] = newValue

    const newState = {...state}
    newState[side] = newChannel
    return newState
  }

  switch (action.type) {
    case 'SET_CHANNEL_STATE':
      const side = action.side
      const key = action.key
      const newValue = action.newValue

      return returnChannelState(side, key, newValue)

    case 'PLAY_ALL':
      const play = action.play
      const newLeft = {...state.left}
      const newRight = {...state.right}
      newLeft.playing = play
      newRight.playing = play

      return {left: newLeft, right: newRight}

    default:
      return state
  }
}

export default channels
