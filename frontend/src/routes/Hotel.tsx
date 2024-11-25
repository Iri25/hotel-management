import { useNavigate } from "react-router-dom";


export default function HotelPage() {
    const navigate = useNavigate(); 

    return (
        <>
            <p>Hotel Page</p>
            <button onClick={() => {navigate('/')}}>home page</button>
            <button onClick={() => {navigate('/account')}}>Account page</button>
        </>
    )

}

