import React, { Component } from 'react';
import {Link} from "react-router-dom"


class Clients extends Component {

    render() { 
    const clients =[
        {
        id: "1",
         firstName:"Ajao",
         lastName:"Mahmud",
         phone:"070-6792-7251",
         email:"ajaodlp@gmail.com",
         balance: "100"
    },
    {
        id: "2",
         firstName:"Ajao",
         lastName:"Ataul-mujeeb",
         phone:"070-6792-7251",
         email:"ajaodlp@gmail.com",
         balance: "1000"
    }
]
      
    if (clients) {
        return ( 
            <div>
                <div className="row">
                    <div className="col-md-6"> 
                         <h2>
                             {" "}
                             <i className="fas fa-users"></i>clients {" "}
                             </h2>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>

                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">email</th>
                        <th scope="col">balance</th>
                        <th/>
                        </tr>
                    </thead>
                    <tbody>
                    {clients.map(client =>(
                        <tr key= {client.id}>
                        
                        <td> {client.firstName} {client.lastName}</td>
                        <td>{client.email}</td>
                        <td>{client.balance}</td>
                        <td>
                            <Link to={`/client/${client.id}`} className="btn btn-secondary btn-sm"><i className="fas fa-arrow-circle-right"></i>Details
                            </Link>
                        </td>
                        </tr>
                        ))}    
                    </tbody> 
            </table>
            </div>
         );
    }else{
        return <h1>loading...</h1>
    }
        
    }
}
 
export default Clients;
