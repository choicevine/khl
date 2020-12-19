 import React, {Component } from 'react';
 import MessageNotification from './MessageNotification'
 import {  NavItem, Popover, PopoverHeader } from 'reactstrap';



class MessageIcon extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          popoverOpen: false
        };
      }
    
      toggle() {
        this.setState({
          popoverOpen: !this.state.popoverOpen
        });
      }
    
    render() {
        return(
            <div>
            <NavItem id="messages"  >
                                            Messages
                                            </NavItem> 
                                            <Popover placement="bottom" isOpen={this.state.popoverOpen} target="messages" toggle={this.toggle}>
                                            <PopoverHeader>
                                                < MessageNotification />
                                            </PopoverHeader>
                                            </Popover>           
                </div>

        );
    }
}


export default MessageIcon;
