import {dispatch, register} from '../dispatchers/appDispatcher';
import LoginTypes from '../constants/loginTypes';
import { EventEmitter } from 'events';
import WebApiAPI from '../api/WebApi';
const CHANGE_EVENT = 'change';

const AccountStore = Object.assign(EventEmitter.prototype, {
  emitChange(){
    this.emit( CHANGE_EVENT )
  },

  addChangeListener( callback ){
    this.on( CHANGE_EVENT, callback )
  },

  removeChangeListener( callback ){
    this.removeListener( CHANGE_EVENT, callback )
  }

});
