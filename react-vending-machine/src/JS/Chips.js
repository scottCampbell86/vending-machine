import React, { Component } from 'react';
import '../CSS/Chips.css';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

class Chips extends Component {
  render() {
    return (
      <div>
        <h1>CHIPS</h1>
        <Link to='/'>Back</Link>
      </div>
    );
  }
}

export default Chips;