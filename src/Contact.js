import React, {useState} from 'react'

const Contact = () => {
    const [userData,setUserdata] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: "",
    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserdata({ ...userData, [name]: value});
    };

    // connection between firbase
    const submitData = async (event) => {
        event.preventDefault();
        const {firstName,lastName,phone,email,address,message} = userData;

        if(firstName && lastName && phone && email && address && message){

        const res = await fetch('https://reactpayoutwebsite-default-rtdb.firebaseio.com/userDataRecords.json',{
        method: "POST",
        Headers: {
            "Content-Type" : "application/json",
        },
        body:JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
        }),
        }
        );
        if(res){
            setUserdata({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                address: "",
                message: "",
            });
            alert("Data Stored");
        } else{
            alert("please fill the data")
        }
    }
    else{
        alert("please fill the data")
    }
    };


    return (
        <>
            <section className="contactus-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="contact-leftside col-12 col-lg-5">
                                    <h1>Connect With Our Sales Team.</h1>
                                    <p className="main-hero-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Dolorem accusantium nihil voluptatum aperiam facilis quia fugit 
                                    rerum quis ad suscipit quaerat.
                                    </p>
                                    <figure>
                                     <img src="./images/contactus.jpg" alt="ContactImage" className="img-fluid"/>
                                    </figure>
                                </div>
                                {/* right side contact form */}

                                <div className="contact-rightside col-12 col-lg-7">
                                    <form method="POST">
                                            <div className="row">
                                                <div className="col-12 col-lg-6 contact-input-field">
                                                    <input type="text" name="firstName" value={userData.firstName} onChange={postUserData} id="" className="form-control" placeholder="First Name"/>
                                                </div>
                                                <div className="col-12 col-lg-6 contact-input-field">
                                                    <input type="text" name="lastName" value={userData.lastName} onChange={postUserData} id="" className="form-control" placeholder="Last Name"/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-lg-6 contact-input-field">
                                                    <input type="text" name="phone" value={userData.phone} onChange={postUserData} id="" className="form-control" placeholder="Phone Number"/>
                                                </div>
                                                <div className="col-12 col-lg-6 contact-input-field">
                                                    <input type="text" name="email" value={userData.email} onChange={postUserData} id="" className="form-control" placeholder="Email ID"/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <input type="text" name="address" value={userData.address} onChange={postUserData} id="" className="form-control contact-input-field" placeholder="Add Address" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <input type="text" name="message" value={userData.message} onChange={postUserData} id="" className="form-control" placeholder="Enter Your Message" />
                                                </div>
                                            </div>
                                            <div class="form-check form-checkbox-style">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                    <label class="form-check-label" className="main-hero-para">
                                                         I agree that the payout ltd may contact me at the
                                                         email address or phone number above.
                                                    </label>
                                            </div>
                                            <button type="submit" className="btn btn-style w-100" onClick={submitData}>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
