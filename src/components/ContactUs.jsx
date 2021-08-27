import React from 'react';
import Footer from './Footer';



export default function ContactUs() {


    return (
        <div className='con_wrap'>
            <div className="contact">
                <div className="title">
                    <h2>Contact Us</h2>
                </div>

                <div className="field">
                    <h6>Feedback Form</h6>

                    <form>
                        <fieldset >
                            <div className="name">
                                <div className="form-group">
                                    <label htmlFor="fname">First Name</label>
                                    <input type="text" id="fname" className="form-control" placeholder="John" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="fname">Last Name</label>
                                    <input type="text" id="fname" className="form-control" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="mobem">
                                <div className="form-group">
                                    <label htmlFor="fname">Mobile</label>
                                    <input type="text" id="fname" className="form-control" placeholder="+91 1111 222244" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fname">Email</label>
                                    <input type="text" id="fname" className="form-control" placeholder="Johndoe@domain" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder='Typing...'></textarea>
                            </div>

                            <div className="action p-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" />
                                    <label className="form-check-label" htmlFor="disabledFieldsetCheck">
                                        I agree to <a href="/contact">Terms & Condition.</a>
                                    </label>
                                </div>
                                <input type="submit" className="btn btn-warning mt-2" value="Submit" />
                            </div>
                        </fieldset>
                    </form>

                </div>
            </div>


            <Footer />
        </div>
    )
}





