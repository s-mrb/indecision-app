import React from 'react';
export default class Action extends React.Component {
    render() {
      return (
        <div>
          <button
          className="big-button"
            disabled={!this.props.hasOptions}
            onClick={this.props.handlePick}
          >
            What should i do?
          </button>
        </div>
      );
    }
  }