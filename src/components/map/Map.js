// import { GoogleMap } from "@react-google-maps/api";
// import React, { useRef } from "react";

// const containerStyle = {
// 	width: "400px",
// 	height: "400px",
// };

// const center = {
// 	lat: -3.745,
// 	lng: -38.523,
// };

// export const Map = () => {
// 	const mapRef = useRef(undefined);

// 	const onLoad = React.useCallback(function callback(map) {
// 		mapRef.current = map;
// 	}, []);

// 	const onUnmount = React.useCallback(function callback(map) {
// 		mapRef.current = undefined;
// 	}, []);

// 	return (
// 		<div className="conteiner">
// 			<GoogleMap
// 				mapContainerStyle={containerStyle}
// 				center={center}
// 				zoom={10}
// 				onLoad={onLoad}
// 				onUnmount={onUnmount}
// 			>
// 				{/* Child components, such as markers, info windows, etc. */}
// 				<></>
// 			</GoogleMap>
// 		</div>
// 	);
// };
