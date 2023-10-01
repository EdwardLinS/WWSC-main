/** @format */

import "./Dress.css";
import { useTranslation } from "react-i18next";

export default function Dress() {
    const { t, i18n } = useTranslation("global");

    const lang = i18n.language;
    // console.log(i18n.language);

    return (
        <div className="wwsc-container   ">
            <div className="dress-image-container">
                <img src="/assets/Wiser Sport/Uniform.jpg" alt="WWSC dress code" />
                <div className="image-caption">{t("dress_code.img_caption")}</div>
            </div>
            {lang === "en" && (
                <div className="img-text-container">
                    <h1>{t("dress_code.title")}</h1>
                    <p>
                        To be distinguished from other ball sports, Wiser sport has its specially designed sportswear.
                        People from various walks of life in many different countries have praised this Wiser sportswear
                        and have commented that it is the most stylish, attractive, and elegant sportswear in the world.
                        The Wiser sportswear can be worn by the players not only in official international Wiser
                        competitions; our Committee also approves that players can wear their Wiser sportswear in their
                        daily lives.
                    </p>
                    <p>
                        However, in order to make it more convenient for people who are learning to play Wiser and to
                        enable them to play more Wiser games in their daily lives for physical exercise, improving
                        wisdom, and enjoying the benefits of playing Wiser, players can feel free to wear any athletic
                        or casual clothing during their practices and regular games. Some examples are provided as
                        follows.
                    </p>
                </div>
            )}

            {lang === "zhHant" && (
                <div className="img-text-container">
                    <h1>{t("dress_code.title")}</h1>

                    <p>
                        為區別於其它球類運動，Wiser球有專門設計的運動服裝，Wiser運動服裝被世界各國、各界人士所贊嘆，認為是世界各類運動服裝中最時尚、最帥氣英武、最優秀高貴紳士的服裝。Wiser運動服裝除了在正式的國際比賽中使用外，本會也認同球員們可以在日常生活中穿著。
                    </p>
                    <p>
                        但是，為了更方便學習打Wiser球的人士在日常生活中盡量地通過打Wiser球鍛煉身體，提高智慧，享受Wiser帶來的利益，在平時的練習或者一般的比賽中，可以自由穿著任何運動裝或休閑裝打球。
                    </p>
                </div>
            )}
            {lang === "zhHans" && (
                <div className="img-text-container">
                    <h1>{t("dress_code.title")}</h1>
                    <p>以上为球员们穿著Wiser球员运动装参加正式的Wiser运动竞赛</p>
                    <p>
                        为区别于其它球类运动，Wiser球有专门设计的运动服装，Wiser运动服装被世界各国、各界人士所赞叹，认为是世界各类运动服装中最时尚、最帅气英武、最优秀高贵绅士的服装。Wiser运动服装除了在正式的国际比赛中使用外，本会也认同球员们可以在日常生活中穿著。
                    </p>
                    <p>
                        但是，为了更方便学习打Wiser球的人士在日常生活中尽量地通过打Wiser球锻炼身体，提高智慧，享受Wiser带来的利益，在平时的练习或者一般的比赛中，可以自由穿著任何运动装或休闲装打球。
                    </p>
                </div>
            )}
        </div>
    );
}
