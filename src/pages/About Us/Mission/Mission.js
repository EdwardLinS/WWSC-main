/** @format */

import "./Mission.css";
import { useTranslation } from "react-i18next";

export default function Mission() {
    const { t, i18n } = useTranslation("global");

    const lang = i18n.language;
    console.log(i18n.language);

    return (
        <div className="wwsc-container">
            <div className="text-container">
                <img src="/WWSC logo_ltr_head.png" alt="wwsc logo" />
                {lang === "en" && (
                    <div>
                        <h1>{t("mission.title")}</h1>

                        <p>
                            The World Wiser Sport Committee (WWSC) is a legally established public-benefit nonprofit
                            organization. It is the highest, most authoritative Wiser sport organization in the world.
                            The WWSC trains different levels of referees based on the rules of the Wiser sport. It holds
                            international tournaments, guides the work of Wiser Sport Committees in countries and
                            regions around the globe, and leads the expansion of the Wiser sport throughout the world.
                            Its mission is to enable people living in various regions and of different races, ages, and
                            cultures to play the Wiser sport and, in so doing, to rid themselves of sickness, delay the
                            aging process, improve their physical and mental health, enhance their wisdom, make new
                            friends, elevate their morality, and thereby advance peace and happiness to all of mankind.
                        </p>

                        <div className="signature">World Wiser Sport Committee</div>
                    </div>
                )}
                {lang === "zhHant" && (
                    <div>
                        <h1>{t("mission.title")}</h1>

                        <p>
                            世界Wiser運動委員會是一個公眾性非營利組織，是合法的、全世界最高、最權威的Wiser領導機構，依特定的Wiser球的規則，訓練不同級別的裁判人員，主辦世界性的比賽，指導各個國家和地區的Wiser運動委員會的工作，領導Wiser運動在全世界各個國家和地區的發展，其目的就是讓全世界不同地域、不同膚色、不同年齡、不同文化的人，都能通過打Wiser球，祛除疾病，延緩衰老，增強身心健康，增長智慧，增進友誼，提升道德，進而促進整個世界的和平和人類的幸福。
                        </p>

                        <div className="signature">世界Wiser運動委員會</div>
                    </div>
                )}
                {lang === "zhHans" && (
                    <div>
                        <h1>{t("mission.title")}</h1>

                        <p>
                            世界Wiser运动委员会是一个公众性非营利组织，是合法的、全世界最高、最权威的Wiser领导机构，依特定的Wiser球的规则，训练不同级别的裁判人员，主办世界性的比赛，指导各个国家和地区的Wiser运动委员会的工作，领导Wiser运动在全世界各个国家和地区的发展，其目的就是让全世界不同地域、不同肤色、不同年龄、不同文化的人，都能通过打Wiser球，祛除疾病，延缓衰老，增强身心健康，增长智慧，增进友谊，提升道德，进而促进整个世界的和平和人类的幸福。
                        </p>

                        <div className="signature">世界Wiser运动委员会</div>
                    </div>
                )}
            </div>
        </div>
    );
}
