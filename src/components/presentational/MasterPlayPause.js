import React from 'react';

const MasterPlayPause = ({leftPlaying, rightPlaying, setPlaying, channels, queues, setChannelState, shiftFromQueue}) => {

  const masterPlaying = () => {
    return leftPlaying || rightPlaying
  }

  const handleClick = () => {
    if (masterPlaying()) {
      setPlaying('left', false)
      setPlaying('right', false)
    }
    else {
      ['left', 'right'].forEach(s => {
        if (channels[s].currentSong) {
          console.log('hi');
          setPlaying(s, true)
        }
        else if (queues[s][0]) {
          setChannelState(s, 'playing', true)
          const currentSong = queues[s][0]
          shiftFromQueue(s)
          setChannelState(s, 'currentSong', currentSong)
        }
      })
    }
  }

  return (
    <div className="MasterPlayPause">
      <button
        onClick={handleClick}
      >
        {masterPlaying() ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}

export default MasterPlayPause;
