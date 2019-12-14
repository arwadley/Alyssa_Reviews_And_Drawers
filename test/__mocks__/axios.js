import axios from 'axios';

export default {
  get: jest.fn(('') => Promise.resolve({ data: { total_payout: 100.21 } })),
  default:
};
