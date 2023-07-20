//Jest Lab 8 || Funciones personalizadas para TypeScript con el marco de Jest
export function capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  export function multiply(a: number, b: number): number {
    return a * b;
  }
  
  // Add more functions as needed
  //Función para corroborar si un numero es par o inpar
  export function isEven(num: number): boolean {
    return num % 2 === 0;
  }

  //función para retornar el tamaño de un string
  export function getStringLength(str: string): number{
    return str.length;
  }