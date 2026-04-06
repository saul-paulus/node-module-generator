// routes
export default ({ authController }) => {
  const express = require('express');
  const router = express.Router();
  
  router.get('/', authController.index.bind(authController));
  
  return router;
};
