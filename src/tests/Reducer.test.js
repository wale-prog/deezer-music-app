import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getChart } from '../redux/ChartsSlice';
import store from '../redux/index';

const responseData = [
  {
    id: 1,
    artist: 'Smith',
    title: 'Statue',
  },
];

const requestInstance = axios.create({
  baseURL: '/chart',
  timeout: 2000,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

const mockNetworkRespnse = () => {
  const mock = new MockAdapter(requestInstance);
  mock.onGet('/chart').reply(200, responseData);
};

describe('Test reducer', () => {
  it('Should initially set charts to an empty array', () => {
    const state = store.getState().charts;
    expect(state).toEqual([]);
  });
});

describe('Test for charts redux state', () => {
  beforeAll(() => {
    mockNetworkRespnse();
  });
  it('Should be able to fetch data from the API', async () => {
    const result = await store.dispatch(getChart());
    const charts = result.payload;

    expect(result.type).toBe('Music/getChart/fulfilled');
    expect(charts.artist).toEqual(responseData.artist);
  });
});
