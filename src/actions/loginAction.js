import AppConstants from '../constants/loginTypes';
import appDispatcher from '../dispatchers/appDispatcher';
import WebApi from '../api/WebApi';


export default {
    login( userName,password ,history){
        var value = WebApi.login(userName,password);
        console.log('loginAction ');
        if (value){
          history.pushState(null, '/users')
        }
    }
  }
