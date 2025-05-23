import '../src/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footerSection">
                <div className="footerColumn">
                    <h4 className="topic">PROPERTIES</h4>
                        <ul>
                            <li className="spc">Buy</li>
                            <li className="spc">Rent</li>
                            <li className="spc">Commercial</li>
                            <li className="spc">Luxury Homes</li>
                            <li className="spc">New Developments</li>
                        </ul>
                </div>

                <div className="footerColumn">
                    <h4 className="topic">COMPANY</h4>
                        <ul>
                            <li className="spc">About Us</li>
                            <li className="spc">Careers</li>
                            <li className="spc">Blog</li>
                            <li className="spc">Press</li>
                            <li className="spc">Investor Relations</li>
                        </ul>
                </div>

                <div className="footerColumn">
                    <h4 className="topic">SUPPORT</h4>
                        <ul>
                            <li className="spc">Help Center</li>
                            <li className="spc">FAQs</li>
                            <li className="spc">Contact Us</li>
                            <li className="spc">Terms & Conditions</li>
                            <li className="spc">Privacy Policy</li>
                        </ul>
                </div>

                <div className="footerColumn">
                    <h4>STAY UPDATED</h4>
                    <form className="subscribeForm">
                        <input type="email" placeholder=" EMAIL"/>
                        <button type="subscribe">SUBSCRIBE</button>
                    </form>
                </div>
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
                    
        </footer>
    )
}
export default Footer;