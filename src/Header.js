import React from 'react'

const Header = () => {
    return (
        <>
            <header className="main-header">
                <section className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last">
                            <h1 className="display-2">
                                Online Payment Made <br /> Easy For You.
                            </h1>
                            <p className="main-hero-para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusantium similique?
                             Voluptates vel, voluptatibus reprehenderit nesciunt consequatur quidem veritatis 
                             unde nam nihil consequuntur! Error dolorem, velit laboriosam explicabo 
                             eligendi optio.
                            </p>
                            <h3>Get early access for you</h3>
                            <div className="input-group mt-3">
                                <input type="text" className="rounded-pill w-75 w-lg-75 me-3 p-2 form-control-text" placeholder="Enter Your Email" />
                                <div className="input-group-button">Get it now</div>
                            </div>
                        </div>
                        {/* main header right side */}
                        <div className="col-12 col-lg-6 header-right-side main-herosection-images d-flex justify-content-center align-items-center order-md-first order-sm-first">
                            <img src="./images/hero1.jpeg" alt="heroimg" className="img-fluid" />
                            <img src="./images/hero4.png" alt="hero4img" className="img-fluid main-hero-img2" />
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

// var http = require('http')

// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type' :'text/html'});
//     res.end('Display Output');
// }).listen(8080);

export default Header
