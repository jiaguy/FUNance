import React, { Component } from 'react';

// import bootstrap components here
import Table from 'react-bootstrap/Table'


function Stats(props) { 
        return (
            <Table bordered hover size="sm">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Age:</td>
                    <td>{props.AgeNum}</td>
                </tr>
                <tr>
                    <td>Job:</td>
                    <td>{props.JobNm}</td>
                </tr>
                <tr>
                    <td>Balance:</td>
                    <td>{props.CurrBalance}</td>
                </tr>
            </tbody>
            </Table>
        );
  }

export default Stats;