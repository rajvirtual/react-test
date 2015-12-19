import React from 'react';
import {Link} from 'react-router';

const UserList = ( props ) => {
   var persons =  props.persons.map((item, index) => {
        return(
           <tr key={index}>
             <td>
                <Link to={ `/users/${item.id}` } >
                      {item.get('FullName')}
                 </Link>
             </td>
             <td>
               {item.get('Age')}
             </td>
             <td>
               {item.get('Email')}
             </td>
             <td>
               {item.get('Address')}
             </td>
             <td>
               <button className='btn btn-link' onClick={props.onDeleteClick.bind(null,item)}>Delete</button>
             </td>
           </tr>
         )
   });

    return (
      <div>
        <div className="row">
            <div className="col-sm-12">
                <div className="panel panel-primary">
                    <div className="panel-heading">Persons</div>
                    <div className="panelBody">
                        <table className="table tableBordered tableStriped">
                            <thead>
                                <tr>
                                    <th><p>Name</p></th>
                                    <th><p>Age</p></th>
                                    <th><p>Email</p></th>
                                    <th><p>Address</p></th>
                                   <th><p>Action</p></th>
                                </tr>
                            </thead>
                            <tbody>
                               {persons}
                             </tbody>
                         </table>
                     </div>
                 </div>
             </div>
         </div>
      </div>
    );
};

export default UserList;
