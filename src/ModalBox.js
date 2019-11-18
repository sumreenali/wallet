import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

const ModalBox = (props) => (
  <Modal trigger={ <Button  className="ui button yellow create_btn"
         type="button"> {props.buttonText} </Button>}
         centered={false} className="ui tiny modal ">
    
    <Modal.Content image >
    <div className="ui icon message">
      <Image wrapped  src={props.imgSrc} width="50px" />
      <Modal.Description className="content left20">
        <Header><i className="notched circle loading icon">
          </i>{props.headerText}</Header>
          <p>{ props.message}</p>
      </Modal.Description>
      </div>
    </Modal.Content>
    
  </Modal>
)

export default ModalBox
