import axios from 'axios';

const configuration = {
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  },
};

const instance = axios.create(configuration);

const requestHandler = (request) => {
  console.log(request);
  return request;
};

instance.interceptors.request.use((request) => requestHandler(request));

const logApi = (method, url, body = '', response) => {
  // eslint-disable-next-line no-console
  console.log(`${method} URL : ${url}\nHEADERS: `, body, `\nRESPONSE: `, response.data);
};
const GET = (_URL) => {
  return instance.get(_URL).then((response) => {
    logApi('GET', _URL, null, response);
    return response;
  });
};

const POST = (_URL, data = null) => {
  return instance.post(_URL, data).then((response) => {
    logApi('POST', _URL, data, response);
    return response;
  });
};

export { GET, POST };
