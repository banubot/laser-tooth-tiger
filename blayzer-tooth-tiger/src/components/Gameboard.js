import React from 'react';
import Circle from './Circle';
import Tiger from './Tiger';
import Blayzer from './Blayzer';


const COUNT = 20;
const BASE_V = 5;

/**
 * main game flow
 */
class Gameboard extends React.Component {
    constructor(props) {
        super(props);
        this.circles = [];
        this.state = {
            blayzers: []
        };
        this.createCircles();
        this.tiger = new Tiger({velocity: BASE_V, count: COUNT});
        this.onKey = this.onKey.bind(this);
        document.addEventListener('keydown', this.onKey); 
    }

    render() {
        return (
            <div id="main">
                {this.circles.map(circle => circle.render())}
                {this.tiger.render()}
                {this.state.blayzers.map(blayzer => blayzer.render())}
            </div>
        );
    }

    onKey(e) {
        if (e.code === "Enter") {
            console.log("enter");
            //maybe have to do a state thing
            let blayzer = new Blayzer({ 
                id: this.state.blayzers.length, 
                count: COUNT, 
                x: this.tiger.x, 
                y: this.tiger.y,
                hue: this.getNewHue()
            });
            this.state.blayzers.push(blayzer);
            this.setState({blayzers: this.state.blayzers});
            blayzer.componentDidMount();
        }
    }

    getNewHue() {
        var randint = Math.floor(Math.random() * this.circles.length); 
        return this.circles[randint].hue;
    }

    createCircles() {
        let i;
        for (i = 0; i < COUNT; i++) {
            this.circles.push(new Circle({id: i, count: COUNT}));
        }
    }

    componentDidMount() {
        this.tiger.componentDidMount();
        this.circles.forEach(circle => circle.componentDidMount());
    }
}
export default Gameboard;