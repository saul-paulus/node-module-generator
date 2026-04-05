const { Router } = require('express');

module.exports = function({ orderController }) {
  const router = Router();

  router.post('/', orderController.create);

  return router;
};
