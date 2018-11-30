const defaultChannel = {
  // currentSong: null,
  currentSong: {
    id: 116,
    title: "Dead Island",
    artist: "Kitty",
    bpm: 117,
    url: "http://localhost:3001/DeadIsland.mp3",
  },
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

  switch (action.type) {
    case 'SET_CHANNEL_STATE':
      return ({...state,
        [action.side]: {...state[action.side],
          [action.key]: action.newValue
        }
      })

    case 'SET_PLAYING':
      return ({...state,
        [action.side]: {...state[action.side],
          playing: action.playing
        }
      })

    default:
      return state
  }
}

export default channels
