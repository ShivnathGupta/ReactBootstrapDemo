import React, { Component } from 'react'

export default class InteDemo extends Component {
    constructor(props) {
         super(props);
        this.state={
            data:this.props.UrlData
            


        }
    }
    render() {
        console.log(this.state.data)
        return (
            <div>
            {this.state.UrlData}
            <input type="text"/>
                
            </div>
        )
    }
}
