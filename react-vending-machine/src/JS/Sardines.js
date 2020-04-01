import React, { Component } from 'react';
import '../CSS/Sardines.css';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

class Sardines extends Component {
  render() {
    return (
      <div>
        <h1>Sardines for dinner</h1>
        <Link to='/'>Back</Link>
      </div>
    );
  }
}

export default Sardines;