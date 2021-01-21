import axios from 'axios';

const configuration = {
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'WGBV0Lp0fZlHLBGx',
  },
};

const instance = axios.create(configuration);

const requestHandler = (request) => {
  console.log(request, 'request log from requesthandler');
  return request;
};

instance.interceptors.request.use((request) => requestHandler(request));

const logApi = (method, url, body = '', response) => {
  // eslint-disable-next-line no-console
  console.log(`${method} URL : ${url}\nHEADERS: `, body, `\nRESPONSE: `, response.data);
};
const GET = async (_URL) => {
  const response = await instance.get(_URL);
  logApi('GET', _URL, null, response);
  return response;
};

const POST = async (_URL, data = null) => {
  const response = await instance.post(_URL, data);
  logApi('POST', _URL, data, response);
  return response;
};

export { GET, POST };
