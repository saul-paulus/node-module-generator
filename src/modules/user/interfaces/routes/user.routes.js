const { Router } = require('express');

module.exports = function({ userController }) {
  const router = Router();

  router.post('/', userController.create);

  return router;
};
