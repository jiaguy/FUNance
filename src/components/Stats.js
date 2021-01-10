import React, { } from 'react';

// import bootstrap components here

function Stats(props) {
    return (
        <table id="Stats-table">
            <tr>
                <td>Name:</td>
                <td>{props.Name}</td>
            </tr>
            <tr>
                <td>Level:</td>
                <td>2</td>
            </tr>
            <tr>
                <td>Job:</td>
                <td>Dog Walker</td>
            </tr>
            <tr>
                <td>Balance:</td>
                <td>$65.70</td>
            </tr>
        </table>
    );
}

function getLevel(){
    if(window.location.pathname==='/age10') {
        return("10");
    }
    else if(window.location.pathname==='/age11') {
        return("11");
    }
    else if(window.location.pathname==='/age12') {
        return("12");
    }
    else if(window.location.pathname==='/age13') {
        return("13");
    }
    else if(window.location.pathname==='/age14') {
        return("14");
    }
    else if(window.location.pathname==='/age15') {
        return("15");
    }
    else{
        return("");
    }
}

export default Stats;