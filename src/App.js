import "./App.css";
import { useEffect, useState } from "react";
import { currencyData } from "./misc/currencyData.js";
import CurrencyExchangePanel from "./components/CurrencyExchangePanel.js";

function App() {
	const [ownedCurrency, setOwnedCurrency] = useState([]);

	useEffect(() => {
		fetchStartCurrencyQuantities();
		return () => {};
	}, []);
	const fetchStartCurrencyQuantities = async () => {
		const response = await fetch("http://localhost:3000/currencies");
		const json = await response.json();

		for (let i = 0; i < json.length; i++) {
			const element = json[i];

			console.log(element);
		}

		setOwnedCurrency(json);
	};

	return (
		<div>
			<CurrencyExchangePanel
				currencyData={currencyData}
				ownedCurrency={ownedCurrency}
			/>
		</div>
	);
}

export default App;
