import "./App.css";
import { useEffect, useState } from "react";
import CurrencyExchangePanel from "./components/CurrencyExchangePanel.js";

function App() {
	const [currencies, setCurrencies] = useState([]);

	useEffect(() => {
		getCurrencyData();
		return () => {};
	}, []);
	const getCurrencyData = async () => {
		const response = await fetch("http://localhost:3000/currencies");
		const json = await response.json();

		json.sort((a, b) => a.chaosEquiv > b.chaosEquiv);

		setCurrencies(json);
	};

	return (
		<div>
			<CurrencyExchangePanel currencyData={currencies} />
		</div>
	);
}

export default App;
