import React from 'react';
import Circle from './Circle';
import Tiger from './Tiger';


const COUNT = 20;
const BASE_V = 5;

/**
 * main game flow
 */
class Gameboard extends React.Component {
    constructor(props) {
        super(props);
        this.circles = []
        this.createCircles();
        this.tiger = new Tiger({velocity: BASE_V, count: COUNT});
       }

    render() {
        return (
            <div id="main">
                {this.circles.map(circle => circle)}
                {this.tiger.render()}
            </div>
        );
    }

    createCircles() {
        let i;
        for (i = 0; i < COUNT; i++) {
            this.circles.push(<Circle id={i} count={COUNT}/>)
        }
    }

    componentDidMount() {
        this.tiger.componentDidMount();
    }
}
export default Gameboard;