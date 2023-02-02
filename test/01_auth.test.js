const request = require('supertest');
const app = require('../app');

const testAuthLogin = {
    "email": "correo07@test.com",
    "password": "123456Pc"
};
const testAuthRegister = {
    "name": "User test",
    "age": "32",
    "email": "correo20@test.com",
    "password": "123456Ut"
};

describe('[AUTH] Esta es la prueba de /api/auth', () => {
    test('Esto deberia retornar un 404', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send(testAuthLogin)
        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty('data');
        expect(response.body).toHaveProperty('data.token');
        expect(response.body).toHaveProperty('data.user');
    })
});