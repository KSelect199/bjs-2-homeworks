function parseCount(value) {
  if (!Number.parseFloat(value)) {
    throw new Error("Невалидное значение");
  } else {
    return Number.parseFloat(value);
  }
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    if (a + b < c || a + c < b || c + b < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }
  get area() {
    let halfPerimetr = 0.5 * (this.a + this.b + this.c);

    return Number(
      Math.sqrt(
        halfPerimetr *
          (halfPerimetr - this.a) *
          (halfPerimetr - this.b) *
          (halfPerimetr - this.c)
      ).toFixed(3)
    );
  }
}

function getTriangle(a, b, c) {
  try {
    let triangle = new Triangle(a, b, c);
    return triangle;
  } catch (error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
