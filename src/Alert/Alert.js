import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
export default class AlertDemo extends Component {
    render() {
        return (
            <div>
                <Alert variant="primary">
                    This is a alert with
                </Alert>
                <Alert variant="secondary">
                    This is a alert with
                </Alert>
                <Alert variant="success">
                    This is a alert with
                </Alert>
                <Alert variant="danger">
                    This is a alert with
                </Alert>
                <Alert variant="warning">
                    This is a alert with
                </Alert>
                <Alert variant="info">
                    This is a alert with
                </Alert>
                <Alert variant="light">
                    This is a alert with
                </Alert>
                <Alert variant="dark">
                    This is a alert with
                </Alert>
                <Alert variant="primary">This is{' '}
                <Alert.Link href="#" >an example link</Alert.Link>. Give it a click if you</Alert>

                <Alert variant="success">
                    <Alert.Heading>Hey, nice to see you</Alert.Heading>
                        <p>
                            Aww yeah, you successfully read this important alert message. This example
                            text is going to run a bit longer so that you can see how spacing within an
                            alert works with this kind of content.
                        </p>
                    <hr />
                        <p className="mb-0">
                            Whenever you need to, be sure to use margin utilities to keep things nice
                            and tidy.
                           
                            <div className="d-flex justify-content-end">
                            <Button variant="outline-success">OK</Button>
                            </div>
                        </p>
                </Alert>
                
            </div>
        )
    }
}
