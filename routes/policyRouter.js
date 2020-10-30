const express = require('express');
const controller = require('../controllers/policyController');
const policyRouter = express.Router();


policyRouter.get('/', controller.policy_list_get);
policyRouter.get('/:id', controller.getById);
policyRouter.post('/', controller.policy_create_post);
policyRouter.put('/:id', controller.updateById);
policyRouter.delete('/:id', controller.deleteById);
policyRouter.delete('/', controller.deleteAll);

module.exports = policyRouter;