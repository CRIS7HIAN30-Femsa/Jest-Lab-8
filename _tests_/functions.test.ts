import { capitalize, multiply, isEven, getStringLength } from "../functions";

test("capitalize function capitalizes the first letter of a word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("multiply function multiplies two numbers correctly", () => {
  expect(multiply(2, 3)).toBe(6);
});

// Add more test cases for the other functions
//Comprobaciones de Jest para mis funciones
test("regresa true si es par", () => {
  expect(isEven(2)).toBe(true);
  expect(isEven(42421243)).toBe(false);
  expect(isEven(150)).toBe(true);
})

//Regresa el tamaño de un string
test("regresa el tamaño del string", () => {
  expect(getStringLength("Hola")).toBe(4);
  expect(getStringLength("xD")).toBe(2);
  expect(getStringLength("Lorem Ipsum is simply dummy text of the printing and typesetting industry.")).toBe(74);
})