import './NoticePage.css'

export default function NoticePage({ content }) {

    const styleNotice = {
        fontSize: "1.5rem"
    };

    return (
        <div>
            <div className="wwsc-container">
                <div className="img-text-container">
                    <div className="notice-page" dangerouslySetInnerHTML={{ __html: content }} style={styleNotice} />
                </div>
            </div>
        </div>
    )
}
