export interface InstanceInfo {
     getNameInstance(): string;
}

export interface OperadorArray extends InstanceInfo {
     ordenarArray(array: Array<number>): Array<number>;
}