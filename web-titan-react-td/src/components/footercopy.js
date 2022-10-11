import fb from '../images/FB.svg'
import tw from '../images/Twitter.svg'
import link from '../images/Linkdin.svg'
import yt from '../images/Youtube.svg'
import backk from '../images/backtotop.jpg'



function FooterCopy(){
    return(
        <div className="footer-cpr">
        <div className="text-1">© 2022 Titan Technology Corporation.All rights reserved. <a href="" className="copyright">
                Privacy &amp; Terms of Use</a></div>
        <div className="text-2">
            <p>Connect with us</p>
            <a href="">
                <img src={fb} alt="fb"/>
            </a>
            <a href="">
                <img src={tw} alt="tw"/>
            </a>
            <a href="">
                <img src={link} alt="link"/>
            </a>
            <a href="">
                <img src={yt} alt="yt"/>
            </a>
        </div>
        <div className="text-3">
            <a href="">
            <img src={backk} alt="backk"/>
            </a>
        </div>
        
    </div>
    )
}
export default FooterCopy;