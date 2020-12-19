import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Messages from './components/Messages';
import {Button } from 'reactstrap';
import samples from './sample-data';

//import Layout from './components/layout';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';


class App extends Component {
  getInitialState = function(){
    return {
      humans : {},
      store : {}
    }
  };
  loadSampleData= function(){
    this.setState(samples);
  }
  render() {
    
    
    return (
      <div className="App">
      
        <header className="App-header">
        <AppNavbar />
         
        </header>
        <body className="App-body">
        <div class ="column">
        <Button onClick="{this.loadSampleData">Load Sample</Button>
        <InboxPane />
          </div>
          
       </body>
      </div>
    );
  }
}


class InboxPane extends Component{
  
 
  render(){

    return (
      <div>
        <div>
          <Messages />
          
          </div>
        
        <table>

        </table>
        <InboxItem/>
        <hr />
      </div>
    );
  }
}
class InboxItem extends Component{
  
  render(){

    return (
      <div>
           
          <tr>
              <td>5pm</td>
             <td>rammy Sayar</td>
             <td> another </td>
          </tr>
          
  
        
      </div>
    );
  }
}



export default App;




