import React from 'react';
import image1 from '../image1.jpg';
import api from '../api';
import {  Redirect } from 'react-router-dom';

export  class Register extends React.Component{


    constructor(props){
        super(props)
        this.state={
            name: '',
            email: '',
            password: '',
            occupation: '',
            redirectTo: null
         }

         this.handleChangeName = this.handleChangeName.bind(this);
         this.handleChangeEmail = this.handleChangeEmail.bind(this);
         this.handleChangePassword = this.handleChangePassword.bind(this);
         this.handleChangeOccupation = this.handleChangeOccupation.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeName(e) {   
                         this.setState({name: e.target.value}); 
                        }
    handleChangeEmail(e) { 
                            this.setState({email: e.target.value}); 
                           }

    handleChangePassword(e) {
                            this.setState({password: e.target.value}); 
                           }
    handleChangeOccupation(e) { 
                            this.setState({occupation: e.target.value}); 
                           }
   
   async handleSubmit(event){  
       event.preventDefault(); 

       
        const response = await api.post('/singUp',{ 
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            occupation: this.state.occupation})
        .then(response =>{
            localStorage.setItem('token',response.data.token);
            this.setState({redirectTo: "/listClients"})
        }).catch(err=>{
            console.log(err);
        });

        this.setState({ name: '', email: '',password: '', occupation: '' })
        
    }



    render(){
        if(localStorage.getItem("token") != null){
            return(
               <Redirect to={this.state.redirectTo}/>
            );
        }
       // const { name, email, password, occupation } = this.state;

        return(
          <div className="base-container" ref={this.props.containerRef}>
              <div className="base-content">
                  <div className="base-image1">
                      <img src={image1}/>
                  </div>
              </div>
              <form onSubmit={this.handleSubmit}>
              <div className="form">
                  <div className="form-group">
                      <label htmlFor="username">Name</label>
                      <input type="text" placeholder="name" required  value={this.state.name} onChange={ this.handleChangeName} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" placeholder="email" required value={this.state.email} onChange={ this.handleChangeEmail}/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" placeholder="password" required value={this.state.password} onChange={ this.handleChangePassword}/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="occupation">Occupation</label>
                      <input type="text" placeholder="ex: student" required value={this.state.occupation} onChange={ this.handleChangeOccupation}/>
                  </div>
              </div>
              <div className="div-footer">
                  <button type="submit" className="bnt"> Register </button>
              </div>
              </form>
          </div>
        );
    }
}