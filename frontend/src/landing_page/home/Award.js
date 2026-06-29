import React from 'react';
function Awards() {
    return (  
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg'/>

                </div>
                <div className='col-6 p-5 '>
                    <h1>Largest stock  broker in India</h1>
                    <p className='mb-5'>2+ million Zerodh clients contributers to over 15% of all retail order volume in india daily by trading and investing in:</p>
                    <div className='row mb-3 '>
                        <div className='col-6 '>
                            <ul>
                        <li>Futures and Option</li>
                        <li>Commodity derivatives</li>
                        <li>Currency derivatives</li>
                    </ul>

                        </div>
                        <div className='col-6'>
                            <ul>
                        <li>Stock & IOPS</li>
                        <li>direct mutual funds</li>
                        <li>Bonds and  Govt. Securities</li>
                    </ul>
                        </div>
                    </div>

                    <img src='media/images/pressLogos.png' style={{width:"90%"}}/>
                    

                </div>
            </div>

        </div>
    );
}

export default Awards ;