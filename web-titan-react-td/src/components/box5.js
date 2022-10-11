import teams from '../images/teams.png'

function Box5() {
    return (
        <div className="box">
            <h2>REQUEST FOR INFORMATION</h2>
            <p>Thank for your interest in Titan. Please fill out the form to tell us about your area of needs. Our
                representative will contact you shortly.</p>

            <form name="contactForm" onsubmit="return onSubmitContactForm()" className="contact-form">
                <ul>
                    <li>
                        <input type="text" name="contactName" id="contactName" placeholder="Name (*)" />
                    </li>
                    <li>
                        <input type="text" name="contactEmail" id="contactEmail" placeholder="Email (*)" />
                    </li>
                    <li>
                        <input type="number" name="contactPhone" id="contactPhone" placeholder="Phone" />
                    </li>

                </ul>
                <ul>
                    <li>
                        <input type="text" name="contactSubject" id="contactSubject" placeholder="Subject (*)" />
                    </li>
                    <li>
                        <textarea name="contactDescription" rows="4" id="contactDescription"
                            placeholder="You're looking for (*)"></textarea>
                    </li>
                </ul>
                <ul>
                <input id="btnSubmitContact" type="submit" className="request-button" value="Request Now" />
                </ul>
                
                
            </form>
        </div>
    );
}
export default Box5;