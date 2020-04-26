import React from 'react';

const H = window.innerHeight;

/**
 * All the game bits which move
 */
class Movable extends React.Component {
    constructor(props) {
        super(props);
        //all game bits should be the same size
        //which is determined by the number of circles
        this.count = props.count;
        this.size = H / this.count;
        //every subclass has its own start position
        this.x = null; 
        this.y = null;
        this.domElem = null;
        this.velocity = props.velocity;
    }

    up() {
        this.y -= this.velocity;
    }

    down() {
        this.y += this.velocity;
    }

    left() {
        this.x -= this.velocity;
    }

    right() {
        this.x += this.velocity;
    }

    setPosition() {
        this.domElem.style.left = this.x + "px";
        this.domElem.style.top = this.y + "px";
    }

    setSize() {
        this.domElem.style.width = this.size + "px";
        this.domElem.style.height = this.size + "px";
    }
    
    /**
     * call after sub class else domElem is null
     */
    componentDidMount() {
        this.setPosition();
        this.setSize();
    }
}
export default Movable;