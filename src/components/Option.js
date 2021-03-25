import React from 'react';
export default class Option extends React.Component {
    render() {
      return (
        <div className="option">
        <p className="option__text">{this.props.count}. {this.props.optionText}</p>
          <button
          className="button button--link"
            onClick={(e) => {
              this.props.handleDeleteOption(this.props.optionText);
            }}
          >
            {" "}
            remove{" "}
          </button>
        </div>
      );
    }
  }