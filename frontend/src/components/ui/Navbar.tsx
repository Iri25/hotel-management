import React, { ReactNode } from 'react';
import { useNavigate } from "react-router-dom";
import Button from './Button';
import Typography from './Typography';

export default function Navbar() {
    const navigate = useNavigate(); // Step 2: Get the navigate function

    return (
        <div className='flex items-center justify-between p-3 w-screen h-fit bg-white'>
            <button onClick={() => {navigate('/')}} ><Typography>Hotel booking</Typography></button>
            <Button onClick={() => {navigate('/account')}}>Account page</Button>
        </div>
    );
}
