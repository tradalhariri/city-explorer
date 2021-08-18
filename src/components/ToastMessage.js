import React from "react";
import { Toast} from 'react-bootstrap';

class ToastMessage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <Toast>
          <Toast.Body>
            <p>{this.props.status}</p>
            <p> {this.props.statusText}</p>

          </Toast.Body>
        </Toast>
        )
    }
}

export default ToastMessage;