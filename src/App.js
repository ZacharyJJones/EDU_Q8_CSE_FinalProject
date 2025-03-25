import { useEffect, useState } from "react";
import { CurrencyExchangePanel } from "./components/CurrencyExchangePanel.js";
import { TradeOptionsPanel } from "./components/TradeOptionsPanel.js";

function App() {
	const [currencies, setCurrencies] = useState([]);
	const [tradeOptions, setTradeOptions] = useState([]);
	const [nowTrading, setNowTrading] = useState(null);

	// Getting initial currency data
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

	// Had issues assigning trade options inside of the "setNowTrading"
	// ... function, so I extracted the functionality and implemented with useEffect
	useEffect(() => {
		if (nowTrading === null) {
			setTradeOptions([]);
		} else {
			const options = [];
			for (let i = 0; i < 9; i++) {
				options.push(generateTradeOption(i));
			}

			setTradeOptions(options);
		}
		return () => {};
	}, [nowTrading]);

	const onClickSetTrade = (currencyId) => {
		setNowTrading(currencyId);
	};
	const onClickConfirmTrade = (tradeId) => {
		const chosen = tradeOptions.find((x) => x.id === tradeId);

		const newCurrencies = currencies.slice();
		const new_wasTraded = newCurrencies.find((x) => x.id === nowTrading.id);
		const new_wasReceived = newCurrencies.find(
			(x) => x.id === chosen.youReceive.id
		);

		// Apply effects of the trade
		new_wasTraded.quantity -= chosen.theyWantQuant;
		new_wasReceived.quantity += chosen.youReceiveQuant;
		setCurrencies((prevState) => newCurrencies);

		// replace selected trade with a new one
		const newOptions = tradeOptions.slice().filter((x) => x.id !== tradeId);
		newOptions.push(generateTradeOption(tradeId));

		setTradeOptions((prevState) => newOptions);
	};
	function generateTradeOption(tradeId) {
		const nonTradingCurrencies = currencies.filter(
			(x) => x.id !== nowTrading?.id
		);
		const randomNonTradingCurrency =
			nonTradingCurrencies[
				Math.floor(Math.random() * nonTradingCurrencies.length)
			];

		// wish I had the time to make trades use the relative values of currencies
		return {
			id: tradeId,
			theyWantQuant: Math.floor(1 + Math.random() * 3),
			youReceive: randomNonTradingCurrency,
			youReceiveQuant: Math.floor(3 + Math.random() * 3),
		};
	}

	return (
		<div>
			<CurrencyExchangePanel
				currencyData={currencies}
				nowTrading={nowTrading}
				setNowTrading={onClickSetTrade}
			/>
			<TradeOptionsPanel
				tradeOptions={tradeOptions}
				nowTrading={nowTrading}
				onClickConfirmTrade={onClickConfirmTrade}
			/>
		</div>
	);
}

export default App;
