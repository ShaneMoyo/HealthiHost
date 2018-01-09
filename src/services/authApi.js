import { request } from './request';

export default { 
  verify(){
    return request.get('/auth/verify');
  },
  signIn(credentials){
    return request.post('/auth/signin', credentials);
  },
  signUp(credentials){
    return request.post('/auth', credentials);
  }
};