function StatCard({ label, value, trend, trendText, chartId }) {
    const trendClass = trend === "up" ? "trend-up" : "trend-down";
    const trendIcon = trend === "up" ? "bi bi-arrow-up-right" : "bi bi-arrow-down-left";

    return (
        <div className="card card-stat d-flex flex-column justify-content-between">
            <div>
                <div className="card-header">
                    <span className="stat-label">{label}</span>
                    <div className="dropdown">
                        <button className="card-more-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                            aria-label="More Options" id={`btn-more-${chartId}`}>
                            <i className="bi bi-three-dots"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-custom">
                            <li><a className="dropdown-item" href="#"><i className="bi bi-arrow-repeat"></i> Refresh</a></li>
                            <li><a className="dropdown-item" href="#"><i className="bi bi-file-earmark-arrow-down"></i> Export
                                Report</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item text-danger" href="#"><i className="bi bi-eye-slash"></i> Hide Details</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="stat-value">{value}</div>
                <div className={`trend-badge ${trendClass}`}>
                    <i className={trendIcon}></i>
                    <span>{trendText}</span>
                </div>
            </div>
            <div className="lumioline-container lumioline-card-footer">
                <div id={chartId}></div>
            </div>
        </div>
    )
}

export default StatCard;
