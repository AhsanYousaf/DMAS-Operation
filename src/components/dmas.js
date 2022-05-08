import React from "react";
import ShowResult from "./ShowResult";

function DMAS(props){
    
    const a = props.a;
    const b = props.b;


    function add(){
        return  (a + b);
    }

    function sub(){
        return  (a - b);
    }

    function mul(){
        return (a * b);
    }

    function div(){
        return (a / b);
    }


    return (
       <div>
           <ShowResult
            div={div()}
            mul={mul()}
            sub={sub()}
            add={add()}
            /> 
       </div>
    );

}

export default DMAS;
