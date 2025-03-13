const { calcularMedia, verificaAprovacao, adicionarNota } = require('../src/notas');

describe('Função calcularMedia', () => {
    test('Deve calcular corretamente a média de [8, 7, 6]', () => {
        expect(calcularMedia([8, 7, 6])).toBeCloseTo(7);
    });

    test('Deve lançar um erro ao receber uma lista vazia', () => {
        expect(() => calcularMedia([])).toThrow('Lista de notas vazia');
    });
});

describe('Função verificaAprovacao', () => {
    test('Deve retornar "Aprovado" para médias iguais ou maiores que 6', () => {
        expect(verificaAprovacao(6)).toBe('Aprovado');
        expect(verificaAprovacao(7.5)).toBe('Aprovado');
    });

    test('Deve retornar "Reprovado" para médias menores que 6', () => {
        expect(verificaAprovacao(5.9)).toBe('Reprovado');
        expect(verificaAprovacao(3)).toBe('Reprovado');
    });
});

describe('Função adicionarNota', () => {
    test('Deve adicionar corretamente uma nova nota ao array', () => {
        expect(adicionarNota([5, 7], 8)).toEqual([5, 7, 8]);
    });

    test('Deve lançar um erro ao adicionar uma nota inválida (menor que 0 ou maior que 10)', () => {
        expect(() => adicionarNota([5, 7], -1)).toThrow('Nota inválida');
        expect(() => adicionarNota([5, 7], 11)).toThrow('Nota inválida');
    });
});
