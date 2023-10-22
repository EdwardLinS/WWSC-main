/** @format */

import "./Ceremony.css";
import { useTranslation } from "react-i18next";
import CustomTab from "../../../components/CustomTab/CustomTab";
// import YoutubeEmbed from "../../../components/YoutubeEmbed/YoutubeEmbed";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Ceremony() {
    const { t, i18n } = useTranslation("global");

    const lang = i18n.language;

    const pressContent = (
        <div className="content ceremony">
            <div className="img-slides">
                <Carousel
                    // width="1024px"
                    autoPlay={true}
                    showArrows={true}
                    stopOnHover={true}
                    showIndicators={true}
                    // showThumbs="false"
                    // dynamicHeight="true"
                >
                    <div className="slide-container">
                        <img
                            src="\assets\Ceremony\image_01.jpg"
                            alt="inaugural_ceremony_image_01"
                            className="img-slide-item"
                        />
                        <p className="legend">
                            President Vic Yee addressed in the first inaugural ceremony of World Wiser Sport Committee
                            (1)
                        </p>
                    </div>
                    <div className="slide-container">
                        <img
                            src="\assets\Ceremony\image_02.jpg"
                            alt="inaugural_ceremony_image_02"
                            className="img-slide-item"
                        />
                        <p className="legend">
                            President Vic Yee addressed in the first inaugural ceremony of World Wiser Sport Committee
                            (2)
                        </p>
                    </div>
                    <div className="slide-container">
                        <img
                            src="\assets\Ceremony\image_03.jpg"
                            alt="inaugural_ceremony_image_03"
                            className="img-slide-item"
                        />
                        <p className="legend">
                            Mr. Vic Yee, the President of World Wiser Sport Committee, has a group picture with VIPs who
                            came to view the ceremony and extended their congratulations.
                        </p>
                    </div>
                    <div className="slide-container">
                        <img
                            src="\assets\Ceremony\image_04.jpg"
                            alt="inaugural_ceremony_image_04"
                            className="img-slide-item"
                        />
                        <p className="legend">
                            World Wiser Sport Committee Holds Its First Inaugural Ceremony at Its United States
                            Headquarters
                        </p>
                    </div>
                    <div className="slide-container">
                        <img
                            src="\assets\Ceremony\image_05.jpg"
                            alt="inaugural_ceremony_image_05"
                            className="img-slide-item"
                        />
                        <p className="legend">Wiser Sport Committee Holds Its First Inaugural Ceremony</p>
                    </div>
                </Carousel>
            </div>
            <p>
                The World Wiser Sport Committee, headquartered in the United States, is the flagship organization for
                the Wiser sport worldwide. It held its first inaugural ceremony on the afternoon of March 2nd, 2013, at
                its headquarters in Covina, California. Leaders of national, provincial and state Wiser sport
                organizations attended the large-scale gathering. They came from more than ten countries and regions,
                such as the United States, Canada, China, Thailand, Vietnam, South Africa, Paraguay, Malaysia, Taiwan,
                and Hong Kong. The mayor of Covina city and some diplomatic envoys and honored guests also came to view
                the ceremony and extend their congratulations.
            </p>
            <p>
                The Wiser sport originated as the highest-class ball sport played in ancient palaces and royal courts by
                emperors, kings, ministers, scholar-officials and Western heads of state in order to exercise the body,
                cultivate the ability to strategize, and have a battle of wits. Unfortunately, after the passage of a
                long period of time, it became a lost sport. However, a magnificent, selfless, elder virtuous one has
                now rediscovered and perfected the Wiser sport for the benefit of the public. This elder virtuous one
                has a noble moral character. In the 112th Congress, the United States Senate passed through unanimous
                consent resolution 614, which commended this elder virtuous one for the contributions he has made to
                humanity.
            </p>
            <p>
                This elder virtuous one taught all of the techniques and rules of the Wiser sport to the World Wiser
                Sport Committee without receiving any compensation. At that time, he solemnly stated, “I transmitted all
                the techniques of the Wiser sport to you. There are two things that need to be declared. First, you must
                not disclose my name to the public; secondly, you must spread the Wiser sport all over the world and
                become the headquarters that leads the Wiser sport. Remember, I must state that the Wiser sport does not
                belong to Buddhism. It is not a sport that belongs to any particular religion. No matter what one’s
                religion may be, no matter if one has no religion, no matter if one is male or female, old or young,
                everyone has the right to enjoy and be part of this sport. That is because Wiser is purely a ball sport
                that nature has bestowed upon humanity to strengthen the body and improve health. It is completely
                unconnected with race, ethnicity, or religion. Everyone has an equal right to enjoy it. Its only purpose
                is to benefit humanity through strengthening the body, improving health, elevating morality, increasing
                friendship, and promoting peace in the world.”
            </p>
            <p>
                During the inaugural ceremony on March 2nd, committee members and supervisors unanimously selected Vic
                Yee to take office as the President of World Wiser Sport Committee. Vic Yee, as President, then
                conferred insignia upon Vice-Presidents Gregory Noble, Jessie Hu, and Pengzhi Qi, Secretary-General
                Vince Huang, committee members Ming Yu Huang, Steven Meyers, and Ding Mar, and Deputy
                Secretaries-General Amy Roiland, Michael Lin, and Joe Hong. He also conferred insignia upon leaders of
                Wiser sport organizations in various countries. Each insignia corresponded to the respective offices
                that were assumed. Moreover, Vic Yee urged workers at every level to strive to spread the Wiser sport
                all over the world so that all of humanity could enjoy the benefits of this sport.
            </p>
            <p>
                Because the Wiser sport originated in ancient palaces and royal courts, it is a noble sport of gentlemen
                and ladies. As such, it does not have the casual nature of other ball sports. That is why a dignified
                appearance and dignified attire are very important. Without those, the noble and elegant spirit of the
                Wiser sport will be lost. We hope that all players attending in formal national or international Wiser
                sport tournaments can wear the Wiser uniforms specified by the World Wiser Sport Committee. However,
                World Wiser Sport Committee has not required players to wear the uniform when practicing Wiser ball or
                when playing general Wiser ball matches. At such times, players can wear whatever clothing they like.
            </p>
            <p>
                At the inaugural ceremony, many players of the Wiser sport wore such standard uniforms. They looked
                orderly, neat, and full of energy. The male players had a dignified, handsome bearing, and the female
                players had a noble, elegant, glowing appearance that conveyed youthful vigor.
            </p>
            <p>
                Wiser is a ball sport in which strategy and exercise are combined, and motion and stillness vie with
                each other, all in a setting where teams compete against each other. Playing the Wiser sport not only
                builds physical strength, but it also develops wisdom and brain power. It does not matter if the player
                is old, middle-aged, young, a teenager, a child, male, female, tall, short, obese, or thin. It does not
                matter what the player’s ethnicity or race is. A special playing field is not required. Different types
                of playing fields and various irregularly shaped obstacles are not only part of the overall setting of
                the sport, but they also provide the key to attaining wisdom. Clever planning and intelligence spring
                from the minds of players as myriad changes take place during the course of a game. All of this enables
                players to constantly enrich their minds, improve their wisdom, and experience the delight of
                extraordinary variety. These are the characteristics of Wiser that all other ball sports lack.
            </p>
            <p>
                Moreover, playing the Wiser sport is extremely safe. It entails both individual and group strategies and
                tactics. From the perspective of developing one’s intelligence and thought processes, the Wiser sport is
                like forming battle formations in war or the playing of chess. From the perspective of exercising the
                body and increasing one’s physical strength, it is a perfect, natural, high-class ball sport. Dr.
                Ching-Kuo Wu, a member of the International Olympic Committee’s Executive Board and President of the
                International Boxing Association, highly praised the Wiser sport in a letter he wrote on behalf of the
                International Olympic Committee and the International Boxing Association congratulating the World Wiser
                Sport Committee. He wrote, “Wiser is thus the most ideal sport of all the ball sports.”
            </p>
            <p>
                The World Wiser Sport Committee is a legally established public-benefit non-profit organization. It is
                the highest, most authoritative organization that leads the Wiser sport throughout world. It trains
                different levels of umpires based upon the rules specially formulated for the Wiser sport. It holds
                international tournaments, guides the work of Wiser Sport Committees in countries and regions around the
                globe, and leads the expansion of the Wiser sport in countries and regions all over the world. Its
                mission is to enable people around the world who live in different regions and are of different races,
                ages, religions, and cultures to play the Wiser sport and, in so doing, rid themselves of illness, delay
                the aging process, improve their physical and mental health, enhance their wisdom, increase their
                friends, elevate their morality, and thereby advance world peace and happiness among mankind.
            </p>
        </div>
    );

    const newsContent = (
        <div className="content news">
            <h3>Ancient “World Wiser Sport” resurrected in the San Gabriel Valley</h3>
            <h4>
                <strong>San Gabriel Valley Tribune</strong>
            </h4>
            <p style={{ textIndent: "0" }}>
                <a href="https://www.sgvtribune.com/2013/03/07/ancient-world-wiser-sport-resurrected-in-the-san-gabriel-valley/">
                    https://www.sgvtribune.com/2013/03/07/ancient-world-wiser-sport-resurrected-in-the-san-gabriel-valley/
                </a>
            </p>
            <h4>
                <strong>Chinese News Reports</strong>
            </h4>
            <h3>世界Wiser運動委員會總部設美國 15國家地區代表出席</h3>
            <h4>
                <strong>ETtoday</strong>
            </h4>
            <p style={{ textIndent: "0" }}>
                <a href="http://www.ettoday.net/news/20130313/174351.htm#ixzz2vnUpwhj4">
                    http://www.ettoday.net/news/20130313/174351.htm#ixzz2vnUpwhj4
                </a>
            </p>
        </div>
    );

    const tvContent = (
        <div className="content">
            <h3>ZWTV News Report (Chinese)</h3>
            <p style={{ textIndent: "0" }}>中旺新聞　美Wiser球典禮　各國球隊參與盛會 (03-07-2013)</p>
            <div className="report-video-content">
                <iframe
                    width="760"
                    height="515"
                    src="https://www.youtube.com/embed/r6EJx2U-ANw?si=zPZ-cdju3nD2loFa"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );

    const content = [
        { title: t("ceremony.tab_1"), content: pressContent },
        { title: t("ceremony.tab_2"), content: newsContent },
        { title: t("ceremony.tab_3"), content: tvContent },
    ];

    const pressContent_TW = (
        <div className="content ceremony">
            <div className="img-slides">
                <Carousel
                    // width="1024px"
                    autoPlay={true}
                    showArrows={true}
                    stopOnHover={true}
                    showIndicators={true}
                    // dynamicHeight="true"
                >
                    <div className="slide-container">
                        <img
                            src="\assets\Ceremony\image_01.jpg"
                            alt="inaugural_ceremony_image_01"
                            className="img-slide-item"
                        />
                        <p className="legend">世界Wiser運動委員會第一屆就職典禮，Vic Yee主席在講話 (一)。 </p>
                    </div>
                    <div className="slide-container">
                        <img
                            src="\assets\Ceremony\image_02.jpg"
                            alt="inaugural_ceremony_image_02"
                            className="img-slide-item"
                        />
                        <p className="legend">世界Wiser運動委員會第一屆就職典禮，Vic Yee主席在講話 (二)。 </p>
                    </div>
                    <div className="slide-container">
                        <img
                            src="\assets\Ceremony\image_03.jpg"
                            alt="inaugural_ceremony_image_03"
                            className="img-slide-item"
                        />
                        <p className="legend">世界Wiser運動委員會主席Vic Yee與到場致賀的貴賓們合影。.</p>
                    </div>
                    <div className="slide-container">
                        <img
                            src="\assets\Ceremony\image_04.jpg"
                            alt="inaugural_ceremony_image_04"
                            className="img-slide-item"
                        />
                        <p className="legend">世界Wiser運動委員會人員就職，總部在美國。</p>
                    </div>
                    <div className="slide-container">
                        <img
                            src="\assets\Ceremony\image_05.jpg"
                            alt="inaugural_ceremony_image_05"
                            className="img-slide-item"
                        />
                        <p className="legend">世界Wiser運動委員會第一屆就職典禮。</p>
                    </div>
                </Carousel>
            </div>
            <p>
                世界Wiser運動委員會，這個總部設在美國的全世界Wiser運動的總部機構，於3月2日下午在位於加州Covina市的總部大樓舉行了第一屆人員就職典禮，來自美國、加拿大、中國、泰國、越南、南非、巴拉圭、馬來西亞、台灣、香港等十幾個國家和地區的國家級、省級的Wiser球會負責人出席了大會，該市市長、一些外交使節和貴賓到場祝賀觀禮。
            </p>

            <p>
                Wiser球，原是古代宮廷君王、大臣與士大夫和西方元首總統謀略鬥智、鍛煉身體最高貴最頂級的球藝運動，但早已年久失傳，後來由一位偉大無私的長德發掘並加以完善以利益大眾。長德道德崇高，美國國會參議院通過無記名投票在第112屆國會全票通過第614號決議上表彰這位長德對世界人類所做的貢獻。這位長德在無償地將Wiser球藝和全套規則完整傳授給世界Wiser運動委員會時嚴肅地說：「我把球藝交給你們，有兩點要說明：第一，你們不要把我的名字公佈於世，我不要任何名利；第二，你們必須把Wiser球發展普及到全世界，成為領導Wiser球的總會。你們記住！我必須說Wiser不是佛教擁有的運動，也不是任何一個宗教獨有的運動，任何宗教和非宗教人士，無論男女老幼，都有權利享受它，都是他們的一份子，因為Wiser是大自然賦予人類的強身健體、沒有種族宗教性、人人有權平等享受的一種純體育球類運動，它唯一的作用就是給人類帶來利益，強身健體，塑造道德友善，和平助益世界。」
            </p>
            <p>
                在3月2日的就職典禮上，Vic Yee 被委員和監事們一致推舉就職為世界Wiser運動委員會的主席，隨後，Vic
                Yee主席分別給副主席Gregory Noble， Jessie Hu和Pengzhi Qi，秘書長Vince Huang，委員Ming Yu Huang，Steve
                Meyers，Martin，副秘書長Amy Roiland， Michael Lin， Joe
                Hong以及各國家Wiser運動委員會的主席一一授予身份就職徽章，並要求所有各級工作人員努力將Wiser球推廣到全世界，讓所有人類都能享受到Wiser球的利益。
            </p>
            <p>
                由於Wiser球來源於古代宮廷皇室，是一種高貴的紳士運動，與其它球類隨和的性質不同，所以儀容裝束威儀非常重要，否則就失掉了Wiser球的高貴典雅氣質，在Wiser球的國家級或國際級正式比賽時，其著裝希望統一於世界Wiser運動委員會規定的著裝，但是球員們平時練習或比賽時，任其自由穿著自己喜歡的服裝。
            </p>
            <p>
                在大會現場，許多球員都穿上了Wiser球的標準球員裝，一眼望去，不僅儀容整潔，精神十足，而且男球員顯的氣質高貴，英俊挺拔，女球員英姿貴雅，容輝朝氣。
            </p>
            <p>
                Wiser球，是以智謀結合運動的一種動靜相爭的对抗性的球類體育運動，既鍛鍊體力，又開發智慧腦力，它不分老年、中年、青年、少年、幼兒、男女、高矮、胖瘦、種族、膚色，也不需要專門場地，任何不同場地、異型障礙不僅是整個球場的一個部分，而且是當下開膚智力的好玄訣，對球員來說都在千變萬化中生發心機聰慧，讓球員不斷深化、提高自己的智慧，讓打球增添更多的變化和趣味性，這是當今所有球類運動所不具備的特色。
            </p>
            <p>
                同時，打Wiser球，非常安全，它既是個人、也是團體的謀略和戰術，從智力思維訓練方面來說，有如下棋佈陣，從身體的鍛鍊體力增長方面來說，更是一個完美自然的高級球類運動。正如國際奧委會執委、國際拳擊協會主席吳經國博士在代表國際奧委會和國際拳擊協會祝賀世界Wiser運動委員會的函件中高度讚歎Wiser球時說：“Wiser是球類運動中最完美的體育運動。”
            </p>
            <p>
                世界Wiser運動委員會是一個公眾性非營利組織，也是合法的、全世界最高、最權威的Wiser領導機構，依特定的Wiser球的規則，訓練不同級別的裁判人員，主辦世界性的比賽，指導各個國家和地區的Wiser運動委員會的工作，領導Wiser運動在全世界各個國家和地區的發展，其目的就是讓全世界不同地域、不同膚色、不同年齡、不同宗教、不同文化的人，都能通過打Wiser球，祛除疾病，延緩衰老，增強身心健康，增長智慧，增進友誼，提升道德，進而促進整個世界的和平和人類的幸福。
            </p>
        </div>
    );

    const newsContent_TW = (
        <div className="content news">
            <h3>古代世界級Wiser 運動在聖蓋博谷復活了！</h3>
            <h4>
                <strong>聖蓋博谷論壇報 （San Gabriel Valley Tribune）</strong>
            </h4>
            <p style={{ textIndent: "0" }}>
                <a href="https://www.sgvtribune.com/2013/03/07/ancient-world-wiser-sport-resurrected-in-the-san-gabriel-valley/">
                    https://www.sgvtribune.com/2013/03/07/ancient-world-wiser-sport-resurrected-in-the-san-gabriel-valley/
                </a>
            </p>
            <h4>
                <strong>中文新聞報導</strong>
            </h4>
            <h3>世界Wiser運動委員會總部設美國 15國家地區代表出席</h3>
            <h4>
                <strong>ETtoday</strong>
            </h4>
            <p style={{ textIndent: "0" }}>
                <a href="http://www.ettoday.net/news/20130313/174351.htm#ixzz2vnUpwhj4">
                    http://www.ettoday.net/news/20130313/174351.htm#ixzz2vnUpwhj4
                </a>
            </p>
        </div>
    );

    const tvContent_TW = (
        <div className="content">
            <h3>ZWTV 中文新聞報導</h3>
            <p style={{ textIndent: "0" }}>中旺新聞　美Wiser球典禮　各國球隊參與盛會 (03-07-2013)</p>
            <div className="report-video-content">
                <iframe
                    width="760"
                    height="515"
                    src="https://www.youtube.com/embed/r6EJx2U-ANw?si=zPZ-cdju3nD2loFa"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );

    const content_TW = [
        { title: t("ceremony.tab_1"), content: pressContent_TW },
        { title: t("ceremony.tab_2"), content: newsContent_TW },
        { title: t("ceremony.tab_3"), content: tvContent_TW },
    ];

    // ====================简体中文==============
    const pressContent_CN = (
        <div className="content ceremony">
            <div className="img-slides">
                <Carousel
                    // width="1024px"
                    autoPlay={true}
                    showArrows={true}
                    stopOnHover={true}
                    showIndicators={true}
                    // dynamicHeight="true"
                >
                    <div className="slide-container">
                        <img
                            src="\assets\Ceremony\image_01.jpg"
                            alt="inaugural_ceremony_image_01"
                            className="img-slide-item"
                        />
                        <p className="legend">世界Wiser运动委员会第一届就职典礼，Vic Yee主席在讲话 (一)。 </p>
                    </div>
                    <div className="slide-container">
                        <img
                            src="\assets\Ceremony\image_02.jpg"
                            alt="inaugural_ceremony_image_02"
                            className="img-slide-item"
                        />
                        <p className="legend">世界Wiser运动委员会第一届就职典礼，Vic Yee主席在讲话 (二)。 </p>
                    </div>
                    <div className="slide-container">
                        <img
                            src="\assets\Ceremony\image_03.jpg"
                            alt="inaugural_ceremony_image_03"
                            className="img-slide-item"
                        />
                        <p className="legend">世界Wiser运动委员会主席Vic Yee与到场致贺的贵宾们合影。.</p>
                    </div>
                    <div className="slide-container">
                        <img
                            src="\assets\Ceremony\image_04.jpg"
                            alt="inaugural_ceremony_image_04"
                            className="img-slide-item"
                        />
                        <p className="legend">世界Wiser运动委员会人员就职，总部在美国。</p>
                    </div>
                    <div className="slide-container">
                        <img
                            src="\assets\Ceremony\image_05.jpg"
                            alt="inaugural_ceremony_image_05"
                            className="img-slide-item"
                        />
                        <p className="legend">世界Wiser运动委员会第一届就职典礼。</p>
                    </div>
                </Carousel>
            </div>
            <p>
                世界Wiser運動委員會，這個總部設在美國的全世界Wiser運動的總部機構，於3月2日下午在位於加州Covina市的總部大樓舉行了第一屆人員就職典禮，來自美國、加拿大、中國、泰國、越南、南非、巴拉圭、馬來西亞、台灣、香港等十幾個國家和地區的國家級、省級的Wiser球會負責人出席了大會，該市市長、一些外交使節和貴賓到場祝賀觀禮。
            </p>

            <p>
                Wiser球，原是古代宮廷君王、大臣與士大夫和西方元首總統謀略鬥智、鍛煉身體最高貴最頂級的球藝運動，但早已年久失傳，後來由一位偉大無私的長德發掘並加以完善以利益大眾。長德道德崇高，美國國會參議院通過無記名投票在第112屆國會全票通過第614號決議上表彰這位長德對世界人類所做的貢獻。這位長德在無償地將Wiser球藝和全套規則完整傳授給世界Wiser運動委員會時嚴肅地說：「我把球藝交給你們，有兩點要說明：第一，你們不要把我的名字公佈於世，我不要任何名利；第二，你們必須把Wiser球發展普及到全世界，成為領導Wiser球的總會。你們記住！我必須說Wiser不是佛教擁有的運動，也不是任何一個宗教獨有的運動，任何宗教和非宗教人士，無論男女老幼，都有權利享受它，都是他們的一份子，因為Wiser是大自然賦予人類的強身健體、沒有種族宗教性、人人有權平等享受的一種純體育球類運動，它唯一的作用就是給人類帶來利益，強身健體，塑造道德友善，和平助益世界。」
            </p>
            <p>
                在3月2日的就職典禮上，Vic Yee 被委員和監事們一致推舉就職為世界Wiser運動委員會的主席，隨後，Vic
                Yee主席分別給副主席Gregory Noble， Jessie Hu和Pengzhi Qi，秘書長Vince Huang，委員Ming Yu Huang，Steve
                Meyers，Martin，副秘書長Amy Roiland， Michael Lin， Joe
                Hong以及各國家Wiser運動委員會的主席一一授予身份就職徽章，並要求所有各級工作人員努力將Wiser球推廣到全世界，讓所有人類都能享受到Wiser球的利益。
            </p>
            <p>
                由於Wiser球來源於古代宮廷皇室，是一種高貴的紳士運動，與其它球類隨和的性質不同，所以儀容裝束威儀非常重要，否則就失掉了Wiser球的高貴典雅氣質，在Wiser球的國家級或國際級正式比賽時，其著裝希望統一於世界Wiser運動委員會規定的著裝，但是球員們平時練習或比賽時，任其自由穿著自己喜歡的服裝。
            </p>
            <p>
                在大會現場，許多球員都穿上了Wiser球的標準球員裝，一眼望去，不僅儀容整潔，精神十足，而且男球員顯的氣質高貴，英俊挺拔，女球員英姿貴雅，容輝朝氣。
            </p>
            <p>
                Wiser球，是以智謀結合運動的一種動靜相爭的对抗性的球類體育運動，既鍛鍊體力，又開發智慧腦力，它不分老年、中年、青年、少年、幼兒、男女、高矮、胖瘦、種族、膚色，也不需要專門場地，任何不同場地、異型障礙不僅是整個球場的一個部分，而且是當下開膚智力的好玄訣，對球員來說都在千變萬化中生發心機聰慧，讓球員不斷深化、提高自己的智慧，讓打球增添更多的變化和趣味性，這是當今所有球類運動所不具備的特色。
            </p>
            <p>
                同時，打Wiser球，非常安全，它既是個人、也是團體的謀略和戰術，從智力思維訓練方面來說，有如下棋佈陣，從身體的鍛鍊體力增長方面來說，更是一個完美自然的高級球類運動。正如國際奧委會執委、國際拳擊協會主席吳經國博士在代表國際奧委會和國際拳擊協會祝賀世界Wiser運動委員會的函件中高度讚歎Wiser球時說：“Wiser是球類運動中最完美的體育運動。”
            </p>
            <p>
                世界Wiser運動委員會是一個公眾性非營利組織，也是合法的、全世界最高、最權威的Wiser領導機構，依特定的Wiser球的規則，訓練不同級別的裁判人員，主辦世界性的比賽，指導各個國家和地區的Wiser運動委員會的工作，領導Wiser運動在全世界各個國家和地區的發展，其目的就是讓全世界不同地域、不同膚色、不同年齡、不同宗教、不同文化的人，都能通過打Wiser球，祛除疾病，延緩衰老，增強身心健康，增長智慧，增進友誼，提升道德，進而促進整個世界的和平和人類的幸福。
            </p>
        </div>
    );

    const newsContent_CN = (
        <div className="content news">
            <h3>古代世界级Wiser 运动在圣盖博谷复活了！</h3>
            <h4>
                <strong>圣盖博谷论坛报 （San Gabriel Valley Tribune）</strong>
            </h4>
            <p style={{ textIndent: "0" }}>
                <a href="https://www.sgvtribune.com/2013/03/07/ancient-world-wiser-sport-resurrected-in-the-san-gabriel-valley/">
                    https://www.sgvtribune.com/2013/03/07/ancient-world-wiser-sport-resurrected-in-the-san-gabriel-valley/
                </a>
            </p>
            <h4>
                <strong>中文新闻报导</strong>
            </h4>
            <h3>世界Wiser运动委员会总部设美国 15国家地区代表出席</h3>
            <h4>
                <strong>ETtoday</strong>
            </h4>
            <p style={{ textIndent: "0" }}>
                <a href="http://www.ettoday.net/news/20130313/174351.htm#ixzz2vnUpwhj4">
                    http://www.ettoday.net/news/20130313/174351.htm#ixzz2vnUpwhj4
                </a>
            </p>
        </div>
    );

    const tvContent_CN = (
        <div className="content">
            <h3>ZWTV 中文新闻报导</h3>
            <p style={{ textIndent: "0" }}>中旺新闻　美Wiser球典礼　各国球队参与盛会 (03-07-2013)</p>
            <div className="report-video-content">
                <iframe
                    width="760"
                    height="515"
                    src="https://www.youtube.com/embed/r6EJx2U-ANw?si=zPZ-cdju3nD2loFa"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
    const content_CN = [
        { title: t("ceremony.tab_1"), content: pressContent_CN },
        { title: t("ceremony.tab_2"), content: newsContent_CN },
        { title: t("ceremony.tab_3"), content: tvContent_CN },
    ];

    return (
        <div>
            <div className="wwsc-container">
                {lang === "en" && (
                    <div className="img-text-container">
                        <h1>{t("ceremony.title")}</h1>
                        <CustomTab content={content} />
                    </div>
                )}

                {lang === "zh-TW" && (
                    <div className="img-text-container">
                        <h1>{t("ceremony.title")}</h1>
                        <CustomTab content={content_TW} />
                    </div>
                )}

                {lang === "zh-CN" && (
                    <div className="img-text-container">
                        <h1>{t("ceremony.title")}</h1>
                        <CustomTab content={content_CN} />
                    </div>
                )}
            </div>
        </div>
    );
}
