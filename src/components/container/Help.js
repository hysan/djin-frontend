import React, { Component } from 'react';
import Info from '../presentational/Info';
import addKeyboardShortcutsHelp from '../KeyboardShortcutsHelp';

class Help extends Component {
  state = {
    shown: false
  }

  render() {
    this.setInfoVisibility()

    return (
      <div className="Help">
      <button
      className='help'
      onClick={this.handleClick}
      >
        ?
      </button>

      <Info />

      </div>
    );
  }

  componentDidMount() {
    const button = document.querySelector('.help')
    const info = document.querySelector('.Info')

    document.addEventListener('click', (e) => {
      if (this.state.shown &&
        e.target !== info &&
        e.target !== button &&
        e.target.parentElement !== info &&
        e.target.parentElement !== button &&
        e.target.parentElement.parentElement !== info &&
        e.target.parentElement.parentElement !== button
      ) {
        this.setState({
          shown: false
        })
      }
    })
    document.addEventListener('keydown', (e) => {
      if (e.key !== ' ') {
        this.setState({
          shown: false
        })
      }
    })

    addKeyboardShortcutsHelp.bind(this)()
  }

  ///////////////////

  setInfoVisibility = () => {
    const button = document.querySelector('.help')
    const info = document.querySelector('.Info')

    if (button && info) {
      if (this.state.shown) {
        button.innerText = 'x'
        info.classList.remove('hidden')
      }
      else {
        button.innerText = '?'
        info.classList.add('hidden')
      }
    }
  }
  handleClick = (e) => {
    if (e) {
      e.preventDefault()
    }
    if (this.state.shown) {
      this.setState({
        shown: false
      })
    }
    else {
      this.setState({
        shown: true
      })
    }
  }
}

export default Help;