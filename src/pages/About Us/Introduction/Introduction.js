/** @format */

import "./Introduction.css";
import { useTranslation } from "react-i18next";

export default function Introduction() {
    const { t, i18n } = useTranslation("global");

    const lang = i18n.language;
    // console.log(i18n.language);

    return (
        <div className="wwsc-container">
            <div className="image-container">
                <img src="/assets/Landing/intro.jpg" alt="flags" />
            </div>

            {lang === "en" && (
                <div className="img-text-container">
                    <h1>{t("intro.title")}</h1>
                    <p>
                        The Wiser sport originated as the most prestigious ball sport played in ancient palaces and
                        royal courts by emperors, kings, ministers, scholar-officials and Western heads of state in
                        order to cultivate the ability to strategize, exercise the body, and engage in a battle of wits.
                        Unfortunately, with the passage of time, this diversion enjoyed worldwide by emperors, kings,
                        and prime ministers has long since become a lost sport.
                    </p>

                    <p>
                        However, a magnificent, selfless, elder virtuous one has now rediscovered and perfected the
                        Wiser sport for the benefit of the public. This elder virtuous one is the one of noble moral
                        character. In its 112th Congress, the United States Senate passed through unanimous consent
                        resolution 614, which commended the elder virtuous one for the contributions he has made to
                        humanity. When the elder virtuous one taught all of the techniques and rules of the Wiser sport
                        to World Wiser Sport Committee, he solemnly stated, “You must spread the Wiser sport all over
                        the world and become the headquarters that leads the Wiser sport. Remember, no matter if one is
                        male or female, old or young—everyone has the right to enjoy Wiser. That is because Wiser is
                        purely a ball sport that nature has bestowed upon humanity to strengthen the body and improve
                        health. Everyone has the equal right to enjoy it. Its only purpose is to benefit humanity
                        through strengthening the body, improving health, elevating morality, increasing friendship, and
                        promoting peace in the world.” The World Wiser Sport Committee has now been formally
                        established, with its headquarters located in the United States, the founding nation of the
                        Wiser sport. The inauguration ceremony for installing the World Wiser Sport Committee’s
                        first-term leadership was held in the United States on March 2, 2013.
                    </p>

                    <p>
                        Wiser is a ball sport in which strategy and exercise are combined, and motion and stillness vie
                        with each other, all in a setting where teams compete against each other. A special playing
                        field is not required. It can be played in any area, no matter how many obstacles there may be.
                        It is extremely safe and suitable for everyone—male, female, old, and young can play it.
                    </p>

                    <p>
                        It is an unfortunate fact that some elderly people are not in good health. They may even suffer
                        from limb numbness, which makes it difficult for them to walk. Some have cognitive and memory
                        issues that can impair their ability to function in life. Yet, as long as elderly people are
                        able to play Wiser, the Wiser sport can help them improve their immunity, strengthen their body,
                        enhance their stamina, enliven exhausted brain cells, avoid senile dementia, broaden and ease
                        their mind, increase their happiness, prevent rheumatism and chilliness, and avoid loneliness,
                        insomnia, and numbness of the limbs.
                    </p>

                    <p>
                        Middle-aged and young people can likewise reap these benefits. Through playing Wiser, they can
                        enhance their wisdom and develop their mental vitality. In addition, playing Wiser can resolve
                        the tendency of homebound men and women to be solitary, eccentric, and asocial. That is because
                        involvement in Wiser will provide them with opportunities to go outdoors, make friends during
                        matches, increase their self-confidence, and develop wholesome social relations.
                    </p>

                    <p>
                        Moreover, teenagers and children who play Wiser will become better at thinking independently and
                        will be more courteous and virtuous. They will develop tenacity, physical strength, and
                        intelligence. It is the best sport for rearing people of talent.
                    </p>

                    <p>
                        In short, playing the Wiser sport not only builds physical strength, but also develops wisdom
                        and brainpower. It does not matter if the player is old, middle-aged, young, a teenager, a
                        child, male, or female. No special playing field is required. An appropriate playing field could
                        be set up based on the conditions that exist at the particular site. Different types of playing
                        fields and various irregularly shaped obstacles are not only part of the setting of the sport,
                        but they even provide the key to opening wisdom. Clever planning and intelligence spring from
                        the minds of players as myriad changes take place during the course of a game. Variations in
                        playing fields and changes in obstacles add new challenges for the players. Even if one plays at
                        the same playing field all the time, since each match is unique in terms of its sequence, line,
                        direction, and strength of attacks initiated by members of one’s own team and the other team,
                        there is never any repetition among different matches. Each match requires the application of
                        different layout and attack techniques. All of this enables players to improve their wisdom,
                        sharpen their sport skills, and experience the delight of extraordinary variety. This is a
                        characteristic of Wiser that all other ball sports lack. A congratulation letter to the World
                        Wiser Sport Committee from the International Olympic Committee and the International Boxing
                        Association enthusiastically praised the Wiser sport as “the most ideal sport of all the ball
                        sports.”
                    </p>

                    <p>
                        Moreover, playing the Wiser sport is extremely safe. Anyone who likes to exercise, wants to
                        strengthen both body and mind, and wants to build moral character can play this sport. It is a
                        sport that truly treats everyone equally. It entails both individual and group strategies and
                        tactics. From the perspective of developing one’s intelligence and thought processes, the Wiser
                        sport is like organizing battle formations in war or playing chess. From the perspective of
                        exercising the body and increasing one’s physical strength, it is a perfect, natural, engaging
                        ball sport. Thus, Wiser is the perfect ball sport for athletes and non-athletes worldwide.
                    </p>

                    <p>
                        Generally speaking, Wiser has the following seven types of beneficial effects: strengthening the
                        body and improving health, enlivening the spirit, developing brainpower and wisdom, increasing
                        unity and friendliness, improving the body’s immunity, delaying the decline of stamina, and
                        helping to elevate moral character. Experience has shown that everyone who has played the Wiser
                        ball game praises it and wants to keep playing it, for it has clearly given them a healthier
                        body and mind.
                    </p>

                    <p>
                        The World Wiser Sport Committee is a legally established public-benefit nonprofit organization.
                        It is the highest, most authoritative Wiser sport organization in the world. The Committee
                        trains different levels of umpires based on the rules of the Wiser sport. It holds international
                        tournaments, guides the work of Wiser Sport Committees in countries and regions around the
                        globe, and leads the expansion of the Wiser sport throughout the world. Its mission is to enable
                        people living in various regions and of different races, ages, and cultures to play the Wiser
                        sport and, in so doing, to rid themselves of sickness, delay the aging process, improve their
                        physical and mental health, enhance their wisdom, make new friends, elevate their morality, and
                        thereby advance peace and happiness to all of mankind.
                    </p>

                    <div class="signature">World Wiser Sport Committee</div>
                </div>
            )}
            {lang === "zhHant" && (
                <div className="img-text-container">
                    <h1>{t("intro.title")}</h1>
                    <p>
                        Wiser球 (中文稱為”<strong>高智爾球</strong>
                        “)，原是古代宮廷君王、大臣與士大夫和西方元首總統謀略鬥智、鍛煉身體最高貴最頂級的球藝運動，但很可惜的是這種世界性皇王首相級頂級高貴的球藝運動早已年久失傳了，今由一位偉大無私的長德發掘並加以完善以利益大眾。長德道德崇高，美國國會參議院通過無記名投票在第112屆國會全票通過第614號決議上表彰這位長德對世界人類所做的貢獻。這位長德在將Wiser球藝和全套規則完整傳授給世界Wiser運動委員會時嚴肅地說：「你們必須把Wiser球發展普及到全世界，成為領導Wiser球的總會。你們記住，無論男女老幼，都有權利享受Wiser，因為
                        Wiser是大自然賦予人類的強身健體、人人有權平等享受的一種純體育球類運動，它唯一的作用就是給人類帶來利益，強身健體，塑造道德友善，和平助益世界。」現在，世界Wiser運動委員會已經成立，總部設在美國，美國是Wiser運動的發起國，世界Wiser
                        運動委員會第一屆人員就職典禮已於2013年3月2日在美國舉行。
                    </p>

                    <p>
                        Wiser球，是以智謀結合運動的一種動靜相爭的對抗性的球類運動，它不需要專門的球場，無論任何障礙的場地均能使用，非常安全，適合所有的人群，男女老幼均宜。
                    </p>

                    <p>
                        對於年歲高的人，有些身體欠佳，乃至手足麻木走路困難，有的心智也昏昧，生活都無法自理。只要還能打Wiser球，就可以增強免疫力，強健身體、耐力，活躍衰竭的腦細胞，避免老年癡呆，開闊心胸，增進喜樂，舒暢心情，能有效避免孤獨失眠、手腿麻木，防止風濕、寒氣入侵。
                    </p>

                    <p>
                        中﹑青年人同樣可以得到以上受益，增進智慧，開發大腦活力，同時更可以解決宅男﹑宅女們內向孤僻和不好社會活動﹑交朋結友的現象。藉由打Wiser球，引領他們走向戶外，於比賽中結交朋友，增強自信和發展良好健康的社交關係。
                    </p>

                    <p>
                        另外打Wiser球的少年和小孩，會變得獨立善思維，有禮貌，道德昇華，育長堅韌，強健身體，促成長高聰明，這是育養人才最好的運動。
                    </p>

                    <p>
                        總之，Wiser
                        運動不僅能鍛鍊體力，而且能開發智慧腦力，它不分老年、中年、青年、少年、幼兒、男女，也不需要專門場地，可以因地制宜，任何不同場地、異型障礙不僅是整個球場的一個部分，而且是當下開膚智力的好玄訣，對球員來說都在千變萬化中生發心機聰慧，並且任何時候在不同場地、障礙的變化中增加了對球員嶄新的挑戰性，即使是同一個場地，每一次打球，由於對方和自己隊友的擊打順序、路線、方向和力道不同，從而使得任何一場比賽都沒有重複，都需要運用不同的佈局調度和擊球技巧，因此，也就讓球員不斷提高自己的智慧和球技，讓打球增添更多的變化和趣味性，這是當今所有球類運動所不具備的特色。國際奧委會和國際拳擊協會祝賀世界Wiser運動委員會的函件中高度讚歎Wiser球，說：“Wiser是球類運動中最完美的體育運動。”
                    </p>

                    <p>
                        同時，打Wiser球，非常安全，只要喜愛體育，想強身健腦，塑造道德人品的人皆可加入，是真正做到了平等待遇的運動。它既是個人、也是團體的謀略和戰術，從智力思維訓練方面來說，有如下棋佈陣，從身體的鍛鍊體力增長方面來說，更是一個完美自然的高級球類運動。因此，Wiser球是全世界人類最完美、最高貴、對人類最有益處的球類運動，其總的效用體現在七個方面：強身健體，活躍精神，開發腦力聰慧，團結友愛，增強免疫力，遲緩體能衰竭，有助於提升老中青少年道德品質！實踐證明了，只要打過Wiser球的人，是人人讚嘆，愛不釋手，明顯給他們帶來了身心健康。
                    </p>

                    <p>
                        世界Wiser運動委員會是一個公眾性非營利組織，是合法的、全世界最高、最權威的Wiser領導機構，依特定的Wiser球的規則，訓練不同級別的裁判人員，主辦世界性的比賽，指導各個國家和地區的Wiser運動委員會的工作，領導Wiser運動在全世界各個國家和地區的發展，其目的就是讓全世界不同地域、不同膚色、不同年齡、不同文化的人，都能通過打Wiser球，祛除疾病，延緩衰老，增強身心健康，增長智慧，增進友誼，提升道德，進而促進整個世界的和平和人類的幸福。
                    </p>

                    <div class="signature">世界Wiser運動委員會</div>
                </div>
            )}
            {lang === "zhHans" && (
                <div className="img-text-container">
                    <h1>{t("intro.title")}</h1>
                    <p>
                        Wiser球 (中文称为”<strong>高智尔球</strong>
                        “)，原是古代宫廷君王、大臣与士大夫和西方元首总统谋略鬥智、锻炼身体最高贵最顶级的球艺运动，但很可惜的是这种世界性皇王首相级顶级高贵的球艺运动早已年久失传了，今由一位伟大无私的长德发掘并加以完善以利益大众。长德道德崇高，美国国会参议院通过无记名投票在第112届国会全票通过第614号决议上表彰这位长德对世界人类所做的贡献。这位长德在将Wiser球艺和全套规则完整传授给世界Wiser运动委员会时严肃地说：「你们必须把Wiser球发展普及到全世界，成为领导Wiser球的总会。你们记住，无论男女老幼，都有权利享受Wiser，因为
                        Wiser是大自然赋予人类的强身健体、人人有权平等享受的一种纯体育球类运动，它唯一的作用就是给人类带来利益，强身健体，塑造道德友善，和平助益世界。」现在，世界Wiser运动委员会已经成立，总部设在美国，美国是Wiser运动的发起国，世界Wiser
                        运动委员会第一届人员就职典礼已於2013年3月2日在美国举行。
                    </p>

                    <p>
                        Wiser球，是以智谋结合运动的一种动静相争的对抗性的球类运动，它不需要专门的球场，无论任何障碍的场地均能使用，非常安全，适合所有的人群，男女老幼均宜。
                    </p>

                    <p>
                        对於年岁高的人，有些身体欠佳，乃至手足麻木走路困难，有的心智也昏昧，生活都无法自理。只要还能打Wiser球，就可以增强免疫力，强健身体、耐力，活跃衰竭的脑细胞，避免老年癡呆，开阔心胸，增进喜乐，舒畅心情，能有效避免孤独失眠、手腿麻木，防止风湿、寒气入侵。
                    </p>

                    <p>
                        中﹑青年人同样可以得到以上受益，增进智慧，开发大脑活力，同时更可以解决宅男﹑宅女们内向孤僻和不好社会活动﹑交朋结友的现象。藉由打Wiser球，引领他们走向户外，於比赛中结交朋友，增强自信和发展良好健康的社交关係。
                    </p>

                    <p>
                        另外打Wiser球的少年和小孩，会变得独立善思维，有礼貌，道德昇华，育长坚韧，强健身体，促成长高聪明，这是育养人才最好的运动。
                    </p>

                    <p>
                        总之，Wiser
                        运动不仅能锻鍊体力，而且能开发智慧脑力，它不分老年、中年、青年、少年、幼儿、男女，也不需要专门场地，可以因地制宜，任何不同场地、异型障碍不仅是整个球场的一个部分，而且是当下开肤智力的好玄诀，对球员来说都在千变万化中生发心机聪慧，并且任何时候在不同场地、障碍的变化中增加了对球员崭新的挑战性，即使是同一个场地，每一次打球，由於对方和自己队友的击打顺序、路线、方向和力道不同，从而使得任何一场比赛都没有重複，都需要运用不同的佈局调度和击球技巧，因此，也就让球员不断提高自己的智慧和球技，让打球增添更多的变化和趣味性，这是当今所有球类运动所不具备的特色。国际奥委会和国际拳击协会祝贺世界Wiser运动委员会的函件中高度讚歎Wiser球，说：“Wiser是球类运动中最完美的体育运动。”
                    </p>

                    <p>
                        同时，打Wiser球，非常安全，只要喜爱体育，想强身健脑，塑造道德人品的人皆可加入，是真正做到了平等待遇的运动。它既是个人、也是团体的谋略和战术，从智力思维训练方面来说，有如下棋佈阵，从身体的锻鍊体力增长方面来说，更是一个完美自然的高级球类运动。因此，Wiser球是全世界人类最完美、最高贵、对人类最有益处的球类运动，其总的效用体现在七个方面：强身健体，活跃精神，开发脑力聪慧，团结友爱，增强免疫力，迟缓体能衰竭，有助於提升老中青少年道德品质！实践證明了，只要打过Wiser球的人，是人人讚叹，爱不释手，明显给他们带来了身心健康。
                    </p>

                    <p>
                        世界Wiser运动委员会是一个公众性非营利组织，是合法的、全世界最高、最权威的Wiser领导机构，依特定的Wiser球的规则，训练不同级别的裁判人员，主办世界性的比赛，指导各个国家和地区的Wiser运动委员会的工作，领导Wiser运动在全世界各个国家和地区的发展，其目的就是让全世界不同地域、不同肤色、不同年龄、不同文化的人，都能通过打Wiser球，祛除疾病，延缓衰老，增强身心健康，增长智慧，增进友谊，提升道德，进而促进整个世界的和平和人类的幸福。
                    </p>

                    <div class="signature">世界Wiser运动委员会</div>
                </div>
            )}
        </div>
    );
}
