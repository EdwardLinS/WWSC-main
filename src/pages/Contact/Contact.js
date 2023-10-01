/** @format */

import "./Contact.css";
import { useTranslation } from "react-i18next";

export default function Contact() {
    const { t, i18n } = useTranslation("global");

    const lang = i18n.language;
    // console.log(i18n.language);

    return (
        <div className="wwsc-container">
            <div className="image-container">
                <img src="/assets/Contact/contact-picture.png" id="contact-pic" alt="WWSC office building." />
                <div className="image-caption">
                    {t("contact_us.img_caption")}
                </div>
            </div>
            {lang === "en" && (
                <div className="img-text-container">
                    <h1>Contact Us</h1>
                    <h4>Contact Information of World Wiser Sport Committee:</h4>

                    <div className="contact-info">
                        <p>Address: 709 E. Colorado Boulevard, Suite 270, Pasadena, CA 91101, USA</p>
                        <p>Tel: 626.795.7485</p>
                        <p>
                            Email:
                            <em>
                                <a href="mailto:info@worldwisersport.org">info@worldwisersport.org</a>
                            </em>
                        </p>
                    </div>

                    <h4>Welcome To Visit Us</h4>
                    <p>Please contact us in advance prior to your visit. Thank you!</p>

                    <hr />

                    <h3>Directions to the Office of World Wiser Sport Committee (Google Map)</h3>
                    <div className="w3-border w3-round w3-cell w3-padding-small">
                        <iframe
                            title="WWSC Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6604.005481577774!2d-118.13583700000001!3d34.146272!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c36801966f21%3A0xc4a93365b11ed05!2s709%20E%20Colorado%20Blvd%20%23270%2C%20Pasadena%2C%20CA%2091101!5e0!3m2!1sen!2sus!4v1696109017921!5m2!1sen!2sus"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            )}
            {lang === "zhHant" && (
                <div className="img-text-container">
                    <h1>聯絡我們</h1>
                    <h4>世界Wiser運動委員會的聯絡訊息:</h4>

                    <div className="contact-info">
                        <p>住址: : 709 E. Colorado Boulevard, Suite 270, Pasadena, CA 91101, USA</p>
                        <p>聯絡電話: 626.795.7485</p>
                        <p>
                            電子郵件信箱:
                            <em>
                                <a href="mailto:info@worldwisersport.org">info@worldwisersport.org</a>
                            </em>
                        </p>
                    </div>

                    <h4>歡迎來訪！</h4>
                    <p>來訪前，請事先聯絡我們，謝謝!</p>

                    <hr />

                    <h3>訪問WWSC辦公室的行駛路線(Google 地圖)</h3>
                    <div className="w3-border w3-round w3-cell w3-padding-small">
                        <iframe
                            title="WWSC Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6604.005481577774!2d-118.13583700000001!3d34.146272!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c36801966f21%3A0xc4a93365b11ed05!2s709%20E%20Colorado%20Blvd%20%23270%2C%20Pasadena%2C%20CA%2091101!5e0!3m2!1sen!2sus!4v1696109017921!5m2!1sen!2sus"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            )}
            {lang === "zhHans" && (
                <div className="img-text-container">
                    <h1>联络我们</h1>
                    <h4>世界Wiser运动委员会的联络讯息:</h4>

                    <div className="contact-info">
                        <p>住址: : 709 E. Colorado Boulevard, Suite 270, Pasadena, CA 91101, USA</p>
                        <p>联络电话: 626.795.7485</p>
                        <p>
                            电子邮件信箱:
                            <em>
                                <a href="mailto:info@worldwisersport.org">info@worldwisersport.org</a>
                            </em>
                        </p>
                    </div>

                    <h4>欢迎来访！</h4>
                    <p>来访前，请事先联络我们，谢谢!</p>

                    <hr />

                    <h3>访问WWSC办公室的行驶路线(Google 地图)</h3>
                    <div className="w3-border w3-round w3-cell w3-padding-small">
                        <iframe
                            title="WWSC Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6604.005481577774!2d-118.13583700000001!3d34.146272!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c36801966f21%3A0xc4a93365b11ed05!2s709%20E%20Colorado%20Blvd%20%23270%2C%20Pasadena%2C%20CA%2091101!5e0!3m2!1sen!2sus!4v1696109017921!5m2!1sen!2sus"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
}
