// Your code here
// Polygon
// 1) has a Polygon class
// 2) Polygon has a countSides getter method that returns the number of sides of the polygon
// 3) Polygon has a perimeter getter that calculates perimeter
class Polygon {
    constructor(sides) {
        this.sides = sides;
    };

    get countSides() {
        return this.sides.length;
    };

    get perimeter() {
        return this.sides.reduce((sum, side) => sum + side, 0);
    };
};
// let square = new Polygon([5, 5, 5, 5])
// square.perimeter()

// Triangle
// 1) has a Triangle class
// 2) checks for valid triangle
// 3) has a perimeter getter inherited from Polygon
class Triangle extends Polygon {

    get isValid() {
        if (!Array.isArray(this.sides)) return;
        if (this.countSides !== 3) return;
        let side1 = this.sides[0];
        let side2 = this.sides[1];
        let side3 = this.sides[2];
        return ((side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2))
    };
};

// Square
// 2) has a Square class
// 3) has a perimeter getter inherited from Polygon
// 4) calculates the area
// 5) checks for valid square
class Square extends Polygon {

    get isValid() {
        if (!Array.isArray(this.sides)) return;
        if (this.countSides !== 4) return;
        let side1 = this.sides[0];
        let side2 = this.sides[1];
        let side3 = this.sides[2];
        let side4 = this.sides[3];
        return ((side1 === side2) && (side2 === side3) && (side3 === side4))
    }

    get area() {
        if (!Array.isArray(this.sides)) return;
        if (this.countSides !== 4) return;
        return this.sides[0] * this.sides[0];
    };
};