import React from "react";

import Option from "./Option";

export default class Options extends React.Component {
  render() {
    return (
      <div>
        <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
          <button
            className="button button--link"
            onClick={this.props.handleDeleteOptions}
          >
            Remove all
          </button>
        </div>
        {this.props.options.length === 0 && <p className="widget__message">Please add option.</p>}
        {this.props.options.map((option, index) => (
          <Option
            key={option}
            optionText={option}
            count={index + 1}
            handleDeleteOption={this.props.handleDeleteOption}
          ></Option>
        ))}
      </div>
    );
  }
}
