import { Box } from "@mui/material";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
} from "react-simple-maps";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
    {
        markerOffset: -15,
        name: "Siam Ahnaf",
        coordinates: [-58.3816, -34.6037]
    }
];

const Map = () => {
    return (
        <Box>
            <ComposableMap
                projection="geoAzimuthalEqualArea"
                projectionConfig={{
                    rotate: [58, 20, 0],
                    scale: 400
                }}
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies
                            .filter(d => d.properties.REGION_UN === "Americas")
                            .map(geo => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="#EAEAEC"
                                    stroke="#D6D6DA"
                                />
                            ))
                    }
                </Geographies>
                {markers.map(({ name, coordinates, markerOffset }) => (
                    <Marker key={name} coordinates={coordinates}>
                        <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
                        <text
                            textAnchor="middle"
                            y={markerOffset}
                            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                        >
                            {name}
                        </text>
                    </Marker>
                ))}
            </ComposableMap>
        </Box>
    );
};
export default Map;