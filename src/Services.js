import React,{useState} from 'react'
import serviceApi from './Api/serviceApi'

const Services = () => {

    const [servicedata, setservicedata] = useState(serviceApi);
    console.log(servicedata);

    return (
        <>
        <section className="service-main-container">
            <div className="container service-container">
                <h1 className="main_heading text-center fw-bold">How does it work</h1>
                <div className="row">
                    {servicedata.map((curElem) => {
                        const {id,logo,title,info} = curElem;
                        console.log(title);
                        return(
                            <>
                    <div className="col-12 col-lg-4 text-center Service-container-subdiv" key={id}>
                    <i class={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para">
                        {info}
                    </p>
                    </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </section>
        </>
    )
}

export default Services
