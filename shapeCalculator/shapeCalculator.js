import { LightningElement, track } from 'lwc';

export default class ShapeCalculator extends LightningElement {

@track currentOutput;
width;
length;
side;
diagonal1;
diagonal2;

sideChangeHandler(event)
{
    this.side = event.target.value;
}

widthChangeHandler(event)
{
    this.width = event.target.value;
}

lengthChangeHandler(event)
{
    this.length = event.target.value;
}

diagonal1ChangeHandler(event)
{
    this.diagonal1 = event.target.value;
}

diagonal2ChangeHandler(event)
{
    this.diagonal2 = event.target.value;
}

calculateSqAreaHandler(){
    const s = parseInt(this.side);
    this.currentOutput = 'Area of the square is: ' +(s*s);
}

calculateRectAreaHandler()
{
    const w = parseInt(this.width);
    const l = parseInt(this.length);
    this.currentOutput = 'Area of rectangle is: ' +(w*l);
}

calculateRhAreaHandler(){
    const d1 = parseInt(this.diagonal1);
    const d2 = parseInt(this.diagonal2);
    this.currentOutput = 'Area of rhombus is: ' +(d1*d2)/2;
}

}