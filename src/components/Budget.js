import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


function onSubmit() {
    alert("You've submitted your values!");
}

function Budget() {
    return (

        <div>
            <br></br>
            <h1>My Monthly Earnings Calculator</h1>

            <Form>
                <Form.Group controlId="formBasicSalary">
                    <Form.Label>Enter your hourly salary:</Form.Label>
                    <Form.Control type="salary" placeholder="Enter salary" />
                </Form.Group>

                <Form.Group controlId="formBasicHours">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="hours" placeholder="Enter hours" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={onSubmit}>
                    Submit
                </Button>
            </Form>


            <br></br>
            <h1>My Budget Worksheet</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Cost</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2021/01/09</td>
                        <td>A second-hand bicycle</td>
                        <td>-$80</td>
                        <td>$160</td>
                    </tr>
                    <tr>
                        <td>2021/01/03</td>
                        <td>Art contest first place prize</td>
                        <td>+$100</td>
                        <td>$260</td>
                    </tr>
                    <tr>
                        <td>2021/01/03</td>
                        <td>Candy</td>
                        <td>-$2</td>
                        <td>$258</td>
                    </tr>
                </tbody>
            </Table>
        </div>

    );

}

export default Budget;