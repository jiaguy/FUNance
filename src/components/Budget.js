import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


function onSubmit() {
    alert("You've submitted your values!");
}

function Budget() {
    return (

        <div className="Budget" style={{textAlign: 'center', width: '100%', overflow: 'hidden'}}>
            <div style={{ width: '40%', float: 'left' }}>

            <h1>My Monthly Earnings Calculator</h1>

            <Form>
                <Form.Group controlId="formBasicSalary">
                    <Form.Label>Enter your hourly salary:</Form.Label>
                    <Form.Control type="salary" placeholder="Amount of money" />
                </Form.Group>

                <Form.Group controlId="formBasicHours">
                    <Form.Label>Enter the number of hours worked each week:</Form.Label>
                    <Form.Control type="hours" placeholder="Number of hours" />
                </Form.Group>

                <Form.Group controlId="formBasicBudget">
                    <Form.Label>Enter your monthly budget:</Form.Label>
                    <Form.Control type="budget" placeholder="How much I want to spend" />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={onSubmit}>
                    Submit
                </Button>
            </Form>
            </div>

            <div style={{width: '40%', marginLeft: '620px' }}>
                
                <h1>My Monthly Budget Worksheet</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Costs</th>
                        <th>Budget</th>
                        <th>Actual</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Food</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Transportation</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Shopping</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>School activities</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Hobbies</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Complete the rest of your budget worksheet</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Total:__________________________</td>
                        <td>Total:__________________________</td>
                    </tr>
                </tbody>
                </Table>
            </div>
        </div>

    );

}

export default Budget;
