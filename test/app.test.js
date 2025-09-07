const request = require('supertest');
const app = require('../src/app');

describe('API básica', () => {
  test('GET / responde 200 y texto', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/Hola equipo/);
  });

  test('GET /paula responde 200 y texto de Paula', async () => {
    const res = await request(app).get('/paula');
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/Paula/);
  });
});
