import { Caminhao } from "./caminhao-classe";
import { Carro } from "./carro-classe";
import { Moto } from "./moto-classe";
import { Veiculo } from "./veiculo-classe";


class Application {
    
    start() {
        let pontoDeParada = 0
        do {

            this.printVeiculos(this.criarCarros(1));
            this.printVeiculos(this.criarMotos(1));
            this.printVeiculos(this.criarCaminhao(1));
            pontoDeParada+=1;
        } while (pontoDeParada < 2);
        
    }

    criarCarros(quantidade: number) {
        let array = []
        for (let i = 0; i < quantidade; i++) {
            const carro = new Carro();
            carro.setCor('vermelho')
            carro.setModelo('bmw e3');
            carro.setPlaca('123')
            array.push(carro);
        }
        return array;
    }

    criarMotos(quantidade: number) {
        let array = []
        for (let i = 0; i < quantidade; i++) {
            const moto = new Moto('1234' + i);
            moto.setCor('vermelho');
            moto.setModelo('cj160');
            moto.setPlaca('1234');
            array.push(moto);
        }
        return array;
    }

    criarCaminhao(quantidade: number) {
        let array = []
        for (let i = 0; i < quantidade; i++) {
            const caminhao = new Caminhao();
            caminhao.setCor('azul');
            caminhao.setModelo('mercedes');
            caminhao.setPlaca('12345')
            array.push(caminhao);
        }
        return array;
    }

    printVeiculos(array: Array<Veiculo>) {
        for (let i = 0; i < array.length; i++) {
            const veiculo = array[i]
            console.log(veiculo.getVeiculo());
            console.log(`modelo:${veiculo.getModelo()}\ncor:${veiculo.getCor()}\nplaca:${veiculo.getPlaca()}`);
        }
    }

    
}

new Application().start();


// 
// const carros = criarCarros(2);
// const motos = criarMotos(2);
// const caminhaos = criarCaminhao(2);


// printVeiculos(carros);
// printVeiculos(motos);
// printVeiculos(caminhaos);
