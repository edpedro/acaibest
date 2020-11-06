const request = require('supertest');

const app = require('../../src/app');

const truncate = require('../utils/trucante');

describe('Flavor', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able created new flavor', async () => {
    const flavor = {
      name: 'flavors',
      price: 10.99,
    };

    const response = await request(app).post('/flavors').send(flavor);

    expect(response.body).toHaveProperty('id');
  });
  it('should not able create user, with duplicated name', async () => {
    const flavor = {
      name: 'flavors',
      price: 10.99,
    };

    await request(app).post('/flavors').send(flavor);

    const response = await request(app).post('/flavors').send(flavor);

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      error: expect.objectContaining({
        message: 'duplicate name',
      }),
    });
  });
  it('shyould list all flavors', async () => {
    const response = await request(app).get('/flavors').send();

    expect(response.status).toBe(200);
  });
  it('should return 400 if name does not exist', async () => {
    const response = await request(app).post('/flavors').send();

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      error: expect.objectContaining({
        message: 'Name does not exist',
      }),
    });
  });
});
