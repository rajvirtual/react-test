import AppConstants from '../constants/userTypes';
import appDispatcher from '../dispatchers/appDispatcher';
import WebApi from '../api/WebApi';

export default {
  initUsers(){
    WebApi.initUsers().then((persons)=>{
      console.log("login Action initUsers");
      console.log(persons);
      appDispatcher.handleAction({
       actionType: AppConstants.INIT_USERS,
       persons: persons
    },(err)=>{
        console.log(err);
    })
    });
   },
  deleteUser(item){
    appDispatcher.handleAction({
     actionType: AppConstants.DELETE_USER,
     person: item
  })
},
addUser(item){
  if (!item.id){
    WebApi.addUser(item).then(()=>{
      appDispatcher.handleAction({
       actionType: AppConstants.ADD_USER,
       person: item
    });
    })
  }
  else{
        WebApi.updateUser(item).then(()=>{
          appDispatcher.handleAction({
           actionType: AppConstants.UPDATE_USER,
           person: item
        });
        })

  }
 }

}
