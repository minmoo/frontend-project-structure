import axios from 'axios';
/* 
axios 인스턴스를 만들면 좋은점
1. API 클라이언트에 공통된 설정을 쉽게 넣어줄수 있다.
2. 쉽게 교체 가능
 */
const client = axios.create();

/*
global 설정

//API 주소를 다른 곳으로 사용함
client.defaults.baseURL = 'http://localhost:8081/';

//헤더 설정
client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';

//인터셉터 설정
axios.interceptors.response.use(
  (response) => {
    //요청 성공 시 특정 작업 수행
    return response;
  },
  (error) => {
    //요청 실패 시 특정 작업 수행
    return Promise.reject(error);
  },
);
*/
export default client;
