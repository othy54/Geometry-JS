class Square {
    constructor(side) {
        this.side = side;
    }

    get perimeter() {
        return this.calcPerimeter();
    }

    get area() {
        return this.calcArea()
    }

    get howTo() {
        return this.info();
    }

    calcPerimeter() {
        return this.side * 4;
    }

    calcArea() {
        return this.side ** 2;
    }

    info() {
        return 'new Square(side)';
    }
}


class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get perimeter() {
        return this.calcPerimeter();
    }

    get area() {
        return this.calcArea()
    }

    get howTo() {
        return this.info();
    }

    calcPerimeter() {
        return this.radius * 2 * Math.PI;
    }

    calcArea() {
        return (this.radius **2) * Math.PI;
    }

    info() {
        return 'new Circle(radius)';
    }
    
}


class Triangle {
    constructor(side){
        this.side = side;
    }

    get perimeter() {
        return this.calcPerimeter();
    }

    get area() {
        return this.calcArea()
    }

    get howTo() {
        return this.info();
    }

    calcPerimeter() {
        return this.side * 3;
    }

    calcArea() {
        return (Math.sqrt(3)/4) * (this.side**2);
    }

    info() {
        return 'new Triangle(side)'
    }
}


class TriangleRight {

    constructor(base, height, hypotenuse) {
        this.base = base;
        this.height = height;
        this.hypotenuse = hypotenuse;
    }

    get perimeter() {
        return this.calcPerimeter();
    }

    get area() {
        return this.calcArea()
    }

    get howTo() {
        return this.info();
    }

    calcPerimeter() {
        return this.base + this.height + this.hypotenuse;
    }

    calcArea() {
        return (this.base * this.height) / 2
    }

    info() {
        return 'new TriangleRight(base, height, hypotenuse)'
    }
}

class TriangleIso {

    constructor(sides, base) {
        this.sides = sides;
        this.base = base;
    }

    get perimeter() {
        return this.calcPerimeter();
    }

    get area() {
        return this.calcArea()
    }

    get howTo() {
        return this.info();
    }

    calcPerimeter() {
        return (this.sides * 2) + this.base;
    } 

    calcArea() {
        return ((this.base)/2) * Math.sqrt((this.sides**2) - ((this.base**2)/4)); 
    }

    info() {
        return 'new TriangleIso(sides, base)'
    }
}

class Rectangle {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get perimeter() {
        return this.calcPerimeter();
    }

    get area() {
        return this.calcArea()
    }

    get howTo() {
        return this.info();
    }

    calcPerimeter() {
        return (this.width + this.height) * 2;
    } 

    calcArea() {
        return this.width * this.height;
    }

    info() {
        return 'new Rectangle(width, height)'
    }
}

class Parallelogram {
    constructor(width, height, altitude) {
        
    }
}