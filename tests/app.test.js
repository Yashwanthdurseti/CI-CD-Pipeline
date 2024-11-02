jest.setTimeout(10000); // 10 seconds

const request = require('supertest');
const app = require('../server'); // Ensure the path to `server.js` is correct

describe('GET Endpoints', () => {
  it('should load the home page', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });

  it('should load the contact page', async () => {
    const res = await request(app).get('/contact');
    expect(res.statusCode).toEqual(200);
  });
});
