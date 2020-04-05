import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button'

export default class SpinnerDemo extends Component {
    render() {
        return (
            <div >
                <Spinner animation="grow" style={{fontSize:"200px"}} />
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                <Spinner animation="border" variant="primary" style={{height:"200px",width:"200px"}} />
                <Spinner animation="border" variant="secondary" style={{fontSize:"200px"}} />
                <Spinner animation="border" variant="success" />
                <Spinner animation="border" variant="danger" />
                <Spinner animation="border" variant="warning" />
                <Spinner animation="border" variant="info" />
                <Spinner animation="border" variant="light" />
                <Spinner animation="border" variant="dark" />
                <Spinner animation="grow" variant="primary" style={{height:"200px",width:"200px"}} />
                <Spinner animation="grow" variant="secondary" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="light" />
                <Spinner animation="grow" variant="dark" />
                <Spinner animation="border" size="sm" />
                <Spinner animation="grow" size="sm" />

                <ButtonToolbar>
                <Button variant="primary">
                    <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    />
                    <span className="sr-only">Loading...</span>
                </Button>
                <Button variant="primary" disabled>
                    <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    />
                    Loading...
                </Button>
                </ButtonToolbar>
            </div>
        )
    }
}
