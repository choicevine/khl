import React, {Component } from 'react';
import {Media } from 'reactstrap';

class InboxItem extends Component{
    render(){
  
      return (
        <div>
             <Media>
            <Media left href="#">
            <Media object data-src="" alt="" />
            </Media>
            <Media body>
            < Media heading>
                Amaka Obasi
            </Media>
            Lorem Ipsum
            </Media>
            <tr>
                <td>5pm</td>
               <td> </td>
            </tr>
            </Media>
    );
          
        </div>
      );
    }
  }
  
  export default InboxItem;