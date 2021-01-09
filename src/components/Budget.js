import React, { Component } from 'react';

// import bootstrap components here
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


function onSubmit() {
    

}

function Budget() {
    return (

        <div>

            <Form>
                <Form.Group controlId="formBasicSalary">
                    <Form.Label>Enter your hourly salary:</Form.Label>
                    <Form.Control type="salary" placeholder="Enter salary" />
                </Form.Group>

                <Form.Group controlId="formBasicHours">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="hours" placeholder="Enter hours" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            {/* <label htmlFor="basic-url">Enter your hourly salary:</label>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Amount (to the nearest dollar)" />

                <FormControl inputRef={input => this.textInput = input} type='text' className='amount' />

            </InputGroup>

            <label htmlFor="basic-url">Enter your hours of work per week:</label>
            <InputGroup className="mb-3">
                <FormControl aria-label="Hours/week" />
                <InputGroup.Append>
                    <InputGroup.Text>hours</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>

            <Button onclick="BudgetCalculation()">Submit</Button>{' '} */}

            <br></br>

            {/* Your monthly
            Now you have some money! Time to create a budget
First, calculate your monthly budget. Enter your hourly salary. Then multiply by hours per week. Then multiply by four! (they can do this in the app). This is how much you earn in a month!
How much money do you want to spend on snacks per week? (If you don’t know, think about a daily budget and multiply it by 7) That means x*4 = ____ this is your monthly snack budget
Now you try! Think of what you would spend on in a month
Text field option [              ] Add lines for things you want to budget for. Then add a value next to each item to add a budget. Use our mini calculator to the side if you’re not sure.
Did you add a savings field?
No? Then make sure you include this! Yes, you need to budget for SAVINGS
Make sure that you are saving at least 20% of your monthly income. Multiply your monthly income by 0.2 and enter it in the text field (this actually checks if you did it right)
Now add a savings line that is at least this number!
Now, is your budget over? Then you can go back and re-balance your budget, and make sure that number is green! */}



            <br></br>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Budget</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </div>

    );

}

export default Budget;