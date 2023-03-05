import React from 'react';
import css from './Modal.module.css';

export default class Modal extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeOnEscape);
    document.addEventListener('click', this.closeOnClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeOnEscape);
    document.removeEventListener('click', this.closeOnClick);
  }

  closeOnEscape = event => {
    console.log(event)
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  closeOnClick = event => {
    console.dir(event.target)
    if (event.target.className === css.overlay) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={this.props.src} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}
