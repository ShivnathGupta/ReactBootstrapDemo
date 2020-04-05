import React, { useState, useRef } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import Overlay from 'react-bootstrap/Overlay';

      

      export default function Example() {
        const [show, setShow] = useState(false);
        const t = useRef(null);
        const t2 = useRef(null);
      
        return (
          <>
            <Button  onClick={() => setShow(!show)}>
              Click me!
            </Button>
            <Overlay target={t.current} show={show} placement="right">
            <React.Fragment><Spinner animation="border" variant="primary" style={{ height: "100px", width: "100px", position: "absolute", top: "350px", left: "950px" }} /> <em style={{ position: "absolute", top: "435px", left: "974px" }}>Loading Please wait......</em></React.Fragment>
            </Overlay>
            <Button ref={t2} onClick={() => setShow(!show)}>
              Click me!
            </Button>
            <Overlay target={t2.current} show={show} placement="right">
            <React.Fragment><Spinner animation="border" variant="primary" style={{ height: "200px", width: "200px", position: "absolute", top: "350px", left: "950px" }} /> <em style={{ position: "absolute", top: "435px", left: "974px" }}>Loading Please wait......</em></React.Fragment>
            </Overlay>
          </>
        );
      }
  