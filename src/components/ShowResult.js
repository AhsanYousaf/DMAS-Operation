import React from "react";

function ShowResult(props){

    return (
        <div>
            <h3>Following are the Results</h3>
            <h4>Division: {props.div}</h4>
            <h4>Multiplication: {props.mul}</h4>
            <h4>Subtraction: {props.sub}</h4>
            <h4>Addition: {props.add}</h4>
        </div>
    );
}

export default ShowResult;