const { contarCaracteres, ehPar, subtrai } = require('../src/calculadora');

test('A função contarCaracteres deve retornar que a string "viver" possui 5 caracteres', () => {
    expect(contarCaracteres("viver")).toBe("A string viver possui 5 caracteres");
});

test('A função ehPar deve dizer que o número 2 é par', () => {
    expect(ehPar(2)).toBe("O número 2 é par");
});

test('A função ehPar deve dizer que o número 1 não é par', () => {
    expect(ehPar(1)).toBe("O número 1 não é par");
});

test('A função subtrai deve retornar 1 ao subtrair 6 e 5', () => {
    expect(subtrai(6,5)).toBe(1);
});
