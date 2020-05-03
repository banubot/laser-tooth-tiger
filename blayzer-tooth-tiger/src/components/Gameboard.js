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
        this.bkg = this.props.match.params.bkg;
        this.circles = [];
        this.state = {
            blayzers: []
        };
        this.timer = 0;
        this.score = 0;
        this.createCircles();
        this.tiger = new Tiger({velocity: BASE_V, count: COUNT});
        this.onKey = this.onKey.bind(this);
        document.addEventListener('keydown', this.onKey); 
        setInterval(() => this.update(), 50);
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
        if (e.code === "Space") {
            //maybe have to do a state thing
            let blayzer = new Blayzer({ 
                id: this.state.blayzers.length, 
                count: COUNT, 
                x: this.tiger.x, 
                y: this.tiger.y,
                hue: this.getNewHue(),
                velocity: BASE_V
            });
            let newBlayz = this.state.blayzers;
            newBlayz.push(blayzer);
            this.state.blayzers.forEach((b) =>
            console.log(b + "bl"));
            this.setState({blayzers: newBlayz});
            blayzer.componentDidMount();
        }
    }

    update() {
        let popCount = 0;
        this.state.blayzers.forEach((blayzer) => {
            blayzer.left();
            if(blayzer)
            if (blayzer.x === 0) {
                
              popCount++;
            } else {
                blayzer.setPosition();
            }
        });
        let i;
        console.log(popCount + "pop");
        for (i = 0; i < popCount; i++) {
            console.log(i + "i");
            let blay = this.state.blayzers.shift();
                if(blay.domElem !== null) {
                    blay.domElem.remove();
                } 
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
        document.getElementById("main").style.backgroundImage = "url('../" + this.bkg + "')";
        this.circles.forEach(circle => circle.componentDidMount());
    }
}
export default Gameboard;