import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startRequest, abortRetry } from './ducks/pokemon';

export class About extends Component {

  render() {
    const { pokemon } = this.props;

    return (
      <div>
        <h1>Get data from server</h1>
        <ul>
          {
            pokemon.map(({ name }) => <li key={name}>{name}</li>)
          }
        </ul>
        <button onClick={this.props.startRequest}>Start Request</button>
        <button onClick={this.props.abortRetry}>Abort</button>
      </div>
    );
  }
}

const mapStateToProps = ({ pokemon }) => ({ pokemon });

const mapDispatchToProps = {
  startRequest,
  abortRetry,
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
