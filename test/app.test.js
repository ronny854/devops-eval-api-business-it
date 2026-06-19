const request = require('supertest');

const app = require('../src/app');

describe('GET /health', () => {
  it('returns status ok', async () => {
    const res = await request(app).get('/health');

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

// describe('GET /greet', () => {
//   it('returns greeting with name', async () => {
//     const res = await request(app).get('/greet?name=DevOps');

//     expect(res.statusCode).toBe(200);
//     expect(res.body.message).toBe('Hello, DevOps!');
//   });

//   it('returns 400 if name is missing', async () => {
//     const res = await request(app).get('/greet');

//     expect(res.statusCode).toBe(400);
//     expect(res.body.error).toBe('name query param is required');
//   });
// });