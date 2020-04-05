import React, { Component } from 'react'
import InteDemo from './Inte';

export default class MainDemo extends Component {
    constructor(props) {
         super(props);
        this.state={
            url:"this.props.Url",
        }
    }
    render() {
       
        return (
            
            <div>
            <InteDemo UrlData={this.state.url} />
                
            </div>
        )
    }
}
