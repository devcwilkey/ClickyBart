import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import BootStrapImage from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";


class imgModal extends Component {
  state = {
    open: false
  };

  componentDidMount() {
    console.log(this.props);
  }

  toggleModal = () => {
    this.setState({ open: !this.state.open });
  };

  render (props) {
    return (
      <div>
        <Button onClick={this.toggleModal} variant={this.props.buttonVariant} className='d-inline-block'>{this.props.buttonName}</Button>
        <Modal
          size="lg"
          show={this.state.open}
          onHide={this.toggleModal}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              {this.props.buttonName}: 12 Points to Win
            </Modal.Title>
          </Modal.Header>
          <Modal.Body  className="d-flex justify-content-center">
            <BootStrapImage src={this.props.ImgSrc} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default imgModal