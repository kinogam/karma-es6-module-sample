import service from './service';

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }

    getSomething() {
        return `hello ${service.msg}`;
    }
}

export default Polygon;