import React, { Component } from 'react';
import {  NavItem, Popover, PopoverHeader } from 'reactstrap';



class Profile extends Component{
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
    
    render(){
        return(
            <div>
               <NavItem id="profile" type="" >
                                            Profle
                                            </NavItem> 
                                            <Popover placement="bottom" isOpen={this.state.popoverOpen} target="profile" toggle={this.toggle}>
                                            <PopoverHeader>
                                                profile
                                            </PopoverHeader>
                                            <PopoverHeader>
                                                Messages
                                            </PopoverHeader>
                                            <PopoverHeader>
                                                Settings
                                            </PopoverHeader>
                                            
                                            <PopoverHeader>
                                                About
                                            </PopoverHeader>
                                            <PopoverHeader>
                                                News
                                            </PopoverHeader>
                                            <PopoverHeader>
                                                FAQs
                                            </PopoverHeader>
                                            <PopoverHeader>
                                                Contact
                                            </PopoverHeader>
                                            <PopoverHeader>
                                                Logout
                                            </PopoverHeader>
                                            <PopoverHeader>
                                                Sign out
                                            </PopoverHeader>

                                        </Popover> 
            </div>
        )
    }
    
}

export default Profile;