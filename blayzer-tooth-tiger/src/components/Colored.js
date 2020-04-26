import React from 'react';
import Movable from './Moveable';

/**
 * Circles which must be defended
 * Every color circle is a color your laser can be
 */
class Colored extends Movable {
    constructor(props) {
        super(props);
        this.hue = props.hue;
    }

    /**
     * map id to hue based on how many circles 
     */
    setColor() { 
        if (this.domElem !== null) {
            console.log("setting hue " + this.hue);
            this.domElem.style.backgroundColor = 
                "hsl(" + this.hue + ", 100%, 50%";
        }
    }

    componentDidMount() {
        this.color = this.setColor();
        super.componentDidMount();
    }
}
export default Colored;