import React, { Component } from 'react';

import { connect } from 'react-redux'
import { setSideQueue } from '../../actions'

import '../../css/Queue.css';
import QueueSong from '../presentational/QueueSong';
const uuid = require('uuid/v4');

class Queue extends Component {

  render() {
    console.log('rendering');
    return (
      <div className="Queue">
        <ul>
          {this.renderQueue()}
        </ul>
      </div>
    );
  }

  ////////////////

  renderQueue = () => {
    return this.props.queue.map(s => {
      return (
        <QueueSong
          song={s}
          key={uuid()}
          removeFromQueue={this.removeFromQueue}
          changeCurrentSong={this.props.changeCurrentSong}
        />
      )
    })
  }

  removeFromQueue = (song) => {
    const side = this.props.side
    const newQueue = [...this.props.queue].filter(s => s !== song)

    this.props.setSideQueue(side, newQueue)
  }

  // changeCurrentSong = (song) => {
  //   console.log(`changing song to ${song.title}. need to write function in Queue`);
  // }
}

const mapStateToProps = (state, ownProps) => ({
  queue: state.queues[ownProps.side]
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  setSideQueue: (side, queue) => dispatch(setSideQueue(side, queue))
})

const connectedQueue = connect(
  mapStateToProps,
  mapDispatchToProps
)(Queue)


export default connectedQueue;
