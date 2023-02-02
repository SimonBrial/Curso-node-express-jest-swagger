describe('[APP] Esta es la prueba general', () => {
    // Prueba unitaria no es la que require de un agente externo.
    test('Esto deberia retornar 8 ', () => {
        const a = 4;
        const b = 4;
        const total = a + b;
        expect(total).toEqual(8);
    });
});