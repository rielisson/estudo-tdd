import { Application } from "./application.interface";
import { ApplicationSortApi } from "./application-api"
import { OperadorArrayCustomizado } from "./operador-array-customizado";
import { ApplicationSortConsole } from "./application-console";
import { OperadorArray } from "./operador-array.interface";
function main(app: Application) {
    console.log("executando application ", app.getNameInstance())
    app.run();
} 
const operadorArrayCustomizado: OperadorArray  = new OperadorArrayCustomizado();
const applicationApi = new ApplicationSortApi(operadorArrayCustomizado);
const applicationConsole = new ApplicationSortConsole(operadorArrayCustomizado);
//main(applicationApi);


const array01 = [9, 7, 1, 3, 4, 5, 6];

applicationConsole.setValue(array01);

main(applicationConsole);


applicationApi.setValues(array01);

main(applicationApi);