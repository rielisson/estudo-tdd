import { OperadorArray } from './operador-array.interface';
import { Application } from "./application.interface";
import { OperadorArrayCustomizado } from './operador-array-customizado';


export class ApplicationSortApi implements Application {
    private operador: OperadorArray;
    private array?: number[];
    constructor(operador: OperadorArray) {
        this.operador = operador;
    }
    
    getNameInstance() {
        return 'Api';
    }

    run(): void {
        console.log(this.operador.getNameInstance());
        console.log(this.operador.ordenarArray(this.array!));
    }

    setValues(array: number[]) {
        this.array = array;
    }
    
}

const array = [3,2,1,4,5,6];
const applicationSortCustomApi = new ApplicationSortApi(new OperadorArrayCustomizado);
applicationSortCustomApi.setValues(array);

applicationSortCustomApi.run();

