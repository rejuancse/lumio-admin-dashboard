function PromoBanner() {
    return (
        <div className="promo-banner-card">
            {/* Inline SVG geometric decoration (Lime green 6-pointed star/asterisk with rounded caps) */}
            <svg className="promo-banner-bg-shape" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(50,50)">
                    <rect x="-6" y="-45" width="12" height="90" rx="6" ry="6" fill="#B4F105" />
                    <rect x="-6" y="-45" width="12" height="90" rx="6" ry="6" fill="#B4F105" transform="rotate(60)" />
                    <rect x="-6" y="-45" width="12" height="90" rx="6" ry="6" fill="#B4F105" transform="rotate(120)" />
                </g>
            </svg>

            <h3 className="promo-title">Level up your sales managing to the next level.</h3>
            <p className="promo-desc">An easy way to manage sales with care and precision.</p>
            <button className="btn-promo" id="btn-promo-action">Check the updates now</button>
        </div>
    )
}

export default PromoBanner;
