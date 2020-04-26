import React from 'react';
import Colored from './Colored';

/**
 * Circles which must be defended
 * Every color circle is a color your laser can be
 */
class Circle extends Colored {
    constructor(props) {
        super(props);
        this.id = props.id;
        this.x = this.W - this.size;
        this.y = this.id * this.size;
        //rainbow!!!
        this.hue = 360 * (this.id / this.count);
    }

    render() {
        return (
            <div id={"circle" + this.id} className="circle">
            </div>
        );
    }

    componentDidMount() {
        this.domElem = document.getElementById("circle" + this.id);
        super.componentDidMount();
    }
}
export default Circle;