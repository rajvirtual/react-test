import React from 'react';
import loginAction from '../actions/loginAction'
export default class Login extends React.Component {
  static contextTypes = {
       history: React.PropTypes.object
   }

  constructor(props){
    super(props);
    this.history = props.history;
    this.userName = '';
    this.password = '';
  }
  userNameChange(e){
    this.setState(
      {userName : e.target.value}
    );
  }
  passwordChange(e){
    this.setState(
      {password : e.target.value}
    );

  }

  render(){
    return (
      <form
        role="form"
        className="form form-horizontal col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2"
        style={{marginTop:50}}>

        <div className="panel panel-info" >

        <div className="panel-heading">

            <div className="panel-title">
              Sign In
            </div>

          </div>

          <div
            style={{paddingTop:30}}
            classNameName="panel-body" >

            <div
              style={{marginBottom: 25}}
              className="input-group">

              <span className="input-group-addon">

                <i className="glyphicon glyphicon-user">

                </i>

              </span>


              <input
                id="login-username"
                type="text"
                className="form-control"
                name="username"
                onChange= { this.userNameChange.bind(this)}
                placeholder="username or email">
              </input>

            </div>


            <div
              style={{marginBottom: 25}}
              className="input-group">


              <span className="input-group-addon">
                <i className="glyphicon glyphicon-lock">
                </i>
              </span>

              <input
                id="login-password"
                type="password"
                className="form-control"
                name="password"
                onChange= {::this.passwordChange}
                placeholder="password">

              </input>

            </div>

            <div className="input-group" style={{paddingLeft:10}}>
              <div className="checkbox">
                <label>
                  <input
                    id="login-remember"
                    type="checkbox"
                    name="remember"
                    value="1">
                  </input> Remember me
                </label>
              </div>
            </div>

            <div style={{marginTop:10}} className="form-group">
              <div className="col-sm-12 controls" style={{paddingLeft:20}}>
                  <a
                  id="btn-login"
                  href="#" onClick={()=> loginAction.login(this.state.userName,this.state.password,this.history)}
                  className="btn btn-primary">Login</a>
              </div>
            </div>
          </div>
        </div>

      </form>
    );
  }
};

export default Login;
