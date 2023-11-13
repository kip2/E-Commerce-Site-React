import "./NotFound.css"

const NotFoundPage = () => {
    return (
        <div className="not-found-outer">
            <div className="not-found-message">
                <h1 className="not-found-title">404 Not Found</h1>
                <p>お探しのページは見つかりませんでした。URLを確認してください。</p>
            </div>
        </div>
    )
}

export default NotFoundPage