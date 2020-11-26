const request = require('supertest');

const app = require('../../src/app');

const truncate = require('../utils/trucante');

describe('Buckets', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should list all bucket', async () => {
    const response = await request(app).get('/buckets').send();

    expect(response.status).toBe(200);
  });
});
