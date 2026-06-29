import React from 'react';
import { useNavigate } from "react-router-dom";
function OpenAccount() {
     const navigate = useNavigate();
    return ( 
        <div className='coitainer p-5 mb-5'>
            <div className='row text-center'>
                
                <p>Medern platform and apps, ₹0 investment and flat ₹20 intraday and F& O trades.</p>
                 <button className='p-3 btn btn-primary fs-5 mb-5' style={{width:"25%",margin : "0 auto"}}   onClick={() => navigate("/signup")}>Signup up Now</button>
                <h1 className='mt-5'>Open a Zerodha account</h1>

            </div>

        </div>
     );
}

export default OpenAccount;