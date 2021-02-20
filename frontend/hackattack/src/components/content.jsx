import React from 'react';
import './content.scss';
import api from '../api';




class Content extends React.Component{
    state={
        clients: []
    }

    async componentDidMount(){
        const  response = await api.get('/get')

        this.setState({ clients: response.data });
    }
    render(){
        const { clients } = this.state;

        return (
        <div className="App">
            <h1 className="list-clients">list clients</h1>
            {
                clients.map(client => (
                    <li key={client.id}>
                      <fieldset className="list-datas">  
                         <h2 className="data"> name: { client.name }</h2>
                         <h2 className="data"> email: { client.email }</h2>
                         <h2 className="data"> occupation: { client.occupation }</h2>
                      </fieldset>
                    </li>
                ))
            }
        </div> 
        )
    }
}

export default Content;