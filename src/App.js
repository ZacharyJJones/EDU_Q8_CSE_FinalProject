/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import { useEffect, useState } from "react";
import { makeJsonResponseIntoUsableMap } from "./misc/util.js";

function App() {
	const [currencyData, setCurrencyData] = useState(null);

	useEffect(() => {
		getApiData();
		return () => {};
	}, []);
	const getApiData = async () => {
		const response = await fetch(
			"https://poe.ninja/api/data/currencyoverview?league=Standard&type=Currency"
		);

		const json = await response.json();
		const dataMap = makeJsonResponseIntoUsableMap(json);
		setCurrencyData(dataMap);
	};

	return (
		<div>
			HELLO WORLD!!!!
			{currencyData &&
				currencyData.forEach((val, key, map) => {
					<div>
						id: {key}, name: {val.name}
						<ul>
							<li>Chaos Equiv: {val.chaosEquiv}</li>
							<li>
								<img src={val.icon} />
							</li>
						</ul>
					</div>;
				})}
		</div>
	);
}

export default App;
