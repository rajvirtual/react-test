import AppDispatcher from '../dispatchers/appDispatcher';
import userTypes from '../constants/userTypes';
import { EventEmitter } from 'events';
import WebApi from '../api/WebApi';

const CHANGE_EVENT = 'change'

let _persons = [];

class UserStore extends EventEmitter {
  constructor() {
		super();
	}

  emitChange(){
    this.emit( CHANGE_EVENT )
  }

  addListener( callback ){
    this.on(CHANGE_EVENT, callback )
  }

  removeListener( callback ){
    this.remove( CHANGE_EVENT, callback )
  }

  getPersons(){
    return _persons;
  }

  getPersonById(id){
    return _persons.find(p=>p.id==id);
  }
}

var uStore = new UserStore();

AppDispatcher.register(payload => {
  console.log("AppDispatcher.register")
	let { action } = payload;
  console.log(action);
	switch (action.actionType) {
    case userTypes.INIT_USERS:
               console.log("AppDispatcher.register INIT_USERS");
               _persons =[];
              _persons = _persons.concat(action.persons);
               uStore.emit(CHANGE_EVENT);
              break;
          case userTypes.DELETE_USER:
              WebApi.deleteUser(action.person);
              _persons.splice( _persons.findIndex( i => i === action.person ), 1 );
              uStore.emit(CHANGE_EVENT);
          break;
          case userTypes.ADD_USER:
               console.log("Store Add User")
              _persons = _persons.concat(action.person);
              uStore.emit(CHANGE_EVENT);
          break;
          case userTypes.UPDATE_USER:
               console.log("Store Update User")
               let index = _persons.findIndex( i => i === action.person )
              _persons[index] = action.person;
              uStore.emit(CHANGE_EVENT);
          break;
		default:
			return true;
	}
});


export default uStore;
