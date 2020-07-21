// import { getRepository } from 'typeorm';
import { createBitcoinRpc } from '@carnesen/bitcoin-rpc';

import bitcoinConfig from '../config/bitcoin';

// import AppError from '../errors/AppError';

// import Transaction from '../models/Transaction';

interface Request {
  from: string;
  to: string;
  value: number;
  fee: number;
}

interface Response {
  hash: string;
}

class CreateTransactionService {
  public async execute({ from, to, value, fee }: Request): Promise<Response> {
    try {
      console.log(from, to, value, fee);
      console.log(bitcoinConfig.endpoint);
      const bitcoinRpc = await createBitcoinRpc(bitcoinConfig.endpoint);
      const response = await bitcoinRpc('getblockcount');
      console.log(response);

      return { hash: '' };
    } catch (error) {
      console.log(error);
    }

    return { hash: '' };
  }
}

export default CreateTransactionService;
