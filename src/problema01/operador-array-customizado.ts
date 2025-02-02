import { MyException } from "./my-exception";
import { OperadorArray } from "./operador-array.interface";

export class OperadorArrayCustomizado implements OperadorArray {

    ordenarArray(array: Array<number>): Array<number> {
        if (array.length < 1) throw new MyException("Array invalido o array deve ser maior que 1.");
        const n = array.length
        const newArray: any[] = this.removerNumerosNegativos(array);

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (newArray[j] < newArray[i]) {
                    let aux = newArray[i];
                    newArray[i] = newArray[j];
                    newArray[j] = aux;
                }
            }
        }
        return newArray;
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