import React from 'react';
import Circle from './Circle';


const COUNT = 10;

class Gameboard extends React.Component {
    constructor(props) {
        super(props);
        this.circles = []
        this.createCircles();
    }

    render() {
        return (
            <div id="main">
                {this.circles.map(circle => circle)}

            </div>
        );
    }

    createCircles() {
        let i;
        for (i = 0; i < COUNT; i++) {
            this.circles.push(<Circle id={i} count={COUNT}/>)
        }
    }

    //set colour
    componentDidMount() {
 //       document.getElementById("circle" + this.id).style.backgroundColor = "rgba(" + 
    }
}
export default Gameboard;