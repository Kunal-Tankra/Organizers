
import { Apple, Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import React, { useEffect } from 'react'
import "./Footer.css"
import { useLocation } from 'react-router-dom';

const Footer = () => {
    // route path
    const pathLocation = useLocation()
    useEffect(() => {
        // scroll to top while route changes
        window.scrollTo(0, 0)
    }, [pathLocation]);

    return (
        <div className='footer'>
            <h1><em><strong>#</strong>WEARE<strong>BFC</strong></em></h1>

            <div className="socialMedia_and_mailBox">
                {/* social media */}
                <div className='footerChildren'>
                    <h3>BLUES ON SOCIAL MEDIA</h3>
                    <p>Follow us for exclusive content</p>

                    <div className="socialMedia_icons">
                        <a href="https://www.facebook.com/bengalurufootballclub">
                            <Facebook fontSize='large' />
                        </a>
                        <a href="https://www.instagram.com/bengalurufc/">
                            <Instagram fontSize='large' />
                        </a>
                        <a href="https://twitter.com/bengalurufc">
                            <Twitter fontSize='large' />
                        </a>
                        <a href="https://www.youtube.com/channel/UC2BEzuBTbjuVzEdDD5Z6-Nw">
                            <YouTube fontSize='large' />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.bengalurufc.bengalurufc">
                            <AddBoxIcon fontSize='large' />
                        </a>
                        <a href="https://apps.apple.com/in/app/bengaluru-fc/id1069722666">
                            <Apple fontSize='large' />
                        </a>
                    </div>
                </div>

                {/* mail inbox */}
                <div className='footerChildren'>
                    <h3>STRAIGHT IN YOUR INBOX!</h3>
                    <p>Sign up for our Official Newsletter</p>

                    <form className="mailInbox" action="mailto:kuchhbi@gmail.com">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your E-mail ID" />
                        <button type="submit" className="btn btn-outline-dark">SUBSCRIBE!</button>
                    </form>


                </div>
            </div>
        </div>
    )
}

export default Footer
