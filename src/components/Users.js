import React from 'react';
import userAction from '../actions/userActions';
import userStore from '../stores/userStore';
import UserList from './UserList';
import {Link} from 'react-router'

export default class Users extends React.Component {
  constructor(props){
    super(props);
    this.state ={persons:[]};
    this._onChange = this._onChange.bind(this);
  }

handleDeleteUser (item){
  console.log('Delete Click');
  userAction.deleteUser(item);
}

_onChange() {
  this.setState({
    persons: userStore.getPersons()
  });
}

componentDidMount() {
  //Register the listener
  userAction.initUsers();
  userStore.addListener(this._onChange);
}

componentDidUnMount() {
  //Remove the listener
  userStore.removeListener(this._onChange);
}

  render(){
      return (
        <div>
          <UserList persons={this.state.persons} onDeleteClick={this.handleDeleteUser} />
            <div className="form-group">
                <div className="col-sm-12">
                    <Link to="/adduser" className="btn btn-primary">Add</Link>
                </div>
            </div>
          </div>
      );
  }
}
