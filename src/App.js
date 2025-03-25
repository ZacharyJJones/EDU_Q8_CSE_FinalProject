import "./App.css";
import { useEffect, useState } from "react";
import { currencyData } from "./misc/currencyData.js";
import CurrencyExchangePanel from "./components/CurrencyExchangePanel.js";

function App() {
	const [currencyAmounts, setCurrencyAmounts] = useState([]);

	useEffect(() => {
		fetchStartCurrencyQuantities();
		return () => {};
	}, []);
	const fetchStartCurrencyQuantities = async () => {
		const response = await fetch("http://localhost:3000/currencies");
		const json = await response.json();
		console.log(json);
	};

	return (
		<div>
			HELLO WORLD!!!!
			<CurrencyExchangePanel currencyData={currencyData} />
		</div>
	);
}

export default App;
