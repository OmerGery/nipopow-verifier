
const axios = require('axios');
require('dotenv').config();
jest.setTimeout(60 * 1000);
const projectId = process.env.PROJECT_ID;
const network = axios.create({
    baseURL: 'https://mainnet.infura.io',
  }); 
describe('Test', () => {
    it('Can get contract block number', async() => {
      const { data } = await network.post(`/v3/${projectId}`,{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1} );
      console.log(data);
      expect(data).toBeDefined();
      expect(data.jsonrpc).toBeDefined();
      expect(data.id).toBeDefined();
      expect(data.result.length).toBe(8);

    });
});


