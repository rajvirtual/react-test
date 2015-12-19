import React from 'react';
const App  = (props) => {
  return (
    <div className="main-container">
      <nav
        className="navbar navbar-primary"
        role="navigation">
        <div className="col-sm-7" style={{marginTop: 15}}>
            <button type="button" className="navbar-toggle" data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>

          </button>
          <a className="navbar-brand" href="#">
              <img className="hidden-xs" src="http://placehold.it/150x80/266080/fff?text=Billing" alt=""/>
              <img className="visible-xs" src="http://placehold.it/120x40&text=Logo" alt=""/>
          </a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
      </nav>

      <div className="container" style={{marginTop:80}}>

      <div className='row' >
        {props.children}
      </div>
      </div>

    </div>
  );
};

export default App
