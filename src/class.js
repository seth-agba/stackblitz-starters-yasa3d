import React, { Component } from 'react';

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  myHeader = () => {
    this.setState({ show: false });
  };
  render() {
    let damn;
    if (this.state.show) {
      damn = <Control />;
    }
    return (
      <div>
        {damn}{' '}
        <button type="button" onClick={this.myHeader}>
          {' '}
          clicker{' '}
        </button>
      </div>
    );
  }
}

class Control extends Component {
  componentWillUnmount() {
    alert('le composant va être démonter');
  }

  render() {
    return (
      <div>
        <h1> vie sur nous </h1>
      </div>
    );
  }
}
