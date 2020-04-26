import React from 'react';

const H = window.innerHeight;
const W = window.innerWidth;

class Circle extends React.Component {
    constructor(props) {
        super(props);
        console.log(H);
        console.log(W);

        this.id = props.id;
        this.count = props.count;
        this.size = H / this.count;
        console.log(this.size);

        this.x = W - this.size;
        this.y = this.id * this.size;
        console.log(this.x + " " + this.y);

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

    setColor() {
        this.domElem.style.backgroundColor = "black";
    }

    //set colour
    componentDidMount() {
        this.domElem = document.getElementById("circle" + this.id);
        this.setPosition();
        this.setColor();
        this.setSize();
        //       document.getElementById("circle" + this.id).style.backgroundColor = "rgba(" + 
    }
}
export default Circle;