import '../src/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footerSection">
                <div className="footerColumn">
                    <h5 className="topic">PROPERTIES</h5>
                        <ul>
                            <li>Buy</li>
                            <li>Rent</li>
                            <li>Commercial</li>
                            <li>Luxury Homes</li>
                            <li>New Developments</li>
                        </ul>
                </div>

                <div className="footerColumn">
                    <h5 className="topic">COMPANY</h5>
                        <ul>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>Press</li>
                            <li>Investor Relations</li>
                        </ul>
                </div>

                <div className="footerColumn">
                    <h5 className="topic">SUPPORT</h5>
                        <ul>
                            <li>Help Center</li>
                            <li>FAQs</li>
                            <li>Contact Us</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                </div>

                <div className="footerColumn">
                    <h4>STAY UPDATED</h4>
                    <form className="subscribeForm">
                        <input type="email" placeholder="email"/>
                        <button type="subscribe">SUBSCRIBE</button>
                    </form>
                </div>

                <div className="footerBottom">
                    <div className="footerSocial">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-linkedin-in"></i>
                    </div>
                    <p>© 2025 Vishal Sudasinghe. All rights reserved.</p>
                </div>
                

                

                
            </div>
        </div>
    )
}
export default Footer;