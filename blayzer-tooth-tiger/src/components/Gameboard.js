import React from 'react';
import Circle from './Circle';
import Tiger from './Tiger';
import Blayzer from './Blayzer';
import Pause from './Pause';


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
        this.paused = false;
        this.timer = 0;
        this.score = 0;
        this.createCircles();
        this.tiger = new Tiger({velocity: BASE_V, count: COUNT});
        this.onKey = this.onKey.bind(this);
        this.unpause = this.unpause.bind(this);
        document.addEventListener('keydown', this.onKey); 
        setInterval(() => this.update(), 50);
    }

    render() {
        return (
            <div id="main">
                <Pause/>
                {this.circles.map(circle => circle.render())}
                {this.tiger.render()}
                {this.state.blayzers.map(blayzer => blayzer.render())}
            </div>
        );
    }

    onKey(e) {
        if (!this.paused) {
            //space to shoot
            if (e.code === "Space") {
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
                this.setState({blayzers: newBlayz}));
                blayzer.componentDidMount();
            } else if (e.code !== "ArrowUp" && e.code !== "ArrowDown" &&
                e.code !== "ArrowLeft" && e.code !== "ArrowRight") {
                //if you press a key and aren't trying to move, pause game
                console.log("Pausing...")
                this.pause();
            }
        }
    }

    update() {
        if (!this.paused) {
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
            for (i = 0; i < popCount; i++) {
                let blay = this.state.blayzers.shift();
                    if(blay.domElem !== null) {
                        blay.domElem.remove();
                    } 
            }
        }
    }

    //randomly pick color for laser based on remain circles
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

    pause() {
        console.log("Pause");
        document.getElementById("pause").style.display = "initial";
        this.paused = true;
        this.tiger.pawzed = true;
    }

    unpause() {
        console.log("Unpause")
        document.getElementById("pause").style.display = "none";
        this.paused = false;
        this.tiger.pawzed = false;
    }

    componentDidMount() {
        this.tiger.componentDidMount();
        document.getElementById("main").style.backgroundImage = "url('../" + this.bkg + "')";
        this.circles.forEach(circle => circle.componentDidMount());
        document.getElementById("close").onclick = this.unpause;
        this.unpause();
    }
}
export default Gameboard;