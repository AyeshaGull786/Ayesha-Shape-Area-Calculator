// Descriminated Unions
//---------Create a descriminated union type for different shapes (circle, square, rectangle) and wrte a 
//functionthat calculates the area based on the shape type------------------

interface Circle{
    kind:"Circle";
    radious:number
}
interface Square{
    kind:"Square";
    side:number
}
interface Rectangle{
    kind:"Rectangle";
    width:number;
    height:number;
}
type Shape = Circle|Square|Rectangle;
function calculateArea(shape:Shape){
    switch(shape.kind){
        case "Circle":
            return Math.PI*shape.radious**2;
        case "Square":
            return shape.side**2;
            case "Rectangle":
                return shape.width*shape.height;
    }
}
const Circle:Shape = {
    kind:"Circle",
    radious:5,
};
const Square:Shape = {
    kind:'Square',
    side: 4,
};
const Rectangle:Shape = {
    kind: 'Rectangle',
    width: 3,
    height: 6,
};
console.log("The total area of circle is " + calculateArea(Circle));
console.log("The total area of square is " + calculateArea(Square));
console.log("The total area of rectangle is " + calculateArea(Rectangle));