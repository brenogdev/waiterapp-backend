import { Router } from 'express';

export const router = Router();

//  LIST CATEGORY
router.get('/categories', (req, res) => {
  res.send('ok');
});

// CREATE CATEGORY
router.post('/categories', (req, res) => {
  res.send('ok');
});

// LIST PRODUCT
router.get('/products', (req, res) => {
  res.send('ok');
});

// CREATE PRODUCT
router.post('/products', (req, res) => {
  res.send('ok');
});

// GET PRODUCT BY CATEGORY
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('ok');
});

// LIST ORDER
router.get('/orders', (req, res) => {
  res.send('ok');
});

// CREATE ORDER
router.post('/orders', (req, res) => {
  res.send('ok');
});

// CHANGE ORDER STATUS
router.patch('/orders/:orderId', (req, res) => {
  res.send('ok');
});

// DELETE / CANCEL ORDER
router.delete('/orders/:orderId', (req, res) => {
  res.send('ok');
});
