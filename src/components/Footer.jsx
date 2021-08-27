import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="wrapper">
                    <div class="brandLogo">
                        <a class="navbar-brand" href="/">ARV-DigiTech</a>
                    </div>

                    <div className="about">
                        <div className="header">
                            <span>About Us</span>
                            <div className="warp">
                                <p>
                                    <a href="/contact">
                                        We're Hiring
                                    </a>
                                </p>
                                <p>
                                    <a href="/contact">Our Customer</a>
                                </p>
                                <p>
                                    <a href="contact">Blog Post</a>
                                </p>
                                <p>
                                    <a href="/contact">Help and Support</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="contacts">
                        <div className="header">
                            <span>Contact Us</span>
                        </div>
                        <div className="warp">
                            <p><i className="fas fa-phone-alt"></i>
                                <a href="/contact">+123 456 789</a>
                            </p>
                            <p><i className="fas fa-map-marker-alt"></i>
                                <a href="/contact">Contact Us</a>
                            </p>
                        </div>
                    </div>
                    <div className="social">
                        <div className="text">Reach Out to our social Media</div>
                        <div className="icon">
                            <i className="fab fa-facebook" aria-hidden="true"></i>
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                            <i className="fab fa-youtube" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div className="copy">
                    <p>Copyright © 2021 arvdigitech all rights reserved</p>
                </div>
            </footer>
        </div>
    )
}
