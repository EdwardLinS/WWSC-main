import './NoticePage.css'

export default function NoticePage({ content }) {

    return (
        <div>
            <div className="wwsc-container">
                <div className="img-text-container">
                    <div className="notice-page" dangerouslySetInnerHTML={{ __html: content }}  />
                </div>
            </div>
        </div>
    )
}
