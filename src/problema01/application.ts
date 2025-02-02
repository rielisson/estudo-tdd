import { OperadorArrayCustomizado } from "./operador-array-customizado";
import { OperadorArrayPadrao } from "./operador-array-padrao.";
import { OperadorArray } from "./operador-array.interface";

class ApplicationSort {
    private operador: OperadorArray;

    constructor(operador: OperadorArray) {
        this.operador = operador;
    }

    run(array: number[]) {
        console.log(this.operador.getNameInstance());
        console.log(this.operador.ordenarArray(array));
    }
}


const array01 = [9, 7, 1, 3, 4, 5, 6];
const applicationSortCustom = new ApplicationSort(new OperadorArrayCustomizado);
applicationSortCustom.run(array01);

const applicationSortDefault = new ApplicationSort(new OperadorArrayPadrao);
applicationSortDefault.run(array01);

