/** @format */

import "./Privacy.css";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

export default function Privacy() {
    const { i18n } = useTranslation("global");

    const lang = i18n.language;
    // console.log(i18n.language);

    return (
        <div className="wwsc-container">
            <div className="privacy-image-container">
                <img src="/assets/other/Privacy-Policy.jpg" alt="privacy policy" className="responsive"/>
            </div>
            {lang === "en" && (
                <div className="img-text-container">
                    <h1>PRIVACY POLICY</h1>
                    <p className="privacy-date no-ident">Last Edited on <strong>11/08/2014</strong></p>
                    <div className="w3-section">
                        <p>
                            <strong>
                            The World Wiser Sport Committee (“WWSC”) is committed to protecting your privacy.
                            </strong>
                            This privacy policy has been compiled to better serve those who are concerned with how their
                            “personally identifiable information” is being used online. Please read our privacy policy
                            carefully to get a clear understanding of how we collect, use, protect or otherwise handle
                            your personally identifiable information in accordance with our website.
                        </p>
                    </div>
                    <h3>I. TYPES OF INFORMATION WE COLLECT</h3>
                    <p>We collect the following two basic types of information:</p>
                    <h4>(1) Personally identifiable information</h4>
                    <p>
                        Personally identifiable information, as used in US privacy law and information security, is the
                        information that can be used on its own or with other information to identify, contact, or
                        locate a single person, or to identify an individual in context.
                    </p>
                    <p>
                        You can visit our website without disclosing any information about yourself. However, to
                        participate in any interactive features, including but not limited to registering or applying
                        for training, subscribing to WWSC’s mailing list to receive information from WWSC such as
                        newsletters or emails regarding news, notices, WWSC event information (collectively, the
                        “Services”), you may have to sign up or register and provide accurate information about yourself
                        to our website, as the services may not work properly without such information.
                    </p>
                    <p>
                        When using the services, we may ask you to provide all or some of the following personally
                        identifiable information: your name, your address (including city, state/province, country of
                        residence and zip/postal code), your email address, your telephone numbers, your gender,
                        username and password.
                    </p>
                    <h4>(2) Aggregate information</h4>
                    <p>
                        Aggregate information means information about groups or categories of users, which does not
                        identify and cannot reasonably be used to identify an individual user.
                    </p>
                    <p>
                        We may collect location information when you visit our website, including location information
                        either provided by a mobile device interacting with one of our sites, or associated with your IP
                        address, where we are permitted by law to process this information. The IP addresses that we
                        collect are to analyze trends, administer the site, track user’s movement, and gather broad
                        demographic information for aggregate use. IP addresses are not linked to personally
                        identifiable information. Additionally, for system administration, detecting usage patterns and
                        troubleshooting purposes, our web servers automatically log standard access information
                        including browser type, access times, URL request, and referral URL. This information is not
                        shared with any third parties and is used only within the WWSC on a need-to-know basis. Any
                        individually identifiable information related to this data will never be used in any way other
                        than the usage stated above without your explicit permission.
                    </p>
                    <h3>II. WHEN DO WE COLLECT INFORMATION?</h3>
                    <p>
                        We collect information from you when you register on our site, subscribe to a newsletter, fill
                        out a form or enter information on our site.
                    </p>
                    <h3>III. HOW DO WE USE YOUR INFORMATION?</h3>
                    <p>
                        We may use the information we collected from you when you register, sign up for our newsletter,
                        respond to a communication, surf the website, or use certain other site features in the
                        following ways:
                    </p>
                    <p>
                        To personalize user’s experience and to allow us to deliver the type of content and provide
                        services in which you are most interested. To improve our website in order to better serve you.
                        To allow us to better serve you in responding to your customer service requests. To send
                        periodic emails regarding our services.
                    </p>
                    <h4>(1) Confidentiality and Third Party Disclosure</h4>
                    <p>
                        User’s records are regarded as confidential information and therefore will not be divulged to
                        any third party; however, we may have to disclose such information if legally required to do so
                        to the appropriate authorities. We will not sell, share, or rent your personal information to
                        any third party or use your e-mail address for unsolicited mail. Any emails sent by the WWSC
                        will only be in connection with the provision of agreed services. This does not include website
                        hosting companies and other parties who assist us in operating our website, promoting our
                        services, or providing service to you, so long as those parties agree to keep this information
                        confidential. Each user has the right to request sight of and copies of any and all of his or
                        her records we keep, on the provision that we are given reasonable notice of such a request.
                        Users are requested to retain copies of any literature issued in relation to the provision of
                        our services. Where appropriate, we shall issue users with appropriate written information,
                        handouts or copies of records as part of an agreed contract, for the benefit of both parties.
                    </p>
                    <h4>(2) Third Party Links</h4>
                    <p>
                        Occasionally, at our discretion, we may include or offer third party products or services on our
                        website. These third party sites have separate and independent privacy policies. We therefore
                        have no responsibility or liability for the content and activities of these linked sites.
                        Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these
                        third party sites.
                    </p>
                    <h3>IV. HOW DO WE PROTECT VISITOR INFORMATION?</h3>
                    <p>
                        Your personally identifiable information is password protected, and any personally identifiable
                        information you provide to the website is protected from unauthorized disclosure by reasonable
                        technological measures. However, information provided to the WWSC is not transmitted via SSL
                        encryption technology. We recommend that you do not divulge your password to anyone. At no time
                        will anyone of the WWSC ask for your password via email.
                    </p>
                    <h3>V. DO WE USE “COOKIE”?</h3>
                    <p>
                        A cookie is a small piece of text sent to your browser by a website you visit. It helps the
                        website to remember information about your visit, such as your preferred language and other
                        settings. That can make your next visit of this site easier and more convenient for you.
                    </p>
                    <p>
                        Like most interactive websites, the WWSC’s website uses cookies to enable us to retrieve user
                        details for each visit. Cookies are used in some areas of our site to enable the functionality
                        of this area and ease of use for those people visiting.
                    </p>
                    <h3> VI.NOTIFICATION OF CHANGES</h3>
                    <p>
                        The WWSC reserves the right to modify this Privacy Policy at any time. Please review this Policy
                        from time to time to ensure your familiarity with its terms.
                    </p>
                    <h3>VII. CONTACTING US</h3>
                    <p>
                        If at any time you would like to unsubscribe from receiving future emails, you can follow the
                        instructions at the bottom of each email.
                    </p>
                    <p>
                        If there are any questions regarding this privacy policy you may contact us using the
                        information below.
                    </p>
                    <div className="w3-section">
                        <p><strong>World Wiser Sport Committee</strong></p>
                        <p>709 E. Colorado Boulevard, Suite 270, Pasadena, CA 91101, USA</p>
                        <p>
                            Web Address: <Link to="/">https://worldwisersport.org/</Link>
                        </p>
                        <p>
                            Email:<a href="mailto: info@worldwisersport.org"> <em>info@worldwisersport.org</em></a>
                        </p>
                        <p>Tel: (626) 795-7485; </p>
                        <p className="w3-center w3-section">©2023 World Wiser Sport Committee. All Rights Reserved.</p>
                    </div>
                </div>
            )}
            {lang === "zh-TW" && (
                <div className="text-container">
                    <h1>隱私權政策</h1>
                    <p className="privacy-date no-ident">
                        最近一次修改日期:<strong>11/08/2014</strong>
                    </p>
                    <div className="w3-section">
                        <p>
                            <strong>
                                世界Wiser運動委員會 (英文名為World Wiser Sport Committee, 以下簡稱”WWSC”)
                                承諾保護您的隱私權。
                            </strong>
                            我們編寫本隱私權政策的目的是希望為那些關心“個人身份識別資訊”如何在網上被使用的用戶們提供更佳的服務。請仔細地閱讀我們的隱私權政策以便清楚地了解我們的網站將如何收集、使用、保護或用其它方式來處理您的個人身份識別資訊。
                        </p>
                    </div>
                    <h3>I. 我們收集的資訊類型</h3>
                    <p>我們收集以下兩種基本類型的資訊：</p>
                    <h5>(1) 個人身份識別資訊</h5>
                    <p>
                        當被使用在美國隱私法和資訊安全時，個人身份識別資訊是一種可以被單獨使用或與其他資訊一起來識別，聯繫，或者找到某一個人，或依其資訊背景可來識別某個個人。
                    </p>
                    <p>
                        您可以瀏覽我們的網站而不需要透露任何有關您的個人資料。然而如果您要參與我們網站上任何互動性功能，包括但不限於註冊或申請培訓，登記訂閱WWSC的電郵通訊錄，或從WWSC接收電子報或電子郵件，包含相關的新聞報導，通知或WWSC的活動消息（這些統稱為“服務項目”）我們的網站可能需要您註冊或登記，並提供有關您個人的正確信息。否則這些服務項目可能無法發揮其正常的功能。
                    </p>
                    <p>
                        當使用這些服務項目時，我們可能會要求您提供全部或部分以下的個人身份識別資訊：如您的姓名，地址（包括城市，州/省，居住國家，郵遞區號/郵政編碼），電子郵件地址，電話號碼，性別，用戶名稱和密碼。
                    </p>
                    <h5>(2) 集合資訊</h5>
                    <p>
                        集合資訊是指和集體用戶們或不同類別用戶們有關的資訊，此資訊是不能識別或無法適合地用來識別個別的用戶。
                    </p>
                    <p>
                        在法律的允許下，當您訪問我們的網站時候，我們可能會收集和處理您的所在位置資訊。這些資訊可能經由與我們網站互動交流的移動裝置或者根據您的IP位址獲得。我們將用收集到的IP位址來分析趨勢，管理網站，追踪用戶活動情形，和收集廣泛的人口統計綜合資訊。
                        IP位址並不連結到個人身份識別資訊的。另外，由於系統管理，偵測使用模式和排除故障的目的，我們的網站伺服器會自動地記錄標準瀏覽訊息，包括用戶瀏覽器類型，瀏覽次數或打開郵箱，URL請求和經由什麼網站介紹來到我們網站的相關資訊。這些資訊我們不會與第三方共享，僅在WWSC需要知道的基礎上使用。在未經您明確許可使用，任何數據中有相關的個人識別資訊，我們會以等同個人身份識別資訊的方式來處理。
                    </p>
                    <h3>II. 我們何時收集您的信息?</h3>
                    <p>當您在我們的網站上註冊，訂閱電子報，填寫表格或在我們網站上輸入資料時，我們收集您的資訊。</p>
                    <h4>III. 我們如何使用您的信息?</h4>
                    <p>
                        當您註冊，訂閱我們的電子報，回應我們的交流溝通，瀏覽我們的網頁或者使用我們網站其他某些功能時，我們收集到您的信息。這些信息我們可能使用在以下幾個方面：
                    </p>
                    <p>
                        提供用戶個人化的體驗，以便讓我們能夠提供用戶最感興趣的內容類別和服務。 •
                        提升我們的網站內容以便提供更好的服務。 • 為了讓我們能夠提供更好的服務來回應客戶的服務要求。
                        以便能定期發送關於我們服務的電子郵件。
                    </p>
                    <h4>(1) 保密性和向第三方披露</h4>
                    <p>
                        用戶的記錄被視為機密，因此我們不會披露給任何第三方;但是如果是由於通過法律的要求，我們可能必須向有關當局披露被要求的資訊。
                        我們不會將您的個人資訊出售、分享或出租給任何第三方或使用您的電子郵箱來發送您不需要的郵件。我們只會根據您同意的服務條款來發送WWSC的郵件給您。
                        但這不包括我們的網站託管公司和協助我們運作我們的網站，推廣我們服務或為您提供服務的其他團體，只要這些公司和團體同意保密這些資訊。
                        當我們收到合理的要求通知後，每個用戶都有權利要求查看或複印我們保留他或她的任何所有記錄。用戶們也被要求保留與我們提供服務相關的任何文獻的複印件。在適當情況下，為了雙方的利益，我們也會提供用戶適當的書面資料，筆記或記錄副本作為協議契約的一部分。
                    </p>
                    <h4>(2) 第三方鏈接</h4>
                    <p>
                        有時候出於我們的決定考慮，我們可能在本網站包括或提供第三方產品或服務的鏈接。這些第三方網站有其分別和獨立的隱私權政策。因此，我們對這些鏈接網站的內容和活動，沒有任何法律上的責任或義務。但是儘管如此，為了保障我們網站的完整性，我們歡迎隨時向我們提供任何關於這些第三方鏈接網站的回饋。
                    </p>
                    <h3>IV. 我們如何保護訪客的信息?</h3>
                    <p>
                        您的個人身份識別資訊是有受密碼保護的，您提供的任何個人身份身份識別資訊給本網站時是由合理的技術措施保護，以防止未經授權的披露。然而資訊被提供給WWSC時並沒有通過SSL加密技術來傳輸。我們建議您不要將密碼洩露給任何人，在任何時候WWSC不會有任何人通過電子郵件向您要求提供密碼。
                    </p>
                    <h4>V. 我們使用Cookie嗎?</h4>
                    <p>
                        Cookie是您瀏覽的網站放在您的瀏覽器的一小段字碼，它幫助該網站記住關於您的訪問的信息，例如您的偏好語言和其他設定。
                        這將使您下次對該網站的瀏覽更容易和方便。
                    </p>
                    <p>
                        跟大多數互動式網站一樣，
                        WWSC網站使用cookie來獲取用戶每次訪問時的詳細信息，我們網站部分的網頁有使用Cookie，以啟動該方面的功能而方便讓造訪者更容易使用這些網頁的功能。
                    </p>
                    <h3> VI.變更通知</h3>
                    <p>WWSC保留隨時修改本隱私權政策的權利，請時常閱讀本政策和熟悉其中的條款。</p>
                    <h3>VII. 聯絡我們</h3>
                    <p>如果在任何時候你想取消訂閱我們未來的電子郵件，您可以在每個郵件的底部按照說明步驟</p>
                    <p>如果有對本隱私政策有任何疑問，您可以使用下面的聯絡信息與我們聯繫。</p>
                    <div className="w3-section">
                        <p><strong>世界Wiser運動委員會 (World Wiser Sport Committee)</strong></p>
                        <p>709 E. Colorado Boulevard, Suite 270, Pasadena, CA 91101, USA</p>
                        <p>
                            網址: <Link to="/">https://worldwisersport.org/</Link>
                        </p>
                        <p>
                            電子郵件信箱:<a href="mailto: info@worldwisersport.org"> <em>info@worldwisersport.org</em></a>
                        </p>
                        <p>電話: (626) 795-7485; </p>
                        <p className="w3-center w3-section">© 2012-2023 本網站所有內容版權屬於世界Wiser運動委員會</p>
                    </div>
                </div>
            )}
            {lang === "zh-CN" && (
                <div className="text-container">
                    <h1>隐私权政策</h1>
                    <p className="privacy-date no-ident">
                        最近一次修改日期: <strong>11/08/2014</strong>
                    </p>
                    <div className="w3-section">
                        <p>
                            <strong>
                                世界Wiser运动委员会 (英文名为World Wiser Sport Committee, 以下简称”WWSC”)
                                承诺保护您的隐私权。
                            </strong>
                            我们编写本隐私权政策的目的是希望为那些关心“个人身份识别资讯”如何在网上被使用的用户们提供更佳的服务。请仔细地阅读我们的隐私权政策以便清楚地了解我们的网站将如何收集、使用、保护或用其它方式来处理您的个人身份识别资讯。
                        </p>
                    </div>
                    <h3>I. 我们收集的资讯类型</h3>
                    <p>我们收集以下两种基本类型的资讯：</p>
                    <h4>(1) 个人身份识别资讯</h4>
                    <p>
                        当被使用在美国隐私法和资讯安全时，个人身份识别资讯是一种可以被单独使用或与其他资讯一起来识别，联繫，或者找到某一个人，或依其资讯背景可来识别某个个人。
                    </p>
                    <p>
                        您可以浏览我们的网站而不需要透露任何有关您的个人资料。然而如果您要参与我们网站上任何互动性功能，包括但不限於註册或申请培训，登记订阅WWSC的电邮通讯录，或从WWSC接收电子报或电子邮件，包含相关的新闻报导，通知或WWSC的活动消息（这些统称为“服务项目”）我们的网站可能需要您註册或登记，并提供有关您个人的正确信息。否则这些服务项目可能无法发挥其正常的功能。
                    </p>
                    <p>
                        当使用这些服务项目时，我们可能会要求您提供全部或部分以下的个人身份识别资讯：如您的姓名，地址（包括城市，州/省，居住国家，邮递区号/邮政编码），电子邮件地址，电话号码，性别，用户名称和密码。
                    </p>
                    <h5>(2) 集合资讯</h5>
                    <p>
                        集合资讯是指和集体用户们或不同类别用户们有关的资讯，此资讯是不能识别或无法适合地用来识别个别的用户。
                    </p>
                    <p>
                        在法律的允许下，当您访问我们的网站时候，我们可能会收集和处理您的所在位置资讯。这些资讯可能经由与我们网站互动交流的移动装置或者根据您的IP位址获得。我们将用收集到的IP位址来分析趋势，管理网站，追踪用户活动情形，和收集广泛的人口统计综合资讯。
                        IP位址并不连结到个人身份识别资讯的。另外，由於系统管理，侦测使用模式和排除故障的目的，我们的网站伺服器会自动地记录标準浏览讯息，包括用户浏览器类型，浏览次数或打开邮箱，URL请求和经由什麽网站介绍来到我们网站的相关资讯。这些资讯我们不会与第叁方共享，仅在WWSC需要知道的基础上使用。在未经您明确许可使用，任何数据中有相关的个人识别资讯，我们会以等同个人身份识别资讯的方式来处理。
                    </p>
                    <h4>II. 我们何时收集您的信息?</h4>
                    <p>当您在我们的网站上註册，订阅电子报，填写表格或在我们网站上输入资料时，我们收集您的资讯。</p>
                    <h4>III. 我们如何使用您的信息?</h4>
                    <p>
                        当您註册，订阅我们的电子报，回应我们的交流沟通，浏览我们的网页或者使用我们网站其他某些功能时，我们收集到您的信息。这些信息我们可能使用在以下几个方面：
                    </p>
                    <p>
                        提供用户个人化的体验，以便让我们能够提供用户最感兴趣的内容类别和服务。 •
                        提升我们的网站内容以便提供更好的服务。 • 为了让我们能够提供更好的服务来回应客户的服务要求。
                        以便能定期发送关於我们服务的电子邮件。
                    </p>
                    <h5>(1) 保密性和向第叁方披露</h5>
                    <p>
                        用户的记录被视为机密，因此我们不会披露给任何第叁方;但是如果是由於通过法律的要求，我们可能必须向有关当局披露被要求的资讯。
                        我们不会将您的个人资讯出售、分享或出租给任何第叁方或使用您的电子邮箱来发送您不需要的邮件。我们只会根据您同意的服务条款来发送WWSC的邮件给您。
                        但这不包括我们的网站託管公司和协助我们运作我们的网站，推广我们服务或为您提供服务的其他团体，只要这些公司和团体同意保密这些资讯。
                        当我们收到合理的要求通知後，每个用户都有权利要求查看或複印我们保留他或她的任何所有记录。用户们也被要求保留与我们提供服务相关的任何文献的複印件。在适当情况下，为了双方的利益，我们也会提供用户适当的书面资料，笔记或记录副本作为协议契约的一部分。
                    </p>
                    <h5>(2) 第叁方链接</h5>
                    <p>
                        有时候出於我们的决定考虑，我们可能在本网站包括或提供第叁方产品或服务的链接。这些第叁方网站有其分别和独立的隐私权政策。因此，我们对这些链接网站的内容和活动，没有任何法律上的责任或义务。但是儘管如此，为了保障我们网站的完整性，我们欢迎随时向我们提供任何关於这些第叁方链接网站的回馈。
                    </p>
                    <h4>IV. 我们如何保护访客的信息?</h4>
                    <p>
                        您的个人身份识别资讯是有受密码保护的，您提供的任何个人身份身份识别资讯给本网站时是由合理的技术措施保护，以防止未经授权的披露。然而资讯被提供给WWSC时并没有通过SSL加密技术来传输。我们建议您不要将密码洩露给任何人，在任何时候WWSC不会有任何人通过电子邮件向您要求提供密码。
                    </p>
                    <h4>V. 我们使用Cookie吗?</h4>
                    <p>
                        Cookie是您浏览的网站放在您的浏览器的一小段字码，它帮助该网站记住关於您的访问的信息，例如您的偏好语言和其他设定。
                        这将使您下次对该网站的浏览更容易和方便。
                    </p>
                    <p>
                        跟大多数互动式网站一样，
                        WWSC网站使用cookie来获取用户每次访问时的详细信息，我们网站部分的网页有使用Cookie，以启动该方面的功能而方便让造访者更容易使用这些网页的功能。
                    </p>
                    <h4> VI.变更通知</h4>
                    <p>WWSC保留随时修改本隐私权政策的权利，请时常阅读本政策和熟悉其中的条款。</p>
                    <h4>VII. 联络我们</h4>
                    <p>如果在任何时候你想取消订阅我们未来的电子邮件，您可以在每个邮件的底部按照说明步骤</p>
                    <p>如果有对本隐私政策有任何疑问，您可以使用下面的联络信息与我们联繫。</p>
                    <div className="w3-section">
                        <p><strong>世界Wiser运动委员会</strong> (World Wiser Sport Committee)</p>
                        <p>709 E. Colorado Boulevard, Suite 270, Pasadena, CA 91101, USA</p>
                        <p>
                            网址: <Link to="/">https://worldwisersport.org/</Link>
                        </p>
                        <p>
                            电子邮件信箱:<a href="mailto: info@worldwisersport.org"> <em>info@worldwisersport.org</em></a>
                        </p>
                        <p>电话: (626) 795-7485; </p>
                        <p className="w3-center w3-section">© 2012-2023 本网站所有内容版权属於世界Wiser运动委员会</p>
                    </div>
                </div>
            )}
        </div>
    );
}
