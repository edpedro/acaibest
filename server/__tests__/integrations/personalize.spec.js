const request = require('supertest');

const app = require('../../src/app');

const truncate = require('../utils/trucante');

const factory = require('../faker/factories');

describe('Personalize', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Should be able created new personalize', async () => {
    const personalize = await factory.attrs('Personalize');
    const flavor = await factory.attrs('Flavor');

    const responseFlavor = await request(app).post('/flavors').send(flavor);

    const response = await request(app)
      .post(`/persons/${responseFlavor.body.id}`)
      .send(personalize);

    expect(response.body).toHaveProperty('id');
  });
  it('Should not register customize be flavor does not found', async () => {
    const personalize = await factory.attrs('Personalize');
    const flavor = {
      id: 999,
    };

    const responsePersonalize = await request(app)
      .post(`/persons/${flavor.id}`)
      .send(personalize);

    expect(responsePersonalize.status).toBe(400);
    expect(responsePersonalize.body).toMatchObject(
      expect.objectContaining({
        error: 'flavor id does not fount',
      }),
    );
  });
  it('should return 404 if there is an error in the register', async () => {
    const responseFlavor = await request(app).post('/flavors').send();

    const responsePersonalize = await request(app)
      .post(`/persons/${responseFlavor.body.id}`)
      .send();

    expect(responsePersonalize.status).toBe(404);
    expect(responsePersonalize.body).toMatchObject(
      expect.objectContaining({
        error: 'registration error please try again',
      }),
    );
  });
  it('should not add flavor without a name', async () => {
    const flavor = await factory.attrs('Flavor');
    const personalize = {
      price: 10.99,
    };

    const responseFlavor = await request(app).post('/flavors').send(flavor);

    const responsePersonalize = await request(app)
      .post(`/persons/${responseFlavor.body.id}`)
      .send(personalize);

    expect(responsePersonalize.status).toBe(400);
    expect(responsePersonalize.body).toMatchObject(
      expect.objectContaining({
        error: 'please fill in name',
      }),
    );
  });
  it('should not add flavor without a price', async () => {
    const flavor = await factory.attrs('Flavor');
    const personalize = {
      name: 'Morango',
    };

    const responseFlavor = await request(app).post('/flavors').send(flavor);

    const responsePersonalize = await request(app)
      .post(`/persons/${responseFlavor.body.id}`)
      .send(personalize);

    expect(responsePersonalize.status).toBe(400);
    expect(responsePersonalize.body).toMatchObject(
      expect.objectContaining({
        error: 'please fill in price',
      }),
    );
  });
  it('should list all personalize', async () => {
    const response = await request(app).get('/persons').send();

    expect(response.status).toBe(200);
  });
  it('should update name of personalize', async () => {
    const personalize = await factory.attrs('Personalize');
    const flavor = await factory.attrs('Flavor');

    const responseFlavor = await request(app).post('/flavors').send(flavor);

    const responsePersonalize = await request(app)
      .post(`/persons/${responseFlavor.body.id}`)
      .send(personalize);

    const responseUpdate = await request(app)
      .put(`/persons/${responsePersonalize.body.id}`)
      .send({ name: 'Granola' });

    expect(responseUpdate.status).toBe(200);
  });
  it('should return 400 if id does not found', async () => {
    const id = 999;

    const response = await request(app)
      .put(`/persons/${id}`)
      .send({ name: 'Granola' });

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject(
      expect.objectContaining({
        error: 'name not found',
      }),
    );
  });
  it('should not update without name', async () => {
    const personalize = await factory.attrs('Personalize');
    const flavor = await factory.attrs('Flavor');

    const responseFlavor = await request(app).post('/flavors').send(flavor);

    const responsePersonalize = await request(app)
      .post(`/persons/${responseFlavor.body.id}`)
      .send(personalize);

    const responseUpdate = await request(app)
      .put(`/persons/${responsePersonalize.body.id}`)
      .send();

    expect(responseUpdate.status).toBe(400);
    expect(responseUpdate.body).toMatchObject(
      expect.objectContaining({
        error: 'please fill in the name to update',
      }),
    );
  });
  it('should return 404 if there is an error in the update', async () => {
    const flavor = await factory.attrs('Flavor');

    const responseFlavor = await request(app).post('/flavors').send(flavor);

    const responsePersonalize = await request(app)
      .post(`/persons/${responseFlavor.body.id}`)
      .send();

    const responseUpdate = await request(app)
      .put(`/persons/${responsePersonalize.body.id}`)
      .send();

    expect(responseUpdate.status).toBe(404);
    expect(responseUpdate.body).toMatchObject(
      expect.objectContaining({
        error: 'please fill in the name to update',
      }),
    );
  });
  it('should delete an personalize', async () => {
    const flavor = await factory.attrs('Flavor');

    const responseFlavor = await request(app).post('/flavors').send(flavor);

    await request(app)
      .post(`/persons/${responseFlavor.body.id}`)
      .send({ name: 'Granola', price: 10.99 });

    const responseDelete = await request(app)
      .delete(`/persons/${responseFlavor.body.id}`)
      .send({ name: 'Granola' });

    expect(responseDelete.status).toBe(200);
  });
  it('should return 404 if id not found', async () => {
    const id = 999;

    const responseDelete = await request(app)
      .delete(`/persons/${id}`)
      .send({ name: 'Granola' });

    expect(responseDelete.status).toBe(400);
    expect(responseDelete.body).toMatchObject(
      expect.objectContaining({
        error: 'id not found',
      }),
    );
  });
  it('should return 404 if there is an error in the delete', async () => {
    const flavor = await factory.attrs('Flavor');

    const responseFlavor = await request(app).post('/flavors').send(flavor);

    const responsePersonalize = await request(app)
      .post(`/persons/${responseFlavor.body.id}`)
      .send();

    const responseUpdate = await request(app)
      .delete(`/persons/${responsePersonalize.body.id}`)
      .send();

    expect(responseUpdate.status).toBe(404);
    expect(responseUpdate.body).toMatchObject(
      expect.objectContaining({
        error: 'please fill in the name to delete',
      }),
    );
  });
  it('should not update without delete', async () => {
    const flavor = await factory.attrs('Flavor');

    const responseFlavor = await request(app).post('/flavors').send(flavor);

    const responseUpdate = await request(app)
      .delete(`/persons/${responseFlavor.body.id}`)
      .send();

    expect(responseUpdate.status).toBe(400);
    expect(responseUpdate.body).toMatchObject(
      expect.objectContaining({
        error: 'please fill in the name to delete',
      }),
    );
  });
});
