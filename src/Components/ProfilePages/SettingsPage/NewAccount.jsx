import React from 'react';
import { useState } from 'react';
import {Button} from "react-bootstrap"
import "./NewAccount.css"

const NewAccount = () => {
    const [count,setCount]=useState(1)
    return (
        <div>
        <p>Account{count}</p>
            <Button class="primary" onClick={()=>setCount(count+1)} className="Accountbutton">Create New Account</Button>
            <Button  className='AccountButton2'>Import an Account</Button>
        </div>
    );
};

export default NewAccount;