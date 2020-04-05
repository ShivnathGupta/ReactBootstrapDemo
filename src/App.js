import React from 'react';
import './App.css';
import AlertDemo from './Alert/Alert';
import HeadingDemo from './Heading/Heading'; 
import SpinnerDemo from './Spinner/Spinner';
import TabsDemo from './Tabs/Tabs';
import ToastDemo from './Toast/Toast';
import Example from './Overlay/Overlay';
import AccordionDemo from './Accordion/Accordion';
import Main from './State/Main';
import MainDemo from './Inte/Main';
import './App.css'

function App() {
  return (
      <React.Fragment>
{/* 
<div class="divTable">
<div class="divTableHeading">
<div class="divTableRow">
<div class="divTableCell">dsfbdsbfosdbfo</div>
<div class="divTableCell">dsfbdsbfosdbfo</div>
<div class="divTableCell">dsfbdsbfosdbfo</div>
<div class="divTableCell">dsfbdsbfosdbfo</div>
<div class="divTableCell">dsfbdsbfosdbfo</div>
<div class="divTableCell">dsfbdsbfosdbfo</div>
<div class="divTableCell">dsfbdsbfosdbfo</div>
<div class="divTableCell">dsfbdsbfosdbfo</div>
<div class="divTableCell">dsfbdsbfosdbfo</div>
</div>
</div>

<div class="divTableBody">
<div class="divTableRow">
<div class="divTableCell">dsfbdsbfosdbfo</div>
<div class="divTableCell">dsfbdsbfosdbfo</div>
<div class="divTableCell">dsfbdsbfosdbfo</div>
<div class="divTableCell">dsfbdsbfosdbfo</div>
<div class="divTableCell">dsfbdsbfosdbfo</div>
<div class="divTableCell">dsfbdsbfosdbfo</div>
<div class="divTableCell">dsfbdsbfosdbfo</div>
<div class="divTableCell">dsfbdsbfosdbfo</div>
<div class="divTableCell">dsfbdsbfosdbfo</div>
</div>
<div class="divTableRow">
<div class="divTableCell">dsfbdsbfosdbfo</div>
<div class="divTableCell">dsfbdsbfosdbfo</div>
<div class="divTableCell">dsfbdsbfosdbfo</div>
<div class="divTableCell">dsfbdsbfosdbfo</div>
<div class="divTableCell">dsfbdsbfosdbfo</div>
<div class="divTableCell">dsfbdsbfosdbfo</div>
<div class="divTableCell">dsfbdsbfosdbfo</div>
<div class="divTableCell">dsfbdsbfosdbfo</div>
<div class="divTableCell">dsfbdsbfosdbfo</div>
</div>
</div>
</div> */}

{/* <hr/> */}
{/* <div class="table table-bordered">
  <div class="row">
    <div class="col">TD</div>
    <div class="col">TD</div>
    <div class="col">TD</div>
    <div class="col">TD</div>
    <div class="col">TD</div>
  </div>
<div class="row">
    <div class="col">TD</div>
    <div class="col">TD</div>
    <div class="col">TD</div>
    <div class="col">TD</div>
  </div>
</div>
<hr/> */}
<button >DGO</button>

<br/>
<br/>
<div class="table" >
  <div class="row p-3" style={{borderTop:"1px solid #eceeef"}}>
    <div class="col" >col</div>
    <div class="col" >col</div>
    <div class="col">col</div>
    <div class="col">col</div>
  </div>
  <div class="row p-3" style={{borderTop:"1px solid #eceeef"}}>
    <div class="col-8">col-8</div>
    <div class="col-4">col-4</div>
  </div>
</div>





{/* 





<div class="Table">
    <div class="Title">
        <p>This is a Table</p>
    </div>
    <div class="Heading">
        <div class="Cell">
            <p>Heading 1</p>
        </div>
        <div class="Cell">
            <p>Heading 2</p>
        </div>
        <div class="Cell">
            <p>Heading 3</p>
        </div>
    </div>
    <div class="Row">
        <div class="Cell">
            <p>Row 1 Column 1</p>
        </div>
        <div class="Cell">
            <p>Row 1 Column 2</p>
        </div>
        <div class="Cell">
            <p>Row 1 Column 3</p>
        </div>
    </div>
    <div class="Row">
        <div class="Cell">
            <p>Row 2 Column 1</p>
        </div>
        <div class="Cell">
            <p>Row 2 Column 2</p>
        </div>
        <div class="Cell">
            <p>Row 2 Column 3</p>
        </div>
    </div>
</div> */}

{/* <hr />
<hr /> */}
{/* 
<table className="table" >
                                       
                                        <thead>
                                            <tr>
                                                <td><input type="Checkbox" /></td>
                                                <td>Date</td>
                                                <td>Order Id</td>
                                                <td>Customer</td>
                                                <td>Status</td>
                                                <td>Total</td>
                                                <td>Action</td>
                                                <td>Sync</td>
                                            </tr>
                                        </thead>
                                        <thead>
                                            <tr >
                                                <td colspan="5"><input type="Checkbox" /></td>
                                                <td>Date</td>
                                                <td>Order Id</td>
                                                <td>Customer</td>
                                                <td>Status</td>
                                                <td>Total</td>
                                                <td>Action</td>
                                                <td>Sync</td>
                                            </tr>
                                        </thead>

</table> */}









      
    <Main/>
      <Example />
      <ToastDemo/>
      <TabsDemo />
        <AlertDemo />
        <MainDemo/>
        <AccordionDemo />
        <HeadingDemo />
        <SpinnerDemo/>

        
      </React.Fragment>
  );
}

export default App;
