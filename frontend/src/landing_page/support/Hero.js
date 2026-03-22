import React from 'react'
function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>
            <div className='p-5' id='supportWrapper'>
                <h4> Support Portal</h4>
                <a href="">Track Tickets</a>
            </div>
            <div className='row p-5 ' style={{marginLeft:"100px"}}>
                <div className='col-6 p-5'>
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg. how do I activate F&O' /><br />
                    <a href="">Track account opening</a>
                    <a href="" style={{marginLeft:"10px"}}>Track segment activation</a>
                    <a href="" style={{marginLeft:"10px"}}>Intraday <br /> margin</a>
                    <a href="" style={{marginLeft:"10px"}}>ite user manual</a>
                </div>
                <div className='col-6 p-5'>
                    <h1 className='fs-3' style={{marginLeft:"80px"}} >Featured</h1>
                    <ol style={{marginLeft:"80px"}}>
                        <li><a href="" style={{lineHeight:"2.5"}}>Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href="" style={{lineHeight:"2.5"}}>Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;