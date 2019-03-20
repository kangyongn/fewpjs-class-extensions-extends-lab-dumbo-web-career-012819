// Your code here
class Polygon {
  constructor(arr){
    this.side = arr;
  }

  get getCount() {
    return this.side.length
  }

  get perimeter() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return this.side.reduce(reducer);
  }
}

class Triangle extends Polygon {
  get isValid() {
    for(let side of this.side) {
      if(this.perimeter - side < side) {
        return false;
      }
    }
    return true;
  }
}

class Square extends Polygon {
  get isValid() {
    if(this.perimeter/this.side[0] === 4) {
      return true;
    } else {
      return false;
    }
  }

  get area() {
    return Math.pow(this.side[0], 2);
  }
}
