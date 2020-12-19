import React, {Component} from 'react';
import MessageIcon from './MessageIcon';
import Profile from './Profile';
import Search from './search';
import Menu from './Menu';
//import NewPost from './NewPost';
//import Sidebar from './Sidebar.js';

import {
    NavLink,
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    
    } from 'reactstrap';

    class AppNavbar extends Component {
        
        state =[ {
            isOpen: false,
            popoverOpen: false
        }
    ]

        toggle = () => {
            this.setState([{
                isOpen: !this.state.isOpen,
                popoverOpen: !this.state.popoverOpen
            }]);
        }

            render() {
                return(
                    <div>
                    <Navbar color="dark" dark expand="sm" className="mb-5">
                        
                            <NavbarBrand href="/"> </NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                                <Collapse isOpen={this.state.isOpen} navbar>
                                    <Nav className="ml-auto" navbar>
                                        <NavItem>
                                            <NavLink href="#"> Home Icon </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="#"> Home </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="#"> Sessions</NavLink>        
                                        </NavItem>
                                        
                                        <NavItem>
                                            <NavLink href="https://www.facebook.com/?ref=tn_tnmn"> Me</NavLink>        
                                        </NavItem>
                                    </Nav>   
                                    
                                        < Search />
                                 
                                  
                                    <Nav className="ml-auto" navbar>
                                       
                                           
                                        <NavItem>
                                            <MessageIcon />
                                        </NavItem> 
                                        <NavItem>
                                            <NavLink href=""> </NavLink>        
                                        </NavItem>  
                                        <NavItem>
                                            <Profile />
                                        </NavItem>
                                        <NavItem>
                                            <Button onClick={this.loadSampledata}></Button>
                                            </NavItem>
                                                                
                                    </Nav>
                                    
                                </Collapse>
                            
                    </Navbar> 
                    <div>
                        
                    </div>
                    <Menu />
                </div>
                );
            }
    }
            

    export default AppNavbar;