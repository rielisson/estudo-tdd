import { MyException } from "./my-exception";
import { OperadorArray } from "./operador-array.interface";

export class OperadorArrayPadrao implements OperadorArray {

    ordenarArray(array: Array<number>): Array<number> {
        if (array.length < 1) throw new MyException("Array invalido o array deve ser maior que 1.");
        const newArray: any[] = this.removerNumerosNegativos(array);

        return newArray.sort((a,b) => a - b);
    }

    removerNumerosNegativos(array: Array<number>) {
        const newArray: any[] = [];

        for (let i = 0; i < array.length; i++) {
            if (array[i] >= 0) {
                newArray.push(array[i]);
            }
        }
        return newArray;
    }

}