import React from 'react';
import userStore from  '../stores/userStore';
import {Link} from 'react-router';
import userAction from '../actions/userActions';
import WebApi from '../api/WebApi';

export default class AddUser extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.history = props.history;
    this.props = props;
    this.state = {
      person : {
          fullname:"",
          email:"",
          age:0,
          address:""
     }
    }
  }

  initUser(){
    if (this.props.params && this.props.params.userid){
        var person =  userStore.getPersonById(this.props.params.userid);
        this.refs.fullname.value = person.get('FullName');
        this.refs.email.value =person.get('Email');
        this.refs.age.value =person.get('Age');
        this.refs.address.value =person.get('Address');
    }
  }

  componentDidMount(){
    this.initUser();
   }

  handleClick(e) {
			let { fullname } = this.refs;
      let { email } = this.refs;
      let { age } = this.refs;
      let { address } = this.refs;
      var person = {
        id: this.props.params.userid,
        fullname:fullname.value,
        email:email.value,
        age:age.value ? parseInt(age.value) : null,
        address:address.value,
      }
     userAction.addUser(person);
     this.history.pushState(null,'/users');
	}
	render() {
  return(
     <div>
       <div className="row">
           <div className="col-sm-12">
               <div className="panel panel-primary">
                   <div className="panel-heading">Add / Modify User</div>
                   <div className="panel-body">
                     <fieldset>
                       <div className="row">
                          <div className="col-sm-12 form-group">
                              <label className="col-sm-4 control-label input-sm">Full Name:</label>
                              <div className="col-sm-6">
                                    <input
                                    type='text'
                                    ref='fullname'
                                    className='form-control'
                                    placeholder='Full Name'
                                   />
                              </div>
                          </div>
                      </div>
                      <div className="row">
                         <div className="col-sm-12 form-group">
                             <label className="col-sm-4 control-label input-sm">Email:</label>
                             <div className="col-sm-6">
                                   <input
                                   type='email'
                                   ref='email'
                                   className='form-control'
                                   placeholder='Email'
                                  />
                             </div>
                         </div>
                     </div>
                     <div className="row">
                        <div className="col-sm-12 form-group">
                            <label className="col-sm-4 control-label input-sm">Age:</label>
                            <div className="col-sm-6">
                                  <input
                                  type='number'
                                  ref='age'
                                  className='form-control'
                                  placeholder='Age'
                                 />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                       <div className="col-sm-12 form-group">
                           <label className="col-sm-4 control-label input-sm">Address:</label>
                           <div className="col-sm-6">
                                 <input
                                 type='text'
                                 ref='address'
                                 className='form-control'
                                 placeholder='Address'
                                />
                           </div>
                       </div>
                   </div>
                     </fieldset>
                 </div>
               </div>
             </div>
             <div className="form-group">
             <div className="col-sm-12">
                 <button className="btn btn-primary" type="submit" onClick={this.handleClick} >Save</button>
                 <Link className="btn btn-link" to="users">Reset</Link>
             </div>
           </div>
        </div>

     </div>

  )
};
};

export default AddUser;
