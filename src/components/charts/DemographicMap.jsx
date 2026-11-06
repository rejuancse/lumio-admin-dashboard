import { useRef } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup,
} from "react-simple-maps";

import countries from "world-atlas/countries-110m.json";

const demographicData = [
    {
        id: 1,
        name: "USA",
        code: "us",
        customers: 2379,
        percentage: 40.99,
        coordinates: [-98, 39],
    },
    {
        id: 2,
        name: "France",
        code: "fr",
        customers: 589,
        percentage: 59.01,
        coordinates: [2.2, 46.2],
    },
    {
        id: 3,
        name: "Yemen",
        code: "ye",
        customers: 412,
        percentage: 32.40,
        coordinates: [48.5, 15.5],
    },
];

const DemographicMap = ({ data = demographicData }) => {
    const tooltipRef = useRef(null);

    const handleMouseMove = (event, geo) => {
        const tooltip = tooltipRef.current;
        if (!tooltip) return;

        tooltip.textContent = geo.properties?.name ?? "";
        tooltip.style.left = `${event.clientX}px`;
        tooltip.style.top = `${event.clientY}px`;
        tooltip.style.display = "block";
    };

    const handleMouseLeave = () => {
        const tooltip = tooltipRef.current;
        if (tooltip) {
            tooltip.style.display = "none";
        }
    };

    return (
        <div className="demographic-map">
            <div
                ref={tooltipRef}
                style={{
                    display: "none",
                    position: "fixed",
                    transform: "translate(-50%, calc(-100% - 12px))",
                    backgroundColor: "#1F2937",
                    color: "#FFFFFF",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    fontSize: "13px",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                    zIndex: 1050,
                }}
            />
            <ComposableMap
                projection="geoEqualEarth"
                projectionConfig={{
                    scale: 145,
                }}
                width={800}
                height={340}
                style={{
                    width: "100%",
                    height: "auto",
                }}
            >
                <ZoomableGroup minZoom={1} maxZoom={8}>
                    <Geographies geography={countries}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    className="demographic-country"
                                    fill="#D1D5DB"
                                    stroke="#FFFFFF"
                                    strokeWidth={0.5}
                                    onMouseMove={(event) => handleMouseMove(event, geo)}
                                    onMouseLeave={handleMouseLeave}
                                />
                            ))
                        }
                    </Geographies>

                    {data.map((country) => (
                        <Marker
                            key={country.id}
                            coordinates={country.coordinates}
                        >
                            <circle
                                r={7}
                                fill="#4969FF"
                                stroke="#FFFFFF"
                                strokeWidth={2}
                                style={{ pointerEvents: "none" }}
                            />
                        </Marker>
                    ))}
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
};

export default DemographicMap;
