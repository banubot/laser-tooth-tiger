import React from 'react';
import Movable from './Moveable';

const W = window.innerWidth;

/**
 * Circles which must be defended
 * Every color circle is a color your laser can be
 */
class Circle extends Movable {
    constructor(props) {
        super(props);
        this.id = props.id;
        this.x = W - this.size;
        this.y = this.id * this.size;
        this.color = null;
    }

    render() {
        return (
            <div id={"circle" + this.id} className="circle">
            </div>
        );
    }

    /**
     * map id to hue based on how many circles 
     */
    setColor() {
        let hue = 360 * (this.id / this.count);
        console.log(hue);
        this.domElem.style.backgroundColor = 
            "hsl(" + hue + ", 100%, 50%";
    }

    componentDidMount() {
        this.domElem = document.getElementById("circle" + this.id);
        this.color = this.setColor();
        super.componentDidMount();
    }
}
export default Circle;