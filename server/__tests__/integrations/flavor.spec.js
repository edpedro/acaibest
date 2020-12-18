const request = require('supertest');

const app = require('../../src/app');

const truncate = require('../utils/trucante');
const factory = require('../faker/factories');

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
  it('should list all flavors', async () => {
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
  it('should delete an flavor', async () => {
    const flavor = await factory.attrs('Flavor');

    const responseFlavor = await request(app).post('/flavors').send(flavor);

    const responseDelete = await request(app)
      .delete(`/flavors/${responseFlavor.body.id}`)
      .send();

    expect(responseDelete.status).toBe(200);
  });
  it('should return 404 if id not found', async () => {
    const id = 999;

    const responseDelete = await request(app).delete(`/flavors/${id}`).send();

    expect(responseDelete.status).toBe(400);
    expect(responseDelete.body).toMatchObject(
      expect.objectContaining({
        error: 'id not found',
      }),
    );
  });
  it('should return 404 if there is an error in the delete', async () => {
    const id = null;
    const response = await request(app).delete(`/flavors/${id}`).send();

    expect(response.status).toBe(404);
    expect(response.body).toMatchObject(
      expect.objectContaining({
        error: 'please fill in the id to delete',
      }),
    );
  });
  it('should update name of flavor', async () => {
    const flavor = await factory.attrs('Flavor');

    const responseFlavor = await request(app).post('/flavors').send(flavor);

    const responseUpdate = await request(app)
      .put(`/flavors/${responseFlavor.body.id}`)
      .send({ name: 'Granola' });

    expect(responseUpdate.status).toBe(200);
  });
  it('should not update without name', async () => {
    const id = 999;

    const responseUpdate = await request(app).put(`/flavors/${id}`).send();

    expect(responseUpdate.status).toBe(400);
    expect(responseUpdate.body).toMatchObject(
      expect.objectContaining({
        error: 'id not found',
      }),
    );
  });
  it('should return 404 if there is an error in the update', async () => {
    const id = null;

    const responseUpdate = await request(app).put(`/flavors/${id}`).send();

    expect(responseUpdate.status).toBe(404);
    expect(responseUpdate.body).toMatchObject(
      expect.objectContaining({
        error: 'please fill in the id to update',
      }),
    );
  });
});
