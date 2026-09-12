const request = require('supertest');
const app = require('./server');

describe('Health Check Endpoint', () => {
  test('GET /api/health should return status 200', async () => {
    const response = await request(app)
      .get('/api/health')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('Server is running');
  });
});

describe('Placeholder API Endpoints', () => {
  test('GET /api/employees should return placeholder message', async () => {
    const response = await request(app)
      .get('/api/employees')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toHaveProperty('message');
  });
});
