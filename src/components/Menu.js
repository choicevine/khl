import React, { Component } from 'react';
import { elastic as Quant } from 'react-burger-menu';

class Menu extends Component {
    render() {
        return (
            <Quant>
              <a className="menu-item" href="/">
                Home
              </a>
        
              <a className="menu-item" href="/laravel">
                Laravel
              </a>
        
              <a className="menu-item" href="/angular">
                Angular
              </a>
        
              <a className="menu-item" href="/react">
                React
              </a>
        
              <a className="menu-item" href="/vue">
                Vue
              </a>
        
              <a className="menu-item" href="/node">
                Node
              </a>
            </Quant>

        );
         
    }

};

export default Menu;