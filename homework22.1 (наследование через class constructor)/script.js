// Задача 22. через prototype
//  //  * Создать функцию конструктор Figure, которая принимает параметром name, a, h,
//  * где a — сторона фигуры, h — высота фигуры.
//  * класс Figure содержит метод displayData, который выводит в логе название фигуры
//  *
//  * Cоздайте функцию конструктор Triangle, которая наследует все свойства от конструктора Figure.
//  * Triangle принимает на вход name, a, h
//  * Triangle содержит метод подсчета площади треугольника
//  * Triangle также содержит метод displayData, но помимо названия фигуры выводит информацию о площади
//  *
//  * Cоздайте функцию конструктор Rhombus, которая наследует все свойства от конструктора Figure.
//  * Rhombus принимает на вход name, a, h
//  * Rhombus содержит метод подсчета площади квадрата
//  * Rhombus также содержит метод displayData, но помимо названия фигуры выводит информацию о площади квадрата
//  *
//  * создайте переменную figures, при помощи которой выведите на экран общую сумму площадей всех фигур
//  */

class Figure {
    constructor(name, a, h) {
        this.name = name;
        this.a = a;
        this.h = h;
    }
    displayData() {
        console.log(this.name);
    }
}

class Triangle extends Figure {
    _area = null;

    constructor(name, a, h) {
        super(name, a, h);
    }
    findArea() {
        this._area = (this.a * this.h) / 2;
    }
    getArea() {
        return this._area;
    }
    displayData() {
        super.displayData();
        console.log('area is:', this._area);
    }
}

class Rhombus extends Figure {
    _area = null;

    constructor(name, a, h) {
        super(name, a, h);
    }
    findArea() {
        this._area = (this.a * this.h);
    }
    getArea() {
        return this._area;
    }

    displayData() {
        super.displayData();
        console.log('area is:', this._area);
    }
}



const triangleS = new Triangle("triangleS", 5, 5);
const triangleM = new Triangle("triangleM", 15, 5);
const triangleL = new Triangle("triangleL", 25, 15);

triangleS.findArea();
triangleM.findArea();
triangleL.findArea();

triangleS.displayData();
triangleM.displayData();
triangleL.displayData();

const rhombusS = new Rhombus("rhombus", 5, 5);
const rhombusM = new Rhombus("rhombus", 15, 5);
const rhombusL = new Rhombus("rhombus", 25, 15);

rhombusS.findArea();
rhombusM.findArea();
rhombusL.findArea();
rhombusS.displayData();
rhombusM.displayData();
rhombusL.displayData();

const figure = [
    triangleS.getArea(),
    triangleM.getArea(),
    triangleL.getArea(),
    rhombusS.getArea(),
    rhombusM.getArea(),
    rhombusL.getArea(),
];

let count = 0;
figure.forEach(function (value) {
    count += value;
});
console.log(count);
