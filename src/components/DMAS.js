import React from "react";
import ShowResult from "./ShowResult";

function DMAS(props){
    const division = props.a / props.b;
    const multiplication = props.a * props.b;
    const subtraction = props.a - props.b;
    const addition = props.a + props.b;
    return (
       <div>
           <ShowResult
            div={division}
            mul={multiplication}
            sub={subtraction}
            add={addition}
            /> 
       </div>
    );

}

export default DMAS;