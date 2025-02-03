import { Application } from "./application.interface";
import { OperadorArrayCustomizado } from "./operador-array-customizado";
import { OperadorArrayPadrao } from "./operador-array-padrao.";
import { OperadorArray } from "./operador-array.interface";

export class ApplicationSortConsole implements Application {
    private operador: OperadorArray;
    private array?: number[];

    constructor(operador: OperadorArray) {
        this.operador = operador;
    }

    getNameInstance() {
        return 'console';
    }

    run(): void {
        console.log(this.operador.getNameInstance());
        console.log(this.operador.ordenarArray(this.array!));
    }

    setValue(array: number[]) {
        this.array = array;
    }
}


const array01 = [9, 7, 1, 3, 4, 5, 6];

// ============================ init
const applicationSortCustomConsole = new ApplicationSortConsole(new OperadorArrayCustomizado);
applicationSortCustomConsole.setValue(array01);

const applicationSortDefaultConsole = new ApplicationSortConsole(new OperadorArrayPadrao);
applicationSortDefaultConsole.setValue(array01);

// ============================= execution 
applicationSortCustomConsole.run()
applicationSortDefaultConsole.run()
