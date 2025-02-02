export class MyException extends Error {}

export function ordenarArray(array: Array<number>): Array<number> { 
    if(array.length < 1) throw new MyException("Array invalido o array deve ser maior que 1.");
 return array
}
