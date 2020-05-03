import React, { Component } from 'react';

/**
 * Start Menu
 */
class Home extends Component {
    render() {
        let names = ["bkg1", "bkg2", "bkg3", "bkg4", "bkg5"];
        return (
          <center id="home">
              <h1>
                Laser Tooth Tiger
              </h1>
             
              <p>
                Defend your colors from the mammoths!
                <br/>
                Spacebar : fire laser,
                Arrows : move
              </p>
              <h2>
                  Click a background to start!
              </h2>
              {names.map((name) =>
                <a href = {"/play/" + name}>
                  <img src={name} className="bkg" alt="bkg"/>
                </a>
              )}
          </center>
        );
    }
}
export default Home;