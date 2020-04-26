import React from 'react';
import Movable from './Moveable';

/**
 * Mammoth which is rando generated and 
 * wants to eat your colors
 */
class Mammoth extends Movable {
    constructor(props) {
        super(props);
        this.x = 0;
        this.y = props.y;
        this.id = props.id
    }

    render() {
        return (
            <img src="mammoth.png" id={"mammoth" + id} alt="mammoth"/>
        );
    }

    evaporate() {
        this.domElem.src = "sparkle.png";
    }

    componentDidMount() {
        this.domElem = document.getElementById("mammoth" + this.id);
        super.componentDidMount();
    }
}
export default Mammoth;