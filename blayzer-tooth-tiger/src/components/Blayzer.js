import React from 'react';
import Colored from './Colored';

/**
 * Laser beam for shooting mammoths
 */
class Blayzer extends Colored {
    constructor(props) {
        super(props);
        this.id = props.id;
        this.x = props.x - this.size;
        this.y = props.y;
        this.hue = props.hue;
    }

    render() {
        return (
            <div id={"blayzer" + this.id} className="blayzer">
            </div>
        );
    }

    setSize() {
        if (this.domElem !== null) {
            this.domElem.style.width = this.size + "px";
            this.domElem.style.height = this.H / 200 + "px";
        }
    }

    componentDidMount() {
        this.domElem = document.getElementById("blayzer" + this.id);
        super.componentDidMount();
    }
}
export default Blayzer;