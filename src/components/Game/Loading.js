import React, { Component } from 'react';
import logo from '../../media/images/botellas.png';
import './Style.css';


class Loading extends Component {
  render () {
    return (
      <div className="flex_custom">
        <img src={logo} alt="botellas" className="bottle" />
        <div className="title">
          <h4>cargando...</h4>
        </div>
      </div>
    )
  }
}

export default Loading;