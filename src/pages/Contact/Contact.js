import './Contact.css'

export default function Contact() {
    return (
        <div>
            <div className="image-container">
                <img src="/assets/Contact/contact-picture.png" id="contact-pic" alt="WWSC office building." />

                <div className="image-text">
                    <h4>Outside view of the building where the office of World Wiser Sport Committee is located</h4>
                    <p>709 E. Colorado Boulevard, Suite 270, Pasadena, CA 91101, USA</p>
                </div>
            </div>

            <div className="custom-container">
                <div className="text">
                    <h1>Contact Us</h1>
                    <h2>Contact Information of World Wiser Sport Committee:</h2>

                    <div className="contact-info">
                        <p>Address: 709 E. Colorado Boulevard, Suite 270, Pasadena, CA 91101, USA</p>
                        <p>Tel: 626.795.7485/ Fax: 626.795.7488</p>
                        <p>Email: <em><a href="mailto:info@worldwisersport.org">info@worldwisersport.org</a></em></p>
                    </div>

                    <h1>Welcome To Visit Us</h1>
                    <p>Please contact us in advance prior to your visit. Thank you!</p>

                    <hr />

                    <h2>Directions to the Office of World Wiser Sport Committee (Google Map)</h2>
                </div>
            </div>
        </div>
    )
}
