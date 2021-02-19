import React from 'react';
import image1 from '../image1.jpg';

export  class Login extends React.Component{

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
                      <label htmlFor="email">Email</label>
                      <input type="email" placeholder="email" required/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" placeholder="password" required/>
                  </div>
              </div>
              <div className="div-footer">
                  <button type="button" className="bnt"> Enter </button>
              </div>
          </div>
        );
    }
}