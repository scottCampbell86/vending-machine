import React, { Component } from 'react';
import '../CSS/Soda.css';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

class Soda extends Component {
  render() {
    return (
      <div>
        <h1>SODA</h1>
        <Link to='/'>Back</Link>
      </div>
    );
  }
}

export default Soda;