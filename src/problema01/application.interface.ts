import { InstanceInfo } from "./operador-array.interface";

export interface Application extends InstanceInfo {
    run(): void;
}