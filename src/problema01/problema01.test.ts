import { MyException, ordenarArray } from "./problema01";

describe("Problema 01 de ordenaçao", () => {

    test("Dado um array de tamanho 0 deve retornar exception", () => {
        // given //dado
        const arrayX: any = [];
        // when // quando
        try {
            ordenarArray(arrayX);
        } catch (exception) {
            // then //entao
            expect(exception).toBeInstanceOf(MyException);
        }
    })

    test("Dado um array de tamanho 1 deve retornar o array inserido", () => {
        // given //dado
        const arrayX = [5];
        // when // quando
        const resp = ordenarArray(arrayX);
        // then //entao
        expect(resp.length).toEqual(arrayX.length);
    })
    
    test("Dado um array não ordenado deve retornar o array ordenado.", () => {
        // given //dado
        const arrayX = [5,6,4,3,2,10];
        // when // quando
        const resp = ordenarArray(arrayX);
        // then //entao
        expect(resp).toEqual([2,3,4,5,6,10]);
    })

})