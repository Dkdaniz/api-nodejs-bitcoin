import { Router } from 'express';
import { getRepository } from 'typeorm';

import ensureAuthenticated from '../middleware/ensureAuthenticated';

import Transaction from '../models/Transaction';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionsRouter = Router();

transactionsRouter.use(ensureAuthenticated);

transactionsRouter.get('/tx/all', async (request, response) => {
  const transactionRepository = await getRepository(Transaction);
  const transaction = await transactionRepository.find({
    where: { user_id: request.user.id },
  });

  return response.json({ transaction });
});

transactionsRouter.get('/tx/:id', async (request, response) => {
  const transactionRepository = await getRepository(Transaction);
  const transaction = await transactionRepository.findOne({
    where: { id: request.params.id, user_id: request.user.id },
  });

  return response.json({ transaction });
});

transactionsRouter.post('/create', async (request, response) => {
  const createTransaction = new CreateTransactionService();
  const transaction = await createTransaction.execute({
    from: 'x',
    to: 'x',
    value: 0.1,
    fee: 0.1,
  });

  console.log(transaction);

  return response.json({ message: 'ok' });
});

export default transactionsRouter;
