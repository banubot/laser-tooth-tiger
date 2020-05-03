import React, { Component } from 'react';
import '../Pause.css';


/**
 * Menu to stop game
 */
class Pause extends Component {
  render() {
    return (
      <center id="pause">
        <div id="white">
        </div>
        <audio controls>
          <source src="horse.mp3" type="audio/mpeg"/>
          Your browser does not support the audio element.
        </audio>
        <div className="spin" id="spin1">
          Game by Hannah
        </div>
        <div className="spin" id="spin2">
          Music by Gus
        </div>
        <div className="spin" id="spin3">
          Art by Larissa
        </div>
        <div id="close" class="circle">
          x
        </div>
      </center>
    );
  }
}
export default Pause;