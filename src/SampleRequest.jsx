import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startRequest, abortRetry } from './ducks/sampleRequest';

export class SampleRequest extends Component {

  render() {
    const { sampleRequest } = this.props;

    return (
      <div>
        <h1>Get data from fake server</h1>
        <p>It will fail 75% of the time</p>
        <ul>
          {
            sampleRequest.data.map(name => <li key={name}>{name}</li>)
          }
        </ul>
        <button
          onClick={this.props.startRequest}
          disabled={!!sampleRequest.fetching}
        >
          Start Request
        </button>
        <button
          disabled={!sampleRequest.fetching}
          onClick={this.props.abortRetry}
          style={{ marginLeft: '20px' }}
        >
          Abort
        </button>
        <h2>Status</h2>
        <p>Status: {sampleRequest.status }</p>
        <p>Fetching: {JSON.stringify(sampleRequest.fetching) }</p>
        <p>Attempt: {sampleRequest.attempt }</p>
        <p>Next Attempt in: {sampleRequest.timeLeft }</p>


      </div>
    );
  }
}

const mapStateToProps = ({ sampleRequest }) => ({ sampleRequest });

const mapDispatchToProps = {
  startRequest,
  abortRetry,
};

export default connect(mapStateToProps, mapDispatchToProps)(SampleRequest);
