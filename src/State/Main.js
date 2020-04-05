import React, { Component } from 'react'
import Comp from './Comp';
import Axios from 'axios';

export default class Main extends Component {
    constructor(props) {
         super(props);
        this.state={
            data:'',
            dd:'',
            value:''
        }
        var self=this;
        Axios.get("https://localhost:44316/api/MarketPlaces/CheckMarketPlace/1")
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response)
                    if (response.data.data === -1 || response.data.data === -2 || response.data.data === -3) {
                        return 0;
                    }
                    else {
                        for (let i = 0; i < response.data.length; i++) 
                        {
                            switch (response.data[i].name.toLowerCase()) {
                                case "amazon":
                                    self.setState({
                                        dd: response.data[i].ecommerce,
                                        AmazonAuthToken: response.data[i].authToken,
                                        AmazonAuthClient: response.data[i].authClient,
                                    });
                                    break;
                                case "ebay":
                                    self.setState({
                                        EbayUrl: response.data[i].ecommerce,
                                        EbayAuthToken: response.data[i].authToken,
                                        EbayAuthClient: response.data[i].authClient,
                                    });
                                    break;
                                case "bigcommerce":
                                    self.setState({
                                        BigCommerceUrl: response.data[i].ecommerce,
                                        BigCommerceAuthToken: response.data[i].authToken,
                                        BigCommerceAuthClient: response.data[i].authClient,
                                    });
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                }
                });
    }

    render() {
        // console.log("value "+this.state.value)
        return (
            <div>
            Main :{this.state.data}
           
                <Comp Url="Shiv" AuthClient={this.state.AmazonAuthClient} AuthToken={this.state.AmazonAuthToken} dd={this.state.dd} />
                <Comp Url="Rishabh" AuthClient={this.state.AmazonAuthClient} AuthToken={this.state.AmazonAuthToken} dd={this.state.dd} />
                <Comp Url="Rahul"AuthClient={this.state.AmazonAuthClient} AuthToken={this.state.AmazonAuthToken} dd={this.state.dd} />
                
            </div>
        )
    }
    componentDidMount() {
        const Key='value';
        const value="Shivanth";
        this.setState({
            [Key]:value
        })
    }
}
