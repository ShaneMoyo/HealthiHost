import { request } from './request';

export default { 
  signin(credentials){
    return request.post('/auth/signin', credentials);
  },
  signup(credentials){
    return request.post('/auth', credentials);
  }
};