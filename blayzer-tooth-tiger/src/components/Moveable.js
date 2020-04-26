import React from 'react';

/**
 * All the game bits which move
 */
class Movable extends React.Component {
    constructor(props) {
        super(props);
        this.W = window.innerWidth;
        this.H = window.innerHeight;
        //all game bits should be the same size
        //which is determined by the number of circles
        this.count = props.count;
        this.size = this.H / this.count;
        //every subclass has its own start position
        this.x = null; 
        this.y = null;
        this.velocity = props.velocity;
    }

    /**
     * nothing should ever leave the screen
     */
    up() {
        this.y -= this.velocity;
        if (this.y < 0) {
            this.y = 0;
        }
    }

    down() {
        this.y += this.velocity;
        if (this.y + this.size > this.H) {
            this.y = this.H - this.size;
        } 
    }

    left() {
        this.x -= this.velocity;
        if (this.x < 0) {
            this.x = 0;
        }
    }

    right() {
        this.x += this.velocity;
        if (this.x + this.size > this.W) {
            this.x = this.W - this.size;
        }
    }

    setPosition() {
        if (this.domElem !== undefined) {
            this.domElem.style.left = this.x + "px";
            this.domElem.style.top = this.y + "px";
        }
    }

    setSize() {
        this.domElem.style.width = this.size + "px";
        this.domElem.style.height = this.size + "px";
    }

    /**
     * Are these things overlapping?
     */
    collision(other) {
        return ((Math.abs(this.x - other.x) < this.size)
            && (Math.abs(this.y - other.y)) < this.size);
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