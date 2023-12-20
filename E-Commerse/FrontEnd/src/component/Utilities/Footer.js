import React from 'react'
import '../Styles//footer.css'

const Footer = () => {
    
    return (<>

        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">                       
                        <h6>About</h6>
                        <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include   .</p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul className="footer-links">
                            <li><a href=" /">Mens Section</a></li>
                            <li><a href="/">ALL</a></li>
                            <li><a href=" /">Women Section</a></li>
                            <li><a href="/">Jewelery</a></li>
                            <li><a href="/">Electronic</a></li>

                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li><a href="/src//component/Home.jsx">Home</a></li>
                            <li><a href="/src/component/Products.jsx">Products</a></li>
                            <li><a href="/ogin">Login </a></li>
                            <li><a href="/signup">Sign up</a></li>

                        </ul>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                            <a href="#">Scanfcode</a>.
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                            <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>


    )
}

export default Footer