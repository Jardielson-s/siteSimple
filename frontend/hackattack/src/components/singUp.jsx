import React from 'react';
import image1 from '../image1.jpg';

export  class Register extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
          <div className="base-container" ref={this.props.containerRef}>
              <div className="base-content">
                  <div className="base-image1">
                      <img src={image1}/>
                  </div>
              </div>
              <div className="form">
                  <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input type="text" placeholder="Username" required/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" placeholder="email" required/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" placeholder="password" required/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="occupation">Occupation</label>
                      <input type="text" placeholder="ex: student" required/>
                  </div>
              </div>
              <div className="div-footer">
                  <button type="button" className="bnt"> Register </button>
              </div>
          </div>
        );
    }
}