import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';



export default class TabsDemo extends Component {
    render() {
        return (
            <div>
                <Tabs id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home">
   Home Tab
  </Tab>
  <Tab eventKey="profile" title="Profile">
 Profile Tab
  </Tab>
  <Tab eventKey="contact" title="Contact" >
  Contact Tab
  </Tab>
</Tabs>
            </div>
        )
    }
}
