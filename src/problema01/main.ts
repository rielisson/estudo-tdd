import { Application } from "./application.interface";
import { ApplicationSortApi } from "./application-api"
import { OperadorArrayCustomizado } from "./operador-array-customizado";
import { ApplicationSortConsole } from "./application-console";
function main(app: Application) {
    app.run();
}

const applicationApi = new ApplicationSortConsole(new OperadorArrayCustomizado)
main(applicationApi);

