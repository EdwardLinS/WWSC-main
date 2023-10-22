/** @format */

import "./Terms.css";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

export default function Terms() {
    const { i18n } = useTranslation("global");
    const lang = i18n.language;

    return (
        <div className="wwsc-container">
            <div className="term-image-container">
                <img src="/assets/other/terms_conditions.jpg" alt="terms_conditions" className="responsive" />
            </div>
            {lang === "en" && (
                <div className="img-text-container">
                    <h1>Website Terms and Conditions of Use</h1>
                    <div className="w3-section">
                        <h3>I. INTRODUCTION</h3>
                        <p>
                            Welcome to visit our web site at <Link to="/">https://worldwisersport.org/</Link> (the
                            “Site”). This Site is owned by the <strong>World Wiser Sport Committee</strong> (the
                            “WWSC”). By visiting our website, you are deemed to have read, understood, and agreed to
                            accept and adhere to the following terms and conditions as stated in this agreement
                            (hereafter referred to as “User Agreement”), along with our{" "}
                            <Link to="/wwsc-privacy-policy">Privacy Policy</Link> (please refer to the Privacy Policy
                            section below for more information).
                        </p>
                        <p className="no-ident">
                            This agreement is in effect as of <strong>November 12, 2014.</strong>
                        </p>
                        <p>
                            The following terminology applies to these Terms and Conditions, Privacy Policy and
                            Disclaimer Notice and any or all agreements: “Users”, “You” and “Your” refer to you, the
                            person accessing this website and accepting the website’s terms and conditions. “The WWSC”,
                            “Ourselves”, “We” and “Us”, refer to the World Wiser Sport Committee. “Party”, “Parties”, or
                            “Us”, refer to both the Users and ourselves, or either the Users or ourselves. Any use of
                            the above terminology or other words in the singular, plural, capitalization and/or he/she
                            or they, are taken as interchangeable and therefore as referring to same.
                        </p>
                    </div>
                    <div className="w3-section">
                        <h3>II. OWNERSHIP OF THE SITE AND ITS CONTENTS</h3>
                        <p>
                            This Site is owned by the WWSC. Unless otherwise indicated, all of the content featured or
                            displayed on this Site, including, but not limited to text, graphics, data, photographic
                            images, videos, sound, illustrations, and the selection and arrangement thereof (“WWSC
                            Content”), is owned by the WWSC, and all rights are reserved.
                        </p>
                    </div>
                    <div className="w3-section">
                        <h3>III. TRADEMARKS/COPYRIGHTS</h3>
                        <p>
                            WWSC Trademarks, Service Marks, the WWSC logo, and any other WWSC word marks, design, name
                            or slogan contained in the Site are the intellectual property of the WWSC, and may not be
                            copied, imitated or used, in whole or in part, without prior written permission of the WWSC.
                            All content and materials belonging to the WWSC (“WWSC Content”) available on the Site,
                            including but not limited to text, graphics, website name, images and logos are the
                            intellectual property of the WWSC, and are protected by applicable copyright and trademark
                            laws in the United States and other countries. Any unauthorized use, including but not
                            limited to the reproduction, distribution, display or transmission of any WWSC Content on
                            this Site is strictly prohibited, unless specifically authorized by the WWSC in writing.
                        </p>
                        <p>
                            Other third party trademarks, registered trademarks, and organization/company names and/or
                            their logos (“third party IP”) mentioned in the Site are the intellectual property of the
                            corresponding third party. Any unauthorized used of the third party IP should be prohibited,
                            unless specifically authorized by the corresponding third party. The WWSC will not be liable
                            or responsible for the unauthorized use of the third party IP by Users of the Site.
                        </p>
                    </div>
                    <div className="w3-section">
                        <h3>IV. RESPONSIBLE USE AND CONDUCT</h3>
                        <p>
                            By visiting our website and accessing the information, resources, services, registration,
                            training and applications we provide for you, either directly or indirectly (hereafter
                            referred to as “Resources”), you agree to use these Resources only for the purposes intended
                            as permitted by (a) the terms of this User Agreement, and (b) applicable laws, regulations
                            and generally accepted online practices or guidelines.
                        </p>
                        <p className="no-ident">Wherein, you understand that:</p>
                        <ol type="a">
                            <li>
                                In order to access our Resources, you may be required to provide certain information
                                about yourself (such as identification, contact information, etc.) as part of the
                                registration process, or as part of your ability to use the Resources. You agree that
                                any information you provide will always be accurate, correct, and up to date.
                            </li>
                            <li>
                                You are responsible for maintaining the confidentiality of any login information
                                associated with any account you use to access our Resources. Accordingly, you are
                                responsible for all activities that occur under your account(s).
                            </li>
                            <li>
                                Accessing (or attempting to access) any of our Resources by any means other than through
                                the means we provide is strictly prohibited. You specifically agree not to access (or
                                attempt to access) any of our Resources through any automated, unethical or
                                unconventional means.
                            </li>
                            <li>
                                Engaging in any activity that disrupts or interferes with our Resources, including the
                                servers and/or networks at which our Resources are located or to which our Resources are
                                connected, is strictly prohibited.
                            </li>
                            <li>
                                Attempting to copy, duplicate, reproduce, sell, trade, or resell our Resources is
                                strictly prohibited.
                            </li>
                            <li>
                                You are solely responsible for any consequences, losses, or damages that we may directly
                                or indirectly incur or suffer due to any unauthorized activities conducted by you, as
                                illustrated above, and you may incur criminal or civil liability.
                            </li>
                            <li>
                                We do not assume any liability for any content posted by you or any other third party
                                users of our website. However, any content posted by you using any open communication
                                tools on our website, provided that it does not violate or infringe on any third party
                                intellectual property rights, becomes the property of the WWSC, and as such, gives us a
                                perpetual, irrevocable, worldwide, royalty-free, exclusive license to reproduce, modify,
                                adapt, translate, publish, publicly display and/or distribute as we see fit. This only
                                refers and applies to content posted via open communication tools as described, and does
                                not refer to information that is provided as part of the registration process necessary
                                in order to use our Resources. All information provided as part of our registration
                                process is covered by our Privacy Policy.
                            </li>
                            <li>
                                You agree to indemnify and hold harmless the WWSC, and their directors, officers,
                                managers, employees, volunteers, donors, and agents from and against all losses,
                                expenses, damages and costs, including reasonable attorneys’ fees, resulting from any
                                violation of this User Agreement or the failure to fulfill any obligations relating to
                                your account incurred by you or any other person using your account. We reserve the
                                right to take over the exclusive defense of any claim for which we are entitled to
                                indemnification under this User Agreement. In such event, you shall provide us with such
                                cooperation as is reasonably requested by us.
                            </li>
                        </ol>
                    </div>
                    <div className="w3-section">
                        <h3>V. PRIVACY POLICY</h3>
                        <p>
                            Your privacy is very important to us, which is why we have created a separate Privacy Policy
                            in order to explain in detail how we collect, manage, process, secure, and store your
                            private information. Our privacy policy is included under the scope of this User Agreement.
                            To read our privacy policy in its entirety, click{" "}
                            <Link to="/wwsc-privacy-policy">here</Link>.
                        </p>
                    </div>
                    <div className="w3-section">
                        <h3>VI. LINKS</h3>
                        <p>
                            You may not create a link to any page of this Site without our prior written consent. If you
                            do create a link to a page of this Site, you do so at your own risk and the limitations set
                            out below will apply to your use of this Site by linking to it.
                        </p>
                        <p>
                            We do not monitor or review the content of other party’s websites which are linked from this
                            Site. Opinions expressed or materials appearing on such websites are not necessarily shared
                            or endorsed by us, and we should not be regarded as the publisher of such opinions or
                            material. Please be aware that we are not responsible for the privacy practices, or content,
                            of these sites. We encourage our users to be aware of the privacy statements of these sites.
                            You should evaluate the security and trustworthiness of any other site connected to this
                            site or accessed through this site by yourself, before disclosing any personal information
                            to them. The WWSC will not be responsible for any loss or damage in whatever manner,
                            howsoever caused, resulting from your disclosure to third parties of personal information.
                        </p>
                    </div>
                    <div className="w3-section">
                        <h3>VII. DISCLAIMER NOTICE</h3>
                        <h4>(1) LIMITATION OF WARRANTIES</h4>
                        <p>
                            By using our website, you understand and agree that all Resources we provide are “as is” and
                            “as available”. This means that we do not represent or warrant to you that:
                        </p>
                        <ol type="i">
                            <li>the use of our Resources will meet your needs or requirements.</li>
                            <li>the use of our Resources will be uninterrupted, timely, secure or free from errors.</li>
                            <li>the information obtained by using our Resources will be accurate or reliable, and</li>
                            <li>
                                any defects in the operation or functionality of any Resources we provide will be
                                repaired or corrected.
                            </li>
                        </ol>
                        <p className="no-ident">Furthermore, you understand and agree that:</p>
                        <ol type="i">
                            <li>
                                any content downloaded or otherwise obtained through the use of our Resources is done at
                                your own discretion and risk, and that you are solely responsible for any damage to your
                                computer or other devices for any loss of data that may result from the download of such
                                content, and
                            </li>
                            <li>
                                no information or advice, whether expressed, implied, oral or written, obtained by you
                                from the WWSC or through any Resources we provide shall create any warranty, guarantee,
                                or conditions of any kind, except for those expressly outlined in this User Agreement.
                            </li>
                        </ol>
                        <h4>(2) LIMITATION OF LIABILITY</h4>
                        <p>
                            The WWSC will not be liable for any direct, indirect, incidental, consequential or exemplary
                            loss or damages which may be incurred by you as a result of using our Resources, or as a
                            result of any changes, data loss or corruption, cancellation, loss of access, or downtime to
                            the full extent that applicable limitation of liability laws apply.
                        </p>
                    </div>
                    <div className="w3-section">
                        <h3>VIII. LANGUAGE TRANSLATION DISCLAIMER</h3>
                        <p>
                            The information contained in this Site may be translated to other languages for the
                            convenience of users of this Site (the “translations”). The Site is being translated through
                            “human translation” and “machine translation” dynamically through Google Translate. Because
                            Google Translate is an external website, the WWSC does not have control of the quality or
                            accuracy of translated content. All WWSC website content that is filtered through Google
                            Translate may result in unexpected and unpredictable degradation of portions of text, images
                            and the general appearance on translated pages. Google Translate may maintain unique privacy
                            and use policies. These policies are not controlled by the WWSC and are not associated with
                            the WWSC privacy and use policies.
                        </p>
                        <p>
                            The official text is written in English and the English version of the Site is the only
                            version endorsed by the WWSC. If any questions arise related to the accuracy of the
                            information contained in the translations, please refer to the official English version.
                            Where there is any question, the English version is always the authoritative version of the
                            website.
                        </p>
                        <p>
                            Some items on the Site may not be translated, such as images containing text, documents,
                            maps, and web page elements. In addition, some features on the site may not work in the
                            translated versions. If you have any questions about information that appears on our site,
                            please <Link to="/contact-us">contact us</Link>.
                        </p>
                    </div>
                    <div className="w3-section">
                        <h3>IX. FORCE MAJEURE</h3>
                        <p>
                            Neither party shall be liable to the other for any failure to perform any obligation under
                            any agreement which is due to an event beyond the control of such party, including but not
                            limited to any uncontrollable natural forces , terrorism, war, political insurgence,
                            insurrection, riot, civil unrest, act of civil or military authority, uprising, earthquake,
                            flood or any other natural or man made eventuality outside of our control, which causes the
                            termination of an agreement or contract entered into, nor which could have been reasonably
                            foreseen. Any party affected by such event shall forthwith inform the other party of the
                            same and shall use all reasonable endeavours to comply with the terms and conditions of any
                            agreement contained herein.
                        </p>
                        <h4>WAIVER</h4>
                        <p>
                            Failure of either party to insist upon strict performance of any provision of this or any
                            agreement or the failure of either party to exercise any right or remedy to which it, he or
                            they are entitled hereunder shall not constitute a waiver thereof and shall not cause a
                            diminution of the obligations under this or any agreement. No waiver of any of the
                            provisions of this or any agreement shall be effective unless it is expressly stated to be
                            such and signed by both parties.
                        </p>
                    </div>

                    <div className="w3-section">
                        <h3>X. TERMINATION OF USE</h3>
                        <p>
                            You agree that we may, at our sole discretion, suspend or terminate your access to all or
                            part of our website and Resources with or without notice and for any reason, including,
                            without limitation, breach of this User Agreement. Any suspected illegal, fraudulent or
                            abusive activity may be grounds for terminating your relationship with us and may be
                            referred to appropriate law enforcement authorities. Upon suspension or termination, your
                            right to use the Resources we provide will immediately cease, and we reserve the right to
                            remove or delete any information that you may have on file with us, including any account or
                            login information.
                        </p>
                    </div>
                    <div className="w3-section">
                        <h3>XI. GOVERNING LAW</h3>
                        <p>
                            This website is controlled by the WWSC from our office located in the state of California,
                            USA. The laws of the state of California govern these terms and conditions. By accessing
                            this Site you consent to these terms and conditions and to the exclusive jurisdiction of the
                            California courts in all disputes arising out of such access. If any of these terms are
                            deemed invalid or unenforceable for any reason (including, but not limited to the exclusions
                            and limitations set out above), then the invalid or unenforceable provision will be severed
                            from these terms and the remaining terms will continue to apply. Failure of the WWSC to
                            enforce any of the provisions set out in these Terms and Conditions and any agreement, or
                            failure to exercise any option to terminate, shall not be construed as waiver of such
                            provisions and shall not affect the validity of these Terms and Conditions or of any
                            agreement or any part thereof, or the right thereafter to enforce each and every provision.
                            These Terms and Conditions shall not be amended, modified, varied or supplemented except in
                            writing and signed by duly authorized representatives of the WWSC.
                        </p>
                    </div>
                    <div className="w3-section">
                        <h3>XII. NOTIFICATION OF CHANGES</h3>
                        <p>
                            The WWSC reserves the right to change any of the terms and conditions contained in this User
                            Agreement, or any policy or guideline of the Site, at any time and in its sole discretion.
                            When we make changes, we will revise the “last updated” date at the top of the User
                            Agreement. Any changes will be effective immediately upon posting on the Site. Your
                            continued use of the Site following the posting of changes will constitute your acceptance
                            of such changes. We encourage you to review the User Agreement whenever you visit our
                            website.
                        </p>
                    </div>
                    <div className="w3-section">
                        <h3>XIII. CONTACT INFORMATION</h3>
                        <p className="no-ident">
                            Our contact information can be found on our <Link to="/contact-us">Contact Us</Link> link on
                            our website.
                        </p>
                        <p className="no-ident">
                            If you have any questions or comments about our website Terms and Condition of Use as
                            outlined above, you can contact us at:
                        </p>
                    </div>
                    <div className="w3-section">
                        <p>
                            <strong>World Wiser Sport Committee</strong>
                        </p>
                        <p>709 E. Colorado Boulevard, Suite 270, Pasadena, CA 91101, USA</p>
                        <p>
                            Web Address: <Link to="/">https://worldwisersport.org/</Link>
                        </p>
                        <p>
                            Email:
                            <a href="mailto: info@worldwisersport.org">
                                {" "}
                                <em>info@worldwisersport.org</em>
                            </a>
                        </p>
                        <p>Tel: (626) 795-7485; </p>
                        <p className="w3-center w3-section">©2023 World Wiser Sport Committee. All Rights Reserved.</p>
                    </div>
                </div>
            )}
            {lang === "zh-TW" && (
                <div className="img-text-container">
                    <h1>網站使用條款與條件</h1>
                    <div className="w3-section">
                        <h3>I. 前言</h3>
                        <p>
                            歡迎您訪問我們的網站 <Link to="/">https://worldwisersport.org/</Link>{" "}
                            (以下簡稱為“本網站”)，本網站是由<strong>世界Wiser運動委員會</strong>(英文名為World Wiser
                            Sport
                            Committee，以下簡稱為“WWSC”)所擁有。藉由瀏覽我們的網站時，您將被視為已閱讀、理解、和同意接受並遵守我們的協議(以下簡稱“本用戶協議”)中所聲明的下列的條款與條件，以及我們的
                            <Link to="/wwsc-privacy-policy">隱私權政策</Link>
                            (請參照下面有關隱私權政策的部分以獲得更多信息)。
                        </p>
                        <p className="no-ident">
                            此協議從 <strong>2012年11月23日</strong>起生效。
                        </p>
                        <p>
                            以下術語適用於本條款和條件、隱私權政策和免責聲明的任何或所有協議：“用戶”、“您”和“您的”指的是您，也就是訪問瀏覽本網站並接受本網站條款和條件者。“WWSC”、“我們自己”和“我們”
                            指的是世界Wiser運動委員會。“一方”、“雙方”或“我們”是指用戶與我們自己、或用戶或我們自己。任何使用上述的術語或術語中任何字，無論是單數、複數、英文的大寫和/或他/她與他們都被視為是可互相交換的，因此都被認為是相同意義的。
                        </p>
                    </div>
                    <div className="w3-section">
                        <h3>II. 本網站的所有權與其內容</h3>
                        <p>
                            本網站是由WWSC所擁有。除非另有說明，本網站中特別發表或展示的所有內容，包括但不僅限於:
                            文字、圖案、數據、照片圖像、視頻、聲音、繪圖插畫以及內容的選用與安排(“WWSC內容”)是由WWSC所有並保留一切權利。
                        </p>
                    </div>
                    <div className="w3-section">
                        <h3>III. 商標/版權所有</h3>
                        <p>
                            本網站含有的WWSC商標、服務標記、本WWSC標誌
                            logo以及任何其它WWSC的文字標誌、設計、名稱或口號都是WWSC的智慧財產。未經WWSC事先書面同意之前，禁止被全部或部份地複印、仿造或使用。本網站上所有屬於WWSC的內容和材料，包括但不僅限於文字、圖案、網站名稱、圖像和標誌都是WWSC的智慧財產，並在美國和其它國家受到適用的版權和商標法律的保護。除非得到WWSC的書面特別授權，任何未經授權的使用本網站的WWSC內容，包括但不僅限於：複製、分發、展示或傳送，是被嚴格禁止的。
                        </p>
                        <p>
                            本網站中提及的其它第三方的商標、註冊商標以及機構/公司名稱和/或標誌是屬於相關的第三方的智慧財產(簡稱“第三方智慧財產”)。除非得到相關的第三方的特別授權，任何未經授權的使用第三方智慧財產的是被嚴格禁止的。對於本網站用戶未經授權擅自使用第三方智慧財產，WWSC將不承擔任何法律賠償或責任。
                        </p>
                    </div>
                    <div className="w3-section">
                        <h3>IV. 使用本網站的責任和遵守的行為</h3>
                        <p>
                            通過瀏覽我們的網站和直接或間接地獲得到我們為您提供的信息、資源、服務、註冊、培訓與應用項目(以下簡稱為“資源”)，您同意使用這些資源只是根據1)本用戶協議的條款，和2)適用的法律、規章以及普遍接受的線上慣例或準則所允許的用途。
                        </p>
                        <p className="no-ident">其中，您理解：</p>
                        <ol type="a">
                            <li>
                                為了獲得我們的資源，您可能會被要求提供有關您個人的某些信息 (例如識別身份、聯繫方式等)
                                作為註冊過程的一部份或作為讓您能夠使用我們資源的一部份。您同意任何您提供的信息均是準確、正確的和最近的。
                            </li>
                            <li>
                                您有責任維護與您用來獲得我們資源的任何帳號相關的任何登錄信息的保密性，因此，您有責任為您的帳戶下發生的所有活動負責
                            </li>
                            <li>
                                我們嚴格禁止利用不是我們提供的以外任何方式來獲得(或企圖獲得)我們的任何資源。您特別同意不用任何自動化的、不道德的或非常規的方式來獲得(或企圖獲得)我們的任何資源。
                            </li>
                            <li>
                                從事任何中斷或干擾我們資源，包括儲存我們資源的伺服器或/與之相聯結的網絡的任何活動是被嚴格禁止的。
                            </li>
                            <li>試圖複印、複製、重做、出售、交易或轉賣我們的資源是被嚴格禁止的。</li>
                            <li>
                                如由於您作了上面所提及的任何未經我們授權的活動，而直接或間接地讓我們蒙受或招致損失或損害的後果，您將全權負責，而您可能會因此而承擔刑事和民事的的責任。
                            </li>
                            <li>
                                對於您或我們的網站的其他第三方用戶所發表的任何內容，我們不承擔任何法律責任。但是，如您使用開放式的通訊工具在我們的網站所發表的任何內容，只要它不違反或侵犯任何第三方的智慧財產的前提下，將成為WWSC的財產，正因為如此，給了我們一個永久的、不可撤銷的、全世界範圍內、免版稅的和專有的許可權，我們可以按照需求來進行複製、修改、改編、翻譯、出版、公開展示及/或分發。這僅是指適用與如上所述通過開放式通訊工具所發表的內容，並不涉及註冊過程中要使用我們資源而必須提供的信息。凡是所有在註冊過程中提供的信息，將受到我們的隱私權政策所保護。
                            </li>
                            <li>
                                對於任何違反本用戶協議或未能履行與您的帳戶有關的義務，而因您或任何使用您帳戶的其他人導致的所有損失、費用、損害和花費包括合理的律師費，您同意賠償和不傷害WWSC及其董事、行政人員、管理人員、員工、志願者、捐助者和代理人。根據本用戶協議的保障下，我們保留具有防禦任何索賠的唯一權利，在此情況下，您必須在我們合理的要求下跟我們合作。
                            </li>
                        </ol>
                    </div>
                    <div className="w3-section">
                        <h3>V. 隱私權政策</h3>
                        <p>
                            您的隱私權對我們是非常重要的，這就是為什麼我們另外制定了一個獨立的隱私權政策，以便詳細地解釋我們如何收集、管理、處理、保護和儲存您的私人信息。我們的隱私權政策是包括在本用戶協議範圍內的，若欲閱讀我們全部的隱私權政策請點擊
                            <Link to="/wwsc-privacy-policy">這裡</Link>。
                        </p>
                    </div>
                    <div className="w3-section">
                        <h3>VI. 鏈接</h3>
                        <p>
                            未獲得我們書面同意之前，您不可以建立與本網站任何網頁的鏈接。但如果您已建立了與本網站的某網頁的鏈接，您將為此承擔其風險。下列的限制將適用於當您通過鏈接來使用本網站時。
                        </p>
                        <p>
                            我們不查看或審閱從本網站連結出的它方網站的內容。我們不一定共享或認同在這些網站上所表達的觀點或出現的資料，而且我們也不應被視為這些觀點或資料的發佈者。請注意我們不對這些網站處理隱私權的做法或其內容負責。我們鼓勵我們的用戶了解這些網站的隱私權聲明。在向他們透露任何您的私人信息前，您必須評估任何經由本網站聯結或您直接瀏覽其他網站的安全性和可信度。對於您向第三方透露私人信息而造成任何方式的損失或損毀，WWSC將不承擔任何的責任。
                        </p>
                    </div>
                    <div className="w3-section">
                        <h3>VII. 免責聲明</h3>
                        <h4>(1) 擔保限制</h4>
                        <p>
                            通過使用我們的網站，您理解並同意所有我們提供的資源是“現況”和“現有”的，這代表着我們不向您表示或保證：
                        </p>
                        <ol type="i">
                            <li>使用我們的資源將滿足您的需要或要求。</li>
                            <li>使用我們的資源將不會中斷、是及時的、安全的或無錯誤的。</li>
                            <li>通過使用我們的資源獲得的信息是正確的和可靠的，以及</li>
                            <li> 我們提供的任何資源操作和功能中的任何缺陷會被修復或更正。</li>
                        </ol>
                        <p className="no-ident">此外，您了解並同意：</p>
                        <ol type="i">
                            <li>
                                您是基於您自己的判斷和風險評估，來決定透過使用我們的資源來下載或以其它方式獲得任何內容的，因此您將為下載內容可能損害您的電腦或其它裝置而造成任何資料的損失全權負責，而且
                            </li>
                            <li>
                                除了那些已在本用戶協議中明確列出的之外，您沒有從WWSC或我們提供的任何資源獲得信息或建議，無論是表明的、隱含的、口頭或書面的，對您產生任何擔保、保證或任何類似的條件。
                            </li>
                        </ol>
                        <h4>(2) 責任限制</h4>
                        <p>
                            在適用的責任限制法規的最大限度下，WWSC將不為任何直接、間接、偶發、有原因或典型的，可能由於您使用我們的資源引起的,
                            或者是由於任何改變、數據損失或損壞、註銷、無法瀏覽或當機引起的損失或損壞承擔責任。
                        </p>
                    </div>
                    <div className="w3-section">
                        <h4>(3) 語言翻譯的免責聲明</h4>
                        <p>
                            本網站含有的信息可能會被翻譯成其它語言以便利使用本網站的用戶們(以下簡稱“翻譯”)。本網站使用“人為翻譯”和用谷歌翻譯(Google
                            Translate)進行的動態的“機器翻譯”。由於谷歌翻譯是一個外部網站，WWSC對於其翻譯內容的品質和準確性無法控制。WWSC網站上所有的內容在經谷歌過濾翻譯後，在翻譯過的網頁上的部份文字、圖像和整體外觀可能會產生不如預期和無法預料的劣質結果。谷歌翻譯可能有其獨自的隱私權和使用政策，這些政策並不受WWSC控制也與WWSC的隱私權和使用政策無關。
                        </p>
                        <p>
                            本網站的正式內容是用英文寫的，而且本網站的英文版本是WWSC認可的唯一版本。如有對涉及翻譯中的信息準確性的任何問題，請參閱正式的英文版本，如在有任何問題時，請永遠以英文版本為本網站的權威版本。
                        </p>
                        <p>
                            網站的某些項目可能無法被翻譯，比如含有文字的圖像、文件、地圖和網頁元素。此外，網站的某些功能也可能在被翻譯的網頁上無法作用。如果您對網站上出現的信息有任何問題，請
                            <Link to="/contact-us">聯繫我們</Link>。
                        </p>
                    </div>
                    <div className="w3-section">
                        <h4>(4) 不可抗力的情況</h4>
                        <p>
                            由於超出該方無法控制的事件而無法履行任何協議義務時，任何一方都不應該為此向對方負賠償責任。這些無法控制的事件包括但不僅限於：無法控制的自然力量、恐怖活動、戰爭、政治叛亂、暴動、暴亂、內亂、民政或軍事權力機關的行為、起義、地震、洪水或任何其它在我們控制外的自然或人為的最終結果；或者我們無法合理地預見這些事件而造成協議或合同的終止。受到這樣事件影響的任何一方應該立刻將此情況通知另一方，並採取一切合理的努力以履行其中所包含的任何協議的條款和條件。
                        </p>
                        <h4>(5) 棄權</h4>
                        <p>
                            如有任一方無法嚴格執行本協議或任何協議的條款；或者任一方無法行使他/她在此所有的權利或補償皆將不構成棄權，也不會使其在本協議或任何協議下的義務消失或減少。除非經雙方簽字明確聲明，要不然對本協議或任何協議的任何條款的棄權將不會生效。
                        </p>
                    </div>

                    <div className="w3-section">
                        <h3>VIII. 終止使用</h3>
                        <p>
                            您同意我們可以在我們自行決定下，經通知或不經通知，在任何理由包括但不僅限於違反本用戶協議下暫停或終止您使用我們全部或部份的的網站和資源。任何涉嫌違法、詐欺或濫用行為，都可以成為終止您與我們的關係並提交給執法機構的理由。一旦暫停或終止時，您使用我們提供的資源的權利將立即停止，而且我們保留去除或刪除您在我們這裡儲存的信息，包括任何賬戶或登錄信息的權利。
                        </p>
                    </div>
                    <div className="w3-section">
                        <h3>XI. 適用法律</h3>
                        <p>
                            本網站是由WWSC在美國加利福尼亞州(加州)的辦公室所管理。這些條款和條件適用於加州的法律所管轄。藉由瀏覽本網站，您同意遵守這些條款和條件，以及加州法庭在任何由瀏覽本網站而產生的爭議中具有專屬的司法管轄權。如果這些條款中的任何條款，因任何原因(包括但不僅限於上面提出的排除和限制條款)而被視為無效或無法執行，則該無效或無法執行的規定將被從這些條款中分隔出來，而其餘的條款將仍然繼續適用。對於從本條款和條件或任何協議中分出的這些WWSC無法執行或無法選擇行使終止的這些條款中的任何規定，不得被解釋為放棄此類條款，也不影響到這些條款和條件或任何協議及其部份的有效性或此後執行每一和所有條款的權利。除非在書面形式並經WWSC正式授權的代表簽字下，否則這些條款和條件不應該被修正、修改、變動或增補。
                        </p>
                    </div>
                    <div className="w3-section">
                        <h3>X. 變更通知</h3>
                        <p>
                            WWSC保留在任何時間可自行決定變更本用戶協議中的任何條款與條件或本網站的任何政策或準則的權利。當我們作出變更時，我們將更新本用戶協議頂端的“最近更新”的日期。一旦公佈在本網站後，任何變更將立即生效。您在變更公佈後，繼續使用本網站將代表您接受我們的變更。我們鼓勵您在瀏覽本網站的任何時候都能查閱本用戶協議。
                        </p>
                    </div>
                    <div className="w3-section">
                        <h3>XI. 聯繫信息</h3>
                        <p className="no-ident">
                            我們的聯繫方式可在我們的網站上的 <Link to="/contact-us">聯繫我們</Link> 鏈接找到。
                        </p>
                        <p className="no-ident">如果您對上述本網站的條款與條件有任何問題或意見，您可以聯繫我們：</p>
                    </div>
                    <div className="w3-section">
                        <p>
                            <strong>世界Wiser運動委員會 (World Wiser Sport Committee)</strong>
                        </p>
                        <p>709 E. Colorado Boulevard, Suite 270, Pasadena, CA 91101, USA</p>
                        <p>
                            Web Address: <Link to="/">https://worldwisersport.org/</Link>
                        </p>
                        <p>
                            Email:
                            <a href="mailto: info@worldwisersport.org">
                                <em> info@worldwisersport.org</em>
                            </a>
                        </p>
                        <p>Tel: (626) 795-7485; </p>
                        <p className="w3-center w3-section">©2023 所有版權為世界Wiser運動委員會所擁有。</p>
                    </div>
                </div>
            )}
            {lang === "zh-CN" && (
                <div className="img-text-container" style={{ color: "teal" }}>
                    <h1>网站使用条款与条件</h1>
                    <div className="w3-section">
                        <h3 style={{ color: "teal" }}>I. 前言</h3>
                        <p>
                            欢迎您访问我们的网站 <Link to="/">https://worldwisersport.org/</Link>{" "}
                            (以下简称为“本网站”)，本网站是由<strong>世界Wiser运动委员会</strong>(英文名为World Wiser
                            Sport
                            Committee，以下简称为“WWSC”)所拥有。藉由浏览我们的网站时，您将被视为已阅读、理解、和同意接受并遵守我们的协议(以下简称“本用户协议”)中所声明的下列的条款与条件，以及我们的
                            <Link to="/wwsc-privacy-policy">隐私权政策</Link>
                            (请参照下面有关隐私权政策的部分以获得更多信息)。
                        </p>
                        <p className="no-ident">
                            此协议从 <strong>2012年11月23日</strong>起生效。
                        </p>
                        <p>
                            以下术语适用於本条款和条件、隐私权政策和免责声明的任何或所有协议：“用户”、“您”和“您的”指的是您，也就是访问浏览本网站并接受本网站条款和条件者。“WWSC”、“我们自己”和“我们”
                            指的是世界Wiser运动委员会。“一方”、“双方”或“我们”是指用户与我们自己、或用户或我们自己。任何使用上述的术语或术语中任何字，无论是单数、複数、英文的大写和/或他/她与他们都被视为是可互相交换的，因此都被认为是相同意义的。
                        </p>
                    </div>
                    <div className="w3-section">
                        <h3>II. 本网站的所有权与其内容</h3>
                        <p>
                            本网站是由WWSC所拥有。除非另有说明，本网站中特别发表或展示的所有内容，包括但不仅限於:
                            文字、图案、数据、照片图像、视频、声音、绘图插画以及内容的选用与安排(“WWSC内容”)是由WWSC所有并保留一切权利。
                        </p>
                    </div>
                    <div className="w3-section">
                        <h3>III. 商标/版权所有</h3>
                        <p>
                            本网站含有的WWSC商标、服务标记、本WWSC标誌
                            logo以及任何其它WWSC的文字标誌、设计、名称或口号都是WWSC的智慧财产。未经WWSC事先书面同意之前，禁止被全部或部份地複印、仿造或使用。本网站上所有属於WWSC的内容和材料，包括但不仅限於文字、图案、网站名称、图像和标誌都是WWSC的智慧财产，并在美国和其它国家受到适用的版权和商标法律的保护。除非得到WWSC的书面特别授权，任何未经授权的使用本网站的WWSC内容，包括但不仅限於：複製、分发、展示或传送，是被严格禁止的。
                        </p>
                        <p>
                            本网站中提及的其它第叁方的商标、註册商标以及机构/公司名称和/或标誌是属於相关的第叁方的智慧财产(简称“第叁方智慧财产”)。除非得到相关的第叁方的特别授权，任何未经授权的使用第叁方智慧财产的是被严格禁止的。对於本网站用户未经授权擅自使用第叁方智慧财产，WWSC将不承担任何法律赔偿或责任。
                        </p>
                    </div>
                    <div className="w3-section">
                        <h3>IV. 使用本网站的责任和遵守的行为</h3>
                        <p>
                            通过浏览我们的网站和直接或间接地获得到我们为您提供的信息、资源、服务、註册、培训与应用项目(以下简称为“资源”)，您同意使用这些资源只是根据1)本用户协议的条款，和2)适用的法律、规章以及普遍接受的线上惯例或準则所允许的用途。
                        </p>
                        <p className="no-ident">其中，您理解：</p>
                        <ol type="a">
                            <li>
                                为了获得我们的资源，您可能会被要求提供有关您个人的某些信息 (例如识别身份、联繫方式等)
                                作为註册过程的一部份或作为让您能够使用我们资源的一部份。您同意任何您提供的信息均是準确、正确的和最近的。
                            </li>
                            <li>
                                您有责任维护与您用来获得我们资源的任何帐号相关的任何登录信息的保密性，因此，您有责任为您的帐户下发生的所有活动负责
                            </li>
                            <li>
                                我们严格禁止利用不是我们提供的以外任何方式来获得(或企图获得)我们的任何资源。您特别同意不用任何自动化的、不道德的或非常规的方式来获得(或企图获得)我们的任何资源。
                            </li>
                            <li>
                                从事任何中断或干扰我们资源，包括储存我们资源的伺服器或/与之相联结的网络的任何活动是被严格禁止的。
                            </li>
                            <li>试图複印、複製、重做、出售、交易或转卖我们的资源是被严格禁止的。</li>
                            <li>
                                如由於您作了上面所提及的任何未经我们授权的活动，而直接或间接地让我们蒙受或招致损失或损害的後果，您将全权负责，而您可能会因此而承担刑事和民事的的责任。
                            </li>
                            <li>
                                对於您或我们的网站的其他第叁方用户所发表的任何内容，我们不承担任何法律责任。但是，如您使用开放式的通讯工具在我们的网站所发表的任何内容，只要它不违反或侵犯任何第叁方的智慧财产的前提下，将成为WWSC的财产，正因为如此，给了我们一个永久的、不可撤销的、全世界範围内、免版税的和专有的许可权，我们可以按照需求来进行複製、修改、改编、翻译、出版、公开展示及/或分发。这仅是指适用与如上所述通过开放式通讯工具所发表的内容，并不涉及註册过程中要使用我们资源而必须提供的信息。凡是所有在註册过程中提供的信息，将受到我们的隐私权政策所保护。
                            </li>
                            <li>
                                对於任何违反本用户协议或未能履行与您的帐户有关的义务，而因您或任何使用您帐户的其他人导致的所有损失、费用、损害和花费包括合理的律师费，您同意赔偿和不伤害WWSC及其董事、行政人员、管理人员、员工、志愿者、捐助者和代理人。根据本用户协议的保障下，我们保留具有防禦任何索赔的唯一权利，在此情况下，您必须在我们合理的要求下跟我们合作。
                            </li>
                        </ol>
                    </div>
                    <div className="w3-section">
                        <h3>V. 隐私权政策</h3>
                        <p>
                            您的隐私权对我们是非常重要的，这就是为什麽我们另外制定了一个独立的隐私权政策，以便详细地解释我们如何收集、管理、处理、保护和储存您的私人信息。我们的隐私权政策是包括在本用户协议範围内的，若欲阅读我们全部的隐私权政策请点击
                            <Link to="/wwsc-privacy-policy">这里</Link>。
                        </p>
                    </div>
                    <div className="w3-section">
                        <h3>VI. 链接</h3>
                        <p>
                            未获得我们书面同意之前，您不可以建立与本网站任何网页的链接。但如果您已建立了与本网站的某网页的链接，您将为此承担其风险。下列的限制将适用於当您通过链接来使用本网站时。
                        </p>
                        <p>
                            我们不查看或审阅从本网站连结出的它方网站的内容。我们不一定共享或认同在这些网站上所表达的观点或出现的资料，而且我们也不应被视为这些观点或资料的发佈者。请注意我们不对这些网站处理隐私权的做法或其内容负责。我们鼓励我们的用户了解这些网站的隐私权声明。在向他们透露任何您的私人信息前，您必须评估任何经由本网站联结或您直接浏览其他网站的安全性和可信度。对於您向第叁方透露私人信息而造成任何方式的损失或损毁，WWSC将不承担任何的责任。
                        </p>
                    </div>
                    <div className="w3-section">
                        <h3>VII. 免责声明</h3>
                        <h4>(1) 担保限制</h4>
                        <p>
                            通过使用我们的网站，您理解并同意所有我们提供的资源是“现况”和“现有”的，这代表着我们不向您表示或保證：
                        </p>
                        <ol type="i">
                            <li>使用我们的资源将满足您的需要或要求。</li>
                            <li>使用我们的资源将不会中断、是及时的、安全的或无错误的。</li>
                            <li>通过使用我们的资源获得的信息是正确的和可靠的，以及</li>
                            <li> 我们提供的任何资源操作和功能中的任何缺陷会被修复或更正。</li>
                        </ol>
                        <p className="no-ident">此外，您了解并同意：</p>
                        <ol type="i">
                            <li>
                                您是基於您自己的判断和风险评估，来决定透过使用我们的资源来下载或以其它方式获得任何内容的，因此您将为下载内容可能损害您的电脑或其它装置而造成任何资料的损失全权负责，而且
                            </li>
                            <li>
                                除了那些已在本用户协议中明确列出的之外，您没有从WWSC或我们提供的任何资源获得信息或建议，无论是表明的、隐含的、口头或书面的，对您产生任何担保、保證或任何类似的条件。
                            </li>
                        </ol>
                        <h4>(2) 责任限制</h4>
                        <p>
                            在适用的责任限制法规的最大限度下，WWSC将不为任何直接、间接、偶发、有原因或典型的，可能由於您使用我们的资源引起的,
                            或者是由於任何改变、数据损失或损坏、註销、无法浏览或当机引起的损失或损坏承担责任。
                        </p>
                    </div>
                    <div className="w3-section">
                        <h4>(3) 语言翻译的免责声明</h4>
                        <p>
                            本网站含有的信息可能会被翻译成其它语言以便利使用本网站的用户们(以下简称“翻译”)。本网站使用“人为翻译”和用谷歌翻译(Google
                            Translate)进行的动态的“机器翻译”。由於谷歌翻译是一个外部网站，WWSC对於其翻译内容的品质和準确性无法控制。WWSC网站上所有的内容在经谷歌过滤翻译後，在翻译过的网页上的部份文字、图像和整体外观可能会产生不如预期和无法预料的劣质结果。谷歌翻译可能有其独自的隐私权和使用政策，这些政策并不受WWSC控制也与WWSC的隐私权和使用政策无关。
                        </p>
                        <p>
                            本网站的正式内容是用英文写的，而且本网站的英文版本是WWSC认可的唯一版本。如有对涉及翻译中的信息準确性的任何问题，请参阅正式的英文版本，如在有任何问题时，请永远以英文版本为本网站的权威版本。
                        </p>
                        <p>
                            网站的某些项目可能无法被翻译，比如含有文字的图像、文件、地图和网页元素。此外，网站的某些功能也可能在被翻译的网页上无法作用。如果您对网站上出现的信息有任何问题，请
                            <Link to="/contact-us">联繫我们</Link>。
                        </p>
                    </div>
                    <div className="w3-section">
                        <h4>(4) 不可抗力的情况</h4>
                        <p>
                            由於超出该方无法控制的事件而无法履行任何协议义务时，任何一方都不应该为此向对方负赔偿责任。这些无法控制的事件包括但不仅限於：无法控制的自然力量、恐怖活动、战争、政治叛乱、暴动、暴乱、内乱、民政或军事权力机关的行为、起义、地震、洪水或任何其它在我们控制外的自然或人为的最终结果；或者我们无法合理地预见这些事件而造成协议或合同的终止。受到这样事件影响的任何一方应该立刻将此情况通知另一方，并采取一切合理的努力以履行其中所包含的任何协议的条款和条件。
                        </p>
                        <h4>(5) 弃权</h4>
                        <p>
                            如有任一方无法严格执行本协议或任何协议的条款；或者任一方无法行使他/她在此所有的权利或补偿皆将不构成弃权，也不会使其在本协议或任何协议下的义务消失或减少。除非经双方签字明确声明，要不然对本协议或任何协议的任何条款的弃权将不会生效。
                        </p>
                    </div>

                    <div className="w3-section">
                        <h3>VIII. 终止使用</h3>
                        <p>
                            您同意我们可以在我们自行决定下，经通知或不经通知，在任何理由包括但不仅限於违反本用户协议下暂停或终止您使用我们全部或部份的的网站和资源。任何涉嫌违法、诈欺或滥用行为，都可以成为终止您与我们的关係并提交给执法机构的理由。一旦暂停或终止时，您使用我们提供的资源的权利将立即停止，而且我们保留去除或删除您在我们这里储存的信息，包括任何账户或登录信息的权利。
                        </p>
                    </div>
                    <div className="w3-section">
                        <h3>XI. 适用法律</h3>
                        <p>
                            本网站是由WWSC在美国加利福尼亚州(加州)的办公室所管理。这些条款和条件适用於加州的法律所管辖。藉由浏览本网站，您同意遵守这些条款和条件，以及加州法庭在任何由浏览本网站而产生的争议中具有专属的司法管辖权。如果这些条款中的任何条款，因任何原因(包括但不仅限於上面提出的排除和限制条款)而被视为无效或无法执行，则该无效或无法执行的规定将被从这些条款中分隔出来，而其馀的条款将仍然继续适用。对於从本条款和条件或任何协议中分出的这些WWSC无法执行或无法选择行使终止的这些条款中的任何规定，不得被解释为放弃此类条款，也不影响到这些条款和条件或任何协议及其部份的有效性或此後执行每一和所有条款的权利。除非在书面形式并经WWSC正式授权的代表签字下，否则这些条款和条件不应该被修正、修改、变动或增补。
                        </p>
                    </div>
                    <div className="w3-section">
                        <h3>X. 变更通知</h3>
                        <p>
                            WWSC保留在任何时间可自行决定变更本用户协议中的任何条款与条件或本网站的任何政策或準则的权利。当我们作出变更时，我们将更新本用户协议顶端的“最近更新”的日期。一旦公佈在本网站後，任何变更将立即生效。您在变更公佈後，继续使用本网站将代表您接受我们的变更。我们鼓励您在浏览本网站的任何时候都能查阅本用户协议。
                        </p>
                    </div>
                    <div className="w3-section">
                        <h3>XI. 联繫信息</h3>
                        <p className="no-ident">
                            我们的联繫方式可在我们的网站上的 <Link to="/contact-us">联繫我们</Link> 链接找到。
                        </p>
                        <p className="no-ident">如果您对上述本网站的条款与条件有任何问题或意见，您可以联繫我们：</p>
                    </div>
                    <div className="w3-section">
                        <p>
                            <strong>世界Wiser运动委员会 (World Wiser Sport Committee)</strong>
                        </p>
                        <p>709 E. Colorado Boulevard, Suite 270, Pasadena, CA 91101, USA</p>
                        <p>
                            Web Address: <Link to="/">https://worldwisersport.org/</Link>
                        </p>
                        <p>
                            Email:
                            <a href="mailto: info@worldwisersport.org">
                                <em> info@worldwisersport.org</em>
                            </a>
                        </p>
                        <p>Tel: (626) 795-7485; </p>
                        <p className="w3-center w3-section">©2023 所有版权为世界Wiser运动委员会所拥有。</p>
                    </div>
                </div>
            )}
        </div>
    );
}
