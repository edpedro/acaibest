const request = require('supertest');

const app = require('../../src/app');

const truncate = require('../utils/trucante');

const factory = require('../faker/factories');

describe('Personalize', () => {
  beforeEach(async () => {
    await truncate();
  });
  it('should register a new order', async () => {
    const order = await factory.attrs('Order');

    const response = await request(app).post('/orders').send(order);

    expect(response.body).toHaveProperty('id');
    expect(response.status).toBe(201);
  });
  it('should not register order without order_number', async () => {
    const number_order = null;
    const order = await factory.attrs('Order', {
      number_order,
    });
    const response = await request(app).post('/orders').send(order);

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject(
      expect.objectContaining({
        error: 'order_number not found',
      }),
    );
  });
  it('should not register order without name', async () => {
    const name = null;
    const order = await factory.attrs('Order', {
      name,
    });
    const response = await request(app).post('/orders').send(order);

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject(
      expect.objectContaining({
        error: 'name not found',
      }),
    );
  });
  it('should not insert order with existing order_number', async () => {
    const order = await factory.attrs('Order');

    await request(app).post('/orders').send(order);

    const response = await request(app).post('/orders').send(order);

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject(
      expect.objectContaining({
        error: 'order_number already exists',
      }),
    );
  });
  it('should not register order without sizebucket', async () => {
    const sizebucket = null;
    const order = await factory.attrs('Order', {
      sizebucket,
    });
    const response = await request(app).post('/orders').send(order);

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject(
      expect.objectContaining({
        error: 'sizebucket not found',
      }),
    );
  });
  it('should return 404 if there is an error in the register', async () => {
    const response = await request(app).post('/orders').send();

    expect(response.status).toBe(404);
    expect(response.body).toMatchObject(
      expect.objectContaining({
        error: 'registration error please try again',
      }),
    );
  });
  it('should return 404 if there is an error in the register', async () => {
    const response = await request(app).get('/orders').send();

    expect(response.status).toBe(200);
  });
  it('should list all orders', async () => {
    const response = await request(app).get('/orders').send();

    expect(response.status).toBe(200);
  });
  it('should list request by order_number', async () => {
    const order = await factory.attrs('Order');

    const responseOrder = await request(app).post('/orders').send(order);

    const response = await request(app)
      .get(`/orders/${responseOrder.body.number_order}`)
      .send();

    expect(response.status).toBe(200);
  });
  it('should not list the request by order_number not found', async () => {
    const id = 99999;
    const response = await request(app).get(`/orders/${id}`).send();

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject(
      expect.objectContaining({
        error: 'order_number not found',
      }),
    );
  });
  it('should delete order by order_number', async () => {
    const order = await factory.attrs('Order');

    const responseOrder = await request(app).post('/orders').send(order);

    const response = await request(app)
      .delete(`/orders/${responseOrder.body.number_order}`)
      .send();

    expect(response.status).toBe(200);
  });
  it('should not delete the request by order_number not found', async () => {
    const id = 999;

    const response = await request(app).delete(`/orders/${id}`).send();

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject(
      expect.objectContaining({
        error: 'order_number not found',
      }),
    );
  });
  it('should update status', async () => {
    const order = await factory.attrs('Order');

    const responseOrder = await request(app).post('/orders').send(order);

    const response = await request(app)
      .put(`/orders/${responseOrder.body.number_order}`)
      .send({
        status: false,
      });

    expect(response.status).toBe(200);
  });
  it('should not update the request by order_number not found', async () => {
    const id = 999;

    const response = await request(app).put(`/orders/${id}`).send();

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject(
      expect.objectContaining({
        error: 'order_number not found',
      }),
    );
  });
  it('should return 404', async () => {
    const id = null;

    const response = await request(app).put(`/orders/${id}`).send();

    expect(response.status).toBe(404);
    expect(response.body).toMatchObject(
      expect.objectContaining({
        error: 'update error please try again',
      }),
    );
  });
});
