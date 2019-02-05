import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const OptionModal = (props) => (
    <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.handleClearSelectedOptions}
      contentLabel="Selected Option"
      >
      <h3>Selected Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.handleClearSelectedOptions}>Okay</button>
    </Modal>
);

export default OptionModal;
