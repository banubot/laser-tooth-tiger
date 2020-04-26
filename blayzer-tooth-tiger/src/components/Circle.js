import React from 'react';

const H = window.innerHeight;
const W = window.innerWidth;

/**
 * Circles which must be defended
 * Every color circle is a color your laser can be
 */
class Circle extends React.Component {
    constructor(props) {
        super(props);
        this.id = props.id;
        this.count = props.count;
        this.size = H / this.count;
        this.x = W - this.size;
        this.y = this.id * this.size;
        this.color = null;
        this.domElem = null;
    }

    render() {
        return (
            <div id={"circle" + this.id} className="circle">
            </div>
        );
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
        this.setPosition();
        this.color = this.setColor();
        this.setSize();
    }
}
export default Circle;