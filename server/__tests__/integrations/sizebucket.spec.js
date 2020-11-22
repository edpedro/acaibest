const request = require('supertest');

const app = require('../../src/app');

const truncate = require('../utils/trucante');

const factory = require('../faker/factories');

describe('Sizebucket', () => {
  beforeEach(async () => {
    await truncate();
  });
  it('Should be able created new sizebucket', async () => {
    const sizebucket = await factory.attrs('Sizebucket');
    const flavor = await factory.attrs('Flavor');

    const responseFlavor = await request(app).post('/flavors').send(flavor);

    const response = await request(app)
      .post(`/sizebucket/${responseFlavor.body.id}`)
      .send(sizebucket);

    expect(response.body).toHaveProperty('id');
  });
  it('Should not register customize be sizebucket does not found', async () => {
    const sizebucket = await factory.attrs('Sizebucket');
    const flavor = {
      id: 999,
    };

    const responseSizebucket = await request(app)
      .post(`/sizebucket/${flavor.id}`)
      .send(sizebucket);

    expect(responseSizebucket.status).toBe(400);
    expect(responseSizebucket.body).toMatchObject(
      expect.objectContaining({
        error: 'flavor id does not fount',
      }),
    );
  });
  it('should return 404 if there is an error in the register', async () => {
    const responseFlavor = await request(app).post('/flavors').send();

    const responseSizebucket = await request(app)
      .post(`/sizebucket/${responseFlavor.body.id}`)
      .send();

    expect(responseSizebucket.status).toBe(404);
    expect(responseSizebucket.body).toMatchObject(
      expect.objectContaining({
        error: 'registration error please try again',
      }),
    );
  });
  it('should not add sizebucket without a name', async () => {
    const flavor = await factory.attrs('Flavor');
    const sizebucket = {
      price: 10.99,
    };

    const responseFlavor = await request(app).post('/flavors').send(flavor);

    const responseSizebucket = await request(app)
      .post(`/sizebucket/${responseFlavor.body.id}`)
      .send(sizebucket);

    expect(responseSizebucket.status).toBe(400);
    expect(responseSizebucket.body).toMatchObject(
      expect.objectContaining({
        error: 'please fill in name',
      }),
    );
  });
  it('should not add sizebucket without a price', async () => {
    const flavor = await factory.attrs('Flavor');
    const sizebucket = {
      name: 'Morango',
    };

    const responseFlavor = await request(app).post('/flavors').send(flavor);

    const responseSizebucket = await request(app)
      .post(`/sizebucket/${responseFlavor.body.id}`)
      .send(sizebucket);

    expect(responseSizebucket.status).toBe(400);
    expect(responseSizebucket.body).toMatchObject(
      expect.objectContaining({
        error: 'please fill in price',
      }),
    );
  });
  it('should list all sizebucket', async () => {
    const response = await request(app).get('/sizebucket').send();

    expect(response.status).toBe(200);
  });
  it('should update name of sizebucket', async () => {
    const sizebucket = await factory.attrs('Sizebucket');
    const flavor = await factory.attrs('Flavor');

    const responseFlavor = await request(app).post('/flavors').send(flavor);

    const responseSizebucket = await request(app)
      .post(`/sizebucket/${responseFlavor.body.id}`)
      .send(sizebucket);

    const responseUpdate = await request(app)
      .put(`/sizebucket/${responseSizebucket.body.id}`)
      .send({ name: 'Granola' });

    expect(responseUpdate.status).toBe(200);
  });
  it('should return 400 if id does not found', async () => {
    const id = 999;

    const response = await request(app)
      .put(`/sizebucket/${id}`)
      .send({ name: 'Granola' });

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject(
      expect.objectContaining({
        error: 'name not found',
      }),
    );
  });
  it('should not update without name', async () => {
    const sizebucket = await factory.attrs('Sizebucket');
    const flavor = await factory.attrs('Flavor');

    const responseFlavor = await request(app).post('/flavors').send(flavor);

    const responseSizebucket = await request(app)
      .post(`/sizebucket/${responseFlavor.body.id}`)
      .send(sizebucket);

    const responseUpdate = await request(app)
      .put(`/sizebucket/${responseSizebucket.body.id}`)
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

    const responseSizebucket = await request(app)
      .post(`/sizebucket/${responseFlavor.body.id}`)
      .send();

    const responseUpdate = await request(app)
      .put(`/sizebucket/${responseSizebucket.body.id}`)
      .send();

    expect(responseUpdate.status).toBe(404);
    expect(responseUpdate.body).toMatchObject(
      expect.objectContaining({
        error: 'please fill in the name to update',
      }),
    );
  });
  it('should delete an sizebucket', async () => {
    const flavor = await factory.attrs('Flavor');

    const responseFlavor = await request(app).post('/flavors').send(flavor);

    await request(app)
      .post(`/sizebucket/${responseFlavor.body.id}`)
      .send({ name: '300ML', price: 10.99 });

    const responseDelete = await request(app)
      .delete(`/sizebucket/${responseFlavor.body.id}`)
      .send({ name: '300ML' });

    expect(responseDelete.status).toBe(200);
  });
  it('should return 404 if id not found', async () => {
    const id = 999;

    const responseDelete = await request(app)
      .delete(`/sizebucket/${id}`)
      .send({ name: '300ML' });

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

    const responseSizebucket = await request(app)
      .post(`/sizebucket/${responseFlavor.body.id}`)
      .send();

    const responseUpdate = await request(app)
      .delete(`/sizebucket/${responseSizebucket.body.id}`)
      .send();

    expect(responseUpdate.status).toBe(404);
    expect(responseUpdate.body).toMatchObject(
      expect.objectContaining({
        error: 'please fill in the name to delete',
      }),
    );
  });
  it('should not name without delete', async () => {
    const flavor = await factory.attrs('Flavor');

    const responseFlavor = await request(app).post('/flavors').send(flavor);

    const responseUpdate = await request(app)
      .delete(`/sizebucket/${responseFlavor.body.id}`)
      .send();

    expect(responseUpdate.status).toBe(400);
    expect(responseUpdate.body).toMatchObject(
      expect.objectContaining({
        error: 'please fill in the name to delete',
      }),
    );
  });
});
