import React from "react";
import Modal from "react-modal";
import Options from "./Options";

class OptionModal extends React.Component {
  render() {
    return (
      <Modal
        isOpen={!!this.props.selectedOption}
        contentLabel="Selected Option"
        ariaHideApp={false}
        onRequestClose={this.props.handleClearSelectedOption}
        closeTimeoutMS={200}
        className="modal"
      >
        <h3 className="modal__title">Selected Option</h3>
        {this.props.selectedOption && <p className="modal__body">{this.props.selectedOption}</p>}
        <button className="button" onClick={this.props.handleClearSelectedOption}>OK</button>
      </Modal>
    );
  }
}

export default OptionModal;


