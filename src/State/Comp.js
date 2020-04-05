import React, { Component } from 'react'
import Axios from 'axios';

export default class Comp extends Component {
    constructor(props) {
         super(props);
        this.state={
            url:this.props.Url,
            authToken:'',
            aithClient:'',
            data:this.props.dd
        }
    }
    handleSetValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        // console.log(e.target.value)
    //    console.log(this.state.url)
    }
    // SetSatte=()=>{
    //     Axios.get(`https://cors-anywhere.herokuapp.com/${this.state.url}`, {
    //         headers: {
    //             "Accept": 'application/json',
    //             "Content-Type": 'application/json',
    //             'X-Auth-Token': this.state.authToken,
    //             'X-Auth-Client': this.state.authClient,
    //         }
    //     }).then(function (response) {
    //         console.log(response);
    //         if (response.status === 200) {
    //             alert("hello");
    //             // self.uploadData();
    //         }
            
    //         else {
    //             alert("Internal Error Please Try After Some Time or Contact Admin");
    //         }
    //     }).catch(function (error, status) {
    //         console.log("1"+error.response.data);
    //         console.log("2"+error.response.status);
    //         console.log("3"+error.response.headers);
    //         console.log("4"+error.request)
    //         console.log("5"+error.config);
    //         alert("Check your URL,AuthToken and AuthClient or may Network error");
    //     });
        
    // }
    ha=(event)=>{
        event.preventDefault();
        this.setState({
            url:event.target[0].value,
            authToken:event.target[1].value,
            authClient:event.target[2].value
        })

    //    this.SetSatte();
    //     alert(JSON.stringify(this.state));
        
    }
    // componentDidMount() {
    //     console.log(this.props.Url)
    // }

    render() {
        // console.log(this.state.data);
        return (
            <div>
             <form onSubmit={this.ha}>
             {this.state.data}<br />
            {/* Props:{this.props.Url}<br />
            State:{this.state.url}<br />
            State:{this.state.authClient}<br />
            State:{this.state.authToken}<br /> */}
                <input type="text"  defaultValue={this.props.Url} name="url" onChange={this.handleSetValue} />
                <input type="text"  defaultValue={this.props.AuthToken} name="authToken" onChange={this.handleSetValue} />
                <input type="text"  defaultValue={this.props.AuthClient} name="authClient" onChange={this.handleSetValue} />
                <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }

    data=(Data)=>{
        if(Data==="Shiv")
        {
            console.log(Data)
        }

    }

    componentDidMount() {
       this.data(this.state.url);
        
    }
}

