// import Button from "./Button";

function HeaderBanner({bannerTitle, bannerDesc, bannerButton}) {
    return (
        <div className="page-header">
            <div>
                <h1 className="page-title">{bannerTitle}</h1>
                <p className="page-subtitle">{bannerDesc}</p>
            </div>



                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item">
                                <a href="/" className="text-decoration-none text-muted-green">Home</a>
                            </li>
                            <li className="breadcrumb-item text-muted-green">Components</li>
                            <li className="breadcrumb-item active text-main" aria-current="page">{bannerTitle}</li>
                        </ol>
                    </nav>

        </div>
    )
}

export default HeaderBanner;
