
export abstract class Veiculo {
    protected modelo?: string;
    protected cor?: string;
    protected placa?: string;
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

    getPlaca() {
        return this.placa;
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

    setPlaca(placa: string) {
        this.placa = placa;
    };
}