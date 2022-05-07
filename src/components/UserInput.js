import React, { useState } from "react";
import DMAS from "./DMAS";



function UserInput() {
    const [a,setA] = useState(null)
    const [b,setB] = useState(null)
    return (
        <div>
        <h1>Enter two numbers:</h1>
        <input type="number" placeholder="Enter First Number" value={a} onChange={e => setA(e.target.value)} />
        <input type="number" placeholder="Enter Second Number" value={b} onChange={e => setB(e.target.value)}  />
        <DMAS a={a} b={b}/>
        </div>
    );
}

export default UserInput;