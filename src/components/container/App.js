import React, { Component } from 'react';
import '../../css/App.css';
import Channels from './Channels';
import Master from './Master';

const apiUrl = 'http://localhost:3000'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allSongs: [],
      crossFade: 0,
      bpm: 0.01,
      volume: 1,

      queues: {
        left: [],
        right: []
      }
    }
  }

  render() {
    return (
      <div className="App">
      App
        <Channels
          queues={this.state.queues}
          crossFade={this.state.crossFade}

          popFromQueue={this.popFromQueue}
          removeFromQueue={this.removeFromQueue}
        />
        <Master
          allSongs={this.state.allSongs}
          crossFade={this.state.crossFade}
          bpm={this.state.bpm}

          changeState={this.changeState}
          pushToQueue={this.pushToQueue}
        />
      </div>
    );
  }

  componentDidMount() {
    this.fetchAllSongs()
    // this.addKeyboardShortcuts()
  }

  ///////////////////////////

  changeState = (newStateObject) => {
    this.setState(newStateObject)
  }

  setNewQueues = (side, newQueue) => {
    const newQueues = {
      ...this.state.queues
    }
    newQueues[side] = newQueue

    this.setState({
      queues: newQueues
    })
  }

  pushToQueue = (side, song) => {
    const newQueue = [...this.state.queues[side]]
    if (!newQueue.includes(song)) {
      newQueue.push(song)

      this.setNewQueues(side, newQueue)
    }
  }

  popFromQueue = (side) => {
    const newQueue = [...this.state.queues[side]]
    const currentSong = newQueue.pop()

    this.setNewQueues(side, newQueue)

    return currentSong
  }

  removeFromQueue = (side, song) => {
    const oldQueue = [...this.state.queues[side]]
    const newQueue = oldQueue.filter(s => s !== song)

    this.setNewQueues(side, newQueue)
  }

  ///////////////////////////

  fetchAllSongs = () => {
    fetch(`${apiUrl}/songs`)
    .then(r => r.json())
    .then(r => {
      this.setState({
        allSongs: r
      })
    })
  }
  //
  // addKeyboardShortcuts = () => {
  //   window.addEventListener('keydown', (e) => {
  //     let newStateValue
  //     switch (e.key) {
  //       case 'v':
  //         newStateValue = this.state.crossFade - .1
  //         if (newStateValue >= -1) {
  //           this.setState({
  //             crossFade: newStateValue
  //           })
  //         }
  //         break;
  //       case 'n':
  //         let newStateValue = this.state.crossFade + .1
  //         if (newStateValue <= 1) {
  //           this.setState({
  //             crossFade: newStateValue
  //           })
  //         }
  //         break;
  //       default:
  //     }
  //   })
  // }
}

export default App;
