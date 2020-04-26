import React from 'react';
import Movable from './Moveable';

/**
 * Tiger which moves by arrow keys and fires lasers
 */
class Tiger extends Movable {
    constructor(props) {
        super(props);
        this.x = this.W - this.size * 3;
        this.y = this.H / 2;
        this.onKey = this.onKey.bind(this);
        document.addEventListener('keydown', this.onKey); 
    }

    render() {
        return (
            <img src="tiger.png" id="tiger" alt="tiger"/>
        );
    }

    onKey(e) {    
        if (e.code === "ArrowUp") {
            this.up();
        } else if (e.code === "ArrowDown") {
            this.down();
        } else if (e.code === "ArrowLeft") {
            this.left();
        } else if (e.code === "ArrowRight") {
            this.right();
        } else {
            return;
        }
        this.setPosition();
     }

    componentDidMount() {
        this.domElem = document.getElementById("tiger");
        super.componentDidMount();
    }
}
export default Tiger;