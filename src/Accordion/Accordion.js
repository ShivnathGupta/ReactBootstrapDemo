import React from 'react'
import { Card, Button, Accordion } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

export default function AccordionDemo() {
    return (
        <React.Fragment>
         <FontAwesome
        // className="super-crazy-colors"
        name="fa-ebay"
        size="2x"
      />
        <Accordion>

      <Accordion.Toggle style={{borderRadius:"20px",border:"none",background:"#eaeaea",position:"relative"}}  eventKey="0"><FontAwesome
        className="super-crazy-colors"
        name="plus"
      /></Accordion.Toggle>
     sjdfbsdbfo
    <Accordion.Collapse eventKey="0">
      <Card.Body>
       <Button variant="success"> <FontAwesome
        className="super-crazy-colors"
        name="plus"
      /> Sync</Button>
      
       </Card.Body>
    </Accordion.Collapse>
</Accordion>

</React.Fragment>
    )
}
