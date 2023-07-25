import React, { Component } from 'react';
import './style.css';
import Container from './class.js';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: 'red' };
  }
  /* static getDerivedStateFromProps(props, state) {
    return { favoritecolor: props.favoris };
  }*/
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: 'yellow' });
    }, 4000);
  }

  shouldComponentUpdate() {
    return true;
  }

  changeColor = () => {
    this.setState({ favoritecolor: 'violet' });
  };
  /* getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById('div1').innerHTML =
      'previous Update ' + prevState.favoritecolor;
  }*/
  componentDidUpdate() {
    document.getElementById('div2').innerHTML =
      'next update ' + this.state.favoritecolor;
  }

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>
          {' '}
          cliquer
        </button>
        <div id="div1"></div>
        <div id="div2"></div>
        <Container />
      </div>
    );
  }
}
