import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie', //앞에 기본으로 설정할 API 일부를 설정해 줄 수 있다.
  headers: { 'Content-type': 'application/json' },
});

// api.interceptors.request.use(
//   function (config) {
//     // request 전송 전에 할 일
//     console.log('request start: ', config);
//     return config;
//   },
//   function (error) {
//     // request 에러 났을 때
//     console.log('request error: ', error);
//     return Promise.reject(error);
//   }
// );

// response 인터셉터
api.interceptors.response.use(
  function (response) {
    // response 데이터 활용
    console.log('get response : ', response);

    return response;
  },
  function (error) {
    // response 에러났을 때
    console.log('response error: ', error);

    return Promise.reject(error);
  }
);

export default api;
