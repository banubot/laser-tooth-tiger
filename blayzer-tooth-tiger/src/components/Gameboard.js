import React from 'react';
import Circle from './Circle';
import Tiger from './Tiger';
import Blayzer from './Blayzer';
import Pause from './Pause';
import Mammoth from './Mammoth';


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
            blayzers: [],
            mammoths: []
        };
        this.paused = false;
        this.timer = 0;
        this.score = 0;
        this.mammothSpawnRate = 100;
        //inversely proportional to spawn amount
        this.mammothSpeedOffset = -4;
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
                {this.state.mammoths.map(mammoth => mammoth.render())}
            </div>
        );
    }

    onKey(e) {
        if (!this.paused) {
            //space to shoot
            if (e.code === "Space") {
                this.makeBlayzer();
            } else if (e.code !== "ArrowUp" && e.code !== "ArrowDown" &&
                e.code !== "ArrowLeft" && e.code !== "ArrowRight") {
                //if you press a key and aren't trying to move, pause game
                this.pause();
            }
        }
    }

    makeBlayzer() {
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
        this.setState({blayzers: newBlayz});
        blayzer.componentDidMount();
    }

    makeMammoth() {
        let mammoth = new Mammoth({
            id: this.state.mammoths.length,
            count: COUNT,
            y: this.randomHeight(),
            velocity: BASE_V + this.mammothSpeedOffset
        });
        let newMamz = this.state.mammoths;
        newMamz.push(mammoth);
        this.setState({mammoths: newMamz});
        mammoth.componentDidMount();
    }

    randomHeight() {
        console.log("RAND" + Math.floor(Math.random() * (this.tiger.H - this.tiger.size)))
        return Math.floor(Math.random() * (this.tiger.H - this.tiger.size));
    }

    update() {
        if (!this.paused) {
            this.timer++;
            this.updateMammoths();
            this.updateBlayzers();
        }
    }

    updateMammoths() {
        if (this.timer % this.mammothSpawnRate === 0) {
            console.log("spawn");
            this.makeMammoth();
        }
        //move all the mammoths right and delete off screen
        let newMamz = [];
        this.state.mammoths.forEach((mammoth) => {
            if (mammoth.x === mammoth.W) {
                mammoth.domElem.remove();
            } else if (mammoth.domElem != null) {
                mammoth.right();
                mammoth.setPosition();
                newMamz.push(mammoth);
            }
        });
        this.setState({mammoths: newMamz})
    }

    //move all blayzers left and delete off screen
    updateBlayzers() {
        let newBlayzers = [];
        this.state.blayzers.forEach((blayzer) => {
            if (blayzer.x === 0) {
                blayzer.domElem.remove();
            } else if (blayzer.domElem != null) {
                blayzer.left();
                blayzer.setPosition();
                newBlayzers.push(blayzer);
            }
        });
        this.setState({blayzers: newBlayzers})
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