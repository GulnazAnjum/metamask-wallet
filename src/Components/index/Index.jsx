import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from  "react-router-dom"
import './Index.css'
const Index = () => {
    return (
        <div>
     <Button variant="primary" className='importaccount'>Import Wallet</Button>
<Link to="/Testpage"> <Button variant="primary" className='createaccount'>Create new Wallet</Button></Link> 
        </div>
    );
};

export default Index;