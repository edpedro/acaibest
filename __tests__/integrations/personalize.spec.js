const request = require('supertest');

const app = require('../../src/app');

const truncate = require('../utils/trucante');

describe('Personalize', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able created new personalize', async () => {
    const personalize = {
      name: 'Granola',
      price: 10.99,
    };

    const flavor = await request(app).post('/flavors').send(personalize);

    const response = await request(app)
      .post(`/persons/${flavor.body.id}`)
      .send(personalize);

    expect(response.body).toHaveProperty('id');
  });
  it('não deveria cadastrar personalize ser sabor não exister', async () => {
    const personalize = {
      name: 'Granola',
      price: 10.99,
    };
    const flavor = {
      id: 999,
    };

    const responsePersonalize = await request(app)
      .post(`/persons/${flavor.id}`)
      .send(personalize);

    expect(responsePersonalize.status).toBe(400);
    expect(responsePersonalize.body).toMatchObject(
      expect.objectContaining({
        error: 'flavor id does not exist',
      }),
    );
  });
});
