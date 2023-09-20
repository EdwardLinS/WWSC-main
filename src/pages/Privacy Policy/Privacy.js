import './Privacy.css'

import { NavLink } from 'react-router-dom'

export default function Privacy() {

    return (
        <div>
            <div className="custom-container">
                <div className="text privacy">
                    <h1><strong>PRIVACY POLICY</strong></h1>
                    <p>Last Edited on <strong>11/08/2014</strong></p>
                    <p><strong>The World Wiser Sport Committee (“WWSC”) is committed to protecting your privacy.</strong> This privacy policy has been compiled to better serve those who are concerned with how their “personally identifiable information” is being used online. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your personally identifiable information in accordance with our website.</p>
                    <ol>
                        <li>
                            <h2 className='privacy-head'>TYPES OF INFORMATION WE COLLECT</h2>
                            <p>We collect the following two basic types of information:</p>
                            <h3>(1) Personally identifiable information</h3>
                            <p>Personally identifiable information, as used in US privacy law and information security, is the information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context.</p>
                            <p>You can visit our website without disclosing any information about yourself. However, to participate in any interactive features, including but not limited to registering or applying for training, subscribing to WWSC’s mailing list to receive information from WWSC such as newsletters or emails regarding news, notices, WWSC event information (collectively, the “Services”), you may have to sign up or register and provide accurate information about yourself to our website, as the services may not work properly without such information.</p>
                            <p>When using the services, we may ask you to provide all or some of the following personally identifiable information: your name, your address (including city, state/province, country of residence and zip/postal code), your email address, your telephone numbers, your gender, username and password.</p>
                            <h3>(2) Aggregate information</h3>
                            <p>Aggregate information means information about groups or categories of users, which does not identify and cannot reasonably be used to identify an individual user.</p>
                            <p>We may collect location information when you visit our website, including location information either provided by a mobile device interacting with one of our sites, or associated with your IP address, where we are permitted by law to process this information. The IP addresses that we collect are to analyze trends, administer the site, track user’s movement, and gather broad demographic information for aggregate use. IP addresses are not linked to personally identifiable information. Additionally, for system administration, detecting usage patterns and troubleshooting purposes, our web servers automatically log standard access information including browser type, access times, URL request, and referral URL. This information is not shared with any third parties and is used only within the WWSC on a need-to-know basis. Any individually identifiable information related to this data will never be used in any way other than the usage stated above without your explicit permission.</p>
                        </li>
                        <li>
                            <h2 className='privacy-head'>WHEN DO WE COLLECT INFORMATION?</h2>
                            <p>We collect information from you when you register on our site, subscribe to a newsletter, fill out a form or enter information on our site.</p>
                        </li>
                        <li>
                            <h2 className='privacy-head'>HOW DO WE USE YOUR INFORMATION?</h2>
                            <p>We may use the information we collected from you when you register, sign up for our newsletter, respond to a communication, surf the website, or use certain other site features in the following ways:</p>
                            <ul>
                                <li>To personalize user’s experience and to allow us to deliver the type of content and provide services in which you are most interested.</li>
                                <li>To improve our website in order to better serve you.</li>
                                <li>To allow us to better serve you in responding to your customer service requests.</li>
                                <li>To send periodic emails regarding our services.</li>
                            </ul>
                            <h3>(1) Confidentiality and Third Party Disclosure</h3>
                            <p>User’s records are regarded as confidential information and therefore will not be divulged to any third party; however, we may have to disclose such information if legally required to do so to the appropriate authorities.

                                We will not sell, share, or rent your personal information to any third party or use your e-mail address for unsolicited mail. Any emails sent by the WWSC will only be in connection with the provision of agreed services.

                                This does not include website hosting companies and other parties who assist us in operating our website, promoting our services, or providing service to you, so long as those parties agree to keep this information confidential.

                                Each user has the right to request sight of and copies of any and all of his or her records we keep, on the provision that we are given reasonable notice of such a request. Users are requested to retain copies of any literature issued in relation to the provision of our services. Where appropriate, we shall issue users with appropriate written information, handouts or copies of records as part of an agreed contract, for the benefit of both parties.
                            </p>
                            <h3>(2) Third Party Links</h3>
                            <p>Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these third party sites.</p>
                        </li>
                        <li>
                            <h2 className='privacy-head'>HOW DO WE PROTECT VISITOR INFORMATION?</h2>
                            <p>Your personally identifiable information is password protected, and any personally identifiable information you provide to the website is protected from unauthorized disclosure by reasonable technological measures. However, information provided to the WWSC is not transmitted via SSL encryption technology. We recommend that you do not divulge your password to anyone. At no time will anyone of the WWSC ask for your password via email.</p>
                        </li>
                        <li>
                            <h2>DO WE USE “COOKIE”?</h2>
                            <p>A cookie is a small piece of text sent to your browser by a website you visit. It helps the website to remember information about your visit, such as your preferred language and other settings. That can make your next visit of this site easier and more convenient for you.</p>
                            <p>Like most interactive websites, the WWSC’s website uses cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to enable the functionality of this area and ease of use for those people visiting.</p>
                        </li>
                        <li>
                            <h2>NOTIFICATION OF CHANGES</h2>
                            <p>The WWSC reserves the right to modify this Privacy Policy at any time. Please review this Policy from time to time to ensure your familiarity with its terms.</p>
                        </li>
                        <li>
                            <h2>CONTACTING US</h2>
                            <p>If at any time you would like to unsubscribe from receiving future emails, you can follow the instructions at the bottom of each email.</p>
                            <p>If there are any questions regarding this privacy policy you may contact us using the information below.</p>
                            <ul style={{ listStyle: 'none' }}>
                                <li><strong>World Wiser Sport Committee</strong> 709 E. Colorado Boulevard, Suite 270, Pasadena, CA 91101, USA Web Address: <NavLink to="/">https://worldwisersport.org/</NavLink> Email: <a href="info@worldwisersport.org">info@worldwisersport.org</a> Tel: (626) 795-7485; Fax: (626) 795-7488</li>
                            </ul>
                        </li>
                        <p>©2023 World Wiser Sport Committee. All Rights Reserved.</p>
                    </ol>


                </div>
            </div>
        </div>
    )
}
