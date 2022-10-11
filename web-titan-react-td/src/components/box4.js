import jobs from '../images/hiring.jpg'

function Box4() {
    return (
        <div className="box box-4">
            <h2>LATEST JOBS</h2>
            <div className="items">
                <div className="item">
                    <img src={jobs} alt="jobs" />
                    <div className="pb">
                        <p>Titan Technology Corporation is the place where we care about individuals. We offer a friendly, challenging, and collaborative home, where every staff is well-treated, enjoy valuable benefits and willing to share ownership with us.</p>
                        <input id="btnSubmitContact" type="submit" className="request-button" value="Join Us" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Box4;