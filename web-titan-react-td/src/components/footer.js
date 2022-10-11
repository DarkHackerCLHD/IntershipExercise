import map from '../images/map.svg'

function Footer() {
    return (
        <div className="main-footer" id="main-footer">
            <a href="" className="uppercase">CONTACT US</a>

            <div className="find">
                <a href="javascript:;" className="uppercase-click">
                    <span>FIND OUT US ON GOOGLE MAP</span>
                    <img src={map} alt="map" height="20" />
                </a>
            </div>
        </div>
    );
}
export default Footer;