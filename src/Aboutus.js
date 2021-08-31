import React, {useState} from 'react'
import howtouse from './Api/howToUse';

const Aboutus = () => {

    const [howToUseData,setHowToUseData] = useState(howtouse);
    console.log(howToUseData);
    return (
        <>
            <section className="common-section our-services">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-service-rightside-img">
                            <img src="./images/hero3.jpg" alt="AboutusIMG" />
                            {/*Right Side Section Data*/ }
                        </div>
                        <div className="col-12 col-lg-7 our-services-list">
                            <h3 className="mini-title">-- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY</h3>
                            <h1 className="main_heading">How to use the App?</h1>
                            
                                {howToUseData.map((curElem)=>{
                                    const {id,title,info} = curElem;
                                    console.log(title);
                                    return(
                                        <>
                                        <div className="row our-services-info">
                                        <div className="col-1 our-services-number">{id}</div>
                                            <div className="col-10 our-services-data">
                                            <h2>{title}</h2>
                                            <p className="main-hero-para">
                                                {info}
                                            </p>
                                        </div>
                                        </div>
                                        </>
                                    );
                                })}
                                
                            <button className="btn-style btn-style-border">Learn more</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* second part section code */}

            <section className="common-section our-services our-services-rightside">
                <div className="container mb-5">
                    <div className="row">                        
                        <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
                            <h3 className="mini-title">-- SUPPORT IN ANY LANGUAGE</h3>
                            <h1 className="main_heading">World class support is <br /> available 24/7</h1>
                            
                                {howToUseData.map((curElem)=>{
                                    const {id,title,info} = curElem;
                                    console.log(title);
                                    return(
                                        <>
                                        <div className="row our-services-info">
                                        <div className="col-1 our-services-number">{id}</div>
                                            <div className="col-10 our-services-data">
                                            <h2>{title}</h2>
                                            <p className="main-hero-para">
                                                {info}
                                            </p>
                                        </div>
                                        </div>
                                        </>
                                    );
                                })}
                                
                            <button className="btn-style btn-style-border">Learn more</button>

                            {/*left Side Section Data*/ }
                        </div>
                        <div className="col-12 col-lg-5 our-service-leftside-img">
                            <img src="./images/hero5.jpeg" alt="AboutusIMG" />
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutus
