import './css.css';
import React from 'react';

class Controls extends React.Component {

  constructor(props) {
    super(props);
    this.populateCosmos = this.populateCosmos.bind(this);
  }

  populateCosmos() {
    this.props.populateCosmos();
    this.props.autoPlayMusic();
  }

  clearCosmos() {
    this.props.clearCosmos();
  }

  play() {
    this.props.play();
  }

  pause() {
    this.props.pause();
  }

  step() {
    this.props.step();
  }

  switchMusic() {
    this.props.switchMusic();
  }

  buttonSwitch() {
    if ( this.props.dreaming ) {
      return (<button className="right-button" onClick={() => this.pause()}>Pause Dream</button>)
    } else {
      return (<button className="right-button" onClick={() => this.play()}>Dare to Dream</button>)
    }
  }

  render() {
    return (
      <div className="buttons">
        <div className="left-buttons">
          <button className="button" onClick={() => this.switchMusic()}>Music</button>
          <button className="button" onClick={() => this.populateCosmos()}>Populate Cosmos</button>
          <button className="button" onClick={() => this.clearCosmos()}>Clear Cosmos</button>
          <button className="button" onClick={() => this.step()}>Next Generation</button>
        </div>
        <div className="right-buttons">
          {this.buttonSwitch()}
        </div>
      </div>
      )
  }

}

export default Controls;