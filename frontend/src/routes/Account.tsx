import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";


export default function AccountPage() {
    const navigate = useNavigate(); // Step 2: Get the navigate function

    return (
        <>
            <p>ACCOUNT</p>
            <button onClick={() => {navigate('/')}}>Home page</button>
            <button onClick={() => {navigate('/hotel')}}>Hotel page</button>
        </>
    )

}

