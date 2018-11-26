import React, { Component } from 'react';
import '../../css/Master.css';

import MasterControls from './MasterControls';
import Browser from './Browser';


class Master extends Component {
  render() {
    return (
      <div className="Master"
       style={{display: 'flex'}}
      >
        <MasterControls
          masterPlaying={this.props.masterPlaying}
          changeState={this.props.changeState}
          crossFade={this.props.crossFade}
          changeState={this.props.changeState}
          masterBpm={this.props.masterBpm}
          changeState={this.props.changeState}
        />

        <Browser
          // App state
          allSongs={this.props.allSongs}
          browserFilterQuery={this.props.browserFilterQuery}
          sortBy={this.props.sortBy}
          reverseSort={this.props.reverseSort}

          // methods to change App state
          pushToQueue={this.props.pushToQueue}
          changeState={this.props.changeState}
        />
      </div>
    );
  }
}

export default Master;
