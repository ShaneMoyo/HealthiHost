import { request } from './request';

export default { 
  verify(){
    return request.get('/auth/verify');
  },
  signin(credentials){
    return request.post('/auth/signin', credentials);
  },
  signup(credentials){
    return request.post('/auth', credentials);
  }
};