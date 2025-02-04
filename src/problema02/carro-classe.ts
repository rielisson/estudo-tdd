export abstract class Veiculo {
    protected modelo?: string;
    protected cor?: string;
    private veiculo: string;
    
    constructor(veiculo: string) {
        this.veiculo = veiculo;
    }

    getCor(): string {
        return this.cor ?? '';
    }
    getModelo(): string {
        return this.modelo ?? '';
    }

    setCor(cor: string) {
        this.cor = cor;
    }

    setModelo(modelo: string) {
        this.modelo = modelo;
    }

    getVeiculo(): string {
        return this.veiculo;
    }

    abstract getPlaca(): string;
}


export class Carro extends Veiculo {
    private placa: string;
    
    constructor(placa: string)  {
        super('Carro');
        this.placa = placa;
    }

    
    getPlaca(): string {
        return this.placa;
    }

}

export class Moto extends Veiculo {
    private placa: string;

    constructor(placa: string) {
        super('Moto');
        this.placa = placa;
    }

    getPlaca(): string {
        return this.placa;
    }
}

export class Caminhao extends Veiculo {
    private placa: string;

    constructor(placa: string) {
        super('Caminhao');
        this.placa = placa;
    }

    getPlaca(): string {
        return this.placa;
    }

}