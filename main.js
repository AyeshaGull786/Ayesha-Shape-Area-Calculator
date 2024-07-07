// Descriminated Unions
//---------Create a descriminated union type for different shapes (circle, square, rectangle) and wrte a 
//functionthat calculates the area based on the shape type------------------
function calculateArea(shape) {
    switch (shape.kind) {
        case "Circle":
            return Math.PI * Math.pow(shape.radious, 2);
        case "Square":
            return Math.pow(shape.side, 2);
        case "Rectangle":
            return shape.width * shape.height;
    }
}
var Circle = {
    kind: "Circle",
    radious: 5,
};
var Square = {
    kind: 'Square',
    side: 4,
};
var Rectangle = {
    kind: 'Rectangle',
    width: 3,
    height: 6,
};
console.log("The total area of circle is " + calculateArea(Circle));
console.log("The total area of square is " + calculateArea(Square));
console.log("The total area of rectangle is " + calculateArea(Rectangle));
