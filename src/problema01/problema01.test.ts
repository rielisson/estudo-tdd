import { MyException } from './my-exception';
import { OperadorArray } from './operador-array.interface';
import { OperadorArrayCustomizado } from './operador-array-customizado';
import { OperadorArrayPadrao } from './operador-array-padrao.';

describe("Problema 01 de ordenaçao", () => {
    let operadorArray: OperadorArray;

    beforeAll(() => {
        // operadorArray = new OperadorArrayCustomizado();
        operadorArray = new OperadorArrayPadrao();
    })

    test("Dado um array de tamanho 0 deve retornar exception", () => {
        // given //dado
        const arrayX: any = [];
        // when // quando
        try {
            operadorArray.ordenarArray(arrayX);
        } catch (exception) {
            // then //entao
            expect(exception).toBeInstanceOf(MyException);
        }
    })

    test("Dado um array de tamanho 1 deve retornar o array inserido", () => {
        // given //dado
        const arrayX = [5];
        // when // quando
        const resp = operadorArray.ordenarArray(arrayX);
        // then //entao
        expect(resp.length).toEqual(arrayX.length);
    })

    test("Dado um array não ordenado deve retornar o array ordenado.", () => {
        // given //dado
        const arrayX = [5,6,4,3,2,10];
        // when // quando
        const resp = operadorArray.ordenarArray(arrayX);
        // then //entao
        expect(resp).toEqual([2,3,4,5,6,10]);
    })
    test("Dado um array de numeros negativos deve retornar um array ordenador com somente os numeros positivos .", () => {
        // given //dado
        const arrayX = [5,-6,4,-3,2,10,98,3,-6,6,-1,23];
        // when // quando
        const resp = operadorArray.ordenarArray(arrayX);
        // then //entao
        expect(resp).toEqual([2,3,4,5,6,10,23,98]);
    })

})