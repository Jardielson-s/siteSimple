import React from 'react';
import api from '../api';
import {  Redirect } from 'react-router-dom';
import image1 from '../image1.jpg';

export  class Login extends React.Component{

    constructor(props){
        super(props)

        this.state={
            email: '',
            password: '',
            redirectTo: null,
            err: null
        }
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeEmail(e){
        this.setState({email: e.target.value});
    }
    
    onChangePassword(e){
        this.setState({password: e.target.value});
    }

    async handleSubmit(e){
        e.preventDefault();


        const response = await api.post('/singIn',{
            email: this.state.email,
            password: this.state.password
        }).then(response=>{
            console.log(response.data.response)
            localStorage.setItem('token',response.data.token);
            this.setState({redirectTo: "/listClients"})
        })
        .catch(err=>{this.setState({ err:'password or email invalid'})});
        
        this.setState({ email: '',password: ''})

    }

    render(){
        if(localStorage.getItem("token") != null){
            return(
               <Redirect to={this.state.redirectTo}/>
            );
        }
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
                      <label htmlFor="email">Email</label>
                      <input type="email" placeholder="email" required value={this.state.email} onChange={this.onChangeEmail}/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" placeholder="password" required value={this.state.password} onChange={this.onChangePassword}/>
                  </div>
                  </div>
                  <div className="div-footer">
                  <button type="submit" className="bnt"> Enter </button>
                </div>
              </form>
             <div className="error">
                            { this.state.err }
            </div>
          </div>
        );
    }
}