import React from 'react'
function Universe() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center'>

                <h1 className='fs-3'>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
               
                <div className='col-4 p-3 mt-5'>
                    <img src="media/smallcaselogo.png"  />
                    <p className='text-small text-muted mt-2'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/sensibullLogo.svg" width={"70%"} />
                    <p className='text-small text-muted mt-2'>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/streakLogo.png" width={"40%"} />
                    <p className='text-small text-muted mt-2'>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>

                
                <div className='col-4 p-3 mt-5'>
                    <img src="media/zerodhaFundhouse.png"width={"50%"}/>
                    <p className='text-small text-muted mt-2'>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/goldenpiLogo.png" width={"50%"} />
                    <p className='text-small text-muted mt-2'>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/dittoLogo.png" width={"40%"} />
                    <p className='text-small text-muted mt-2'>Personalized advice on life and health insurance. No spamand no mis-selling.</p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width: "20%", margin: "0 auto"}}>Signup Now</button>

            </div>
        </div>
     );
}

export default Universe;