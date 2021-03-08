import React from 'react';
import { Link } from 'react-router-dom';
import './content.scss';
import api from '../api';


class Content extends React.Component{

    constructor(props){
        super(props);

        this.state={
            clients: [],
            redirectTo: null,
            responseDelete: false
        }
        this.handleClick = this.handleClick.bind(this);
      
    }
    

    handleClick(){
        
        localStorage.removeItem("token");
        if(localStorage.getItem("token") == null){
            return(
                this.props.history.push('/')
            );
        }
    }
    async componentDidMount(){
        const  response = await api.get('/get')
        .then(response=>{
            this.setState({ clients: response.data });
        })
        .catch((err)=>{ this.setState({redirectTo: "/"})})
    
    }


      
    async handleSubmit(e,id){
         e.preventDefault();

         const response = await api.delete(`/delete/${id}`)
        .then(response =>{
            this.setState({ responseDelete: true});
            new Promise(()=>{
                <div className="div-deleted">
                    <h2 className="h2-deleted"> client deleted with success </h2>
                </div>
            })
           
           document.location.reload(true);
        })
        .catch(err => { alert(err);});

    }
    render(){
        const { clients } = this.state;

        if(this.state.redirectTo){
            return(
                <Link to={this.state.redirectTo}/>
            );
        }
    
        return (
        <div className="App">
            <h1 className="list-clients">list clients</h1>
            {
                clients.map(client => (
                    <li key={client.id}>
                     <form onSubmit={this.handleSubmit}>
                        <fieldset className="list-datas">  
                           <h2 className="data"> name: { client.name }</h2>
                           <h2 className="data"> email: { client.email }</h2>
                           <h2 className="data"> occupation: { client.occupation }</h2>
                           <button type="submit" className="bnt-delete" onClick={e => this.handleSubmit(e,client.id)}>Delete</button>
                        </fieldset>
                     </form>
                    </li>
                ))
            }
            <button className="bnt" onClick={this.handleClick}> Exit </button>
        </div> 
        )
    }
}

export default Content;