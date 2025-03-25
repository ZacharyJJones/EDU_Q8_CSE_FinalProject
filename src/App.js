import { useEffect, useState } from "react";
import { CurrencyExchangePanel } from "./components/CurrencyExchangePanel.js";
import { TradeOptionsPanel } from "./components/TradeOptionsPanel.js";

function App() {
	const [currencies, setCurrencies] = useState([]);
	const [tradeOptions, setTradeOptions] = useState([]);
	const [nowTradingId, setNowTrading] = useState(null);

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

	const onClickSetTrade = (currencyId) => {
		setNowTrading(currencyId);

		const options = [];

		// generate options
		for (let i = 0; i < 15; i++) {
			options.push(generateTradeOption(i, currencyId));
		}

		setTradeOptions(options);
	};
	const onClickConfirmTrade = (tradeId) => {
		// remove trade from list. (generate one to replace it?)
		const newOptions = tradeOptions.slice().filter((x) => x.id !== tradeId);
		newOptions.push(generateTradeOption(tradeId));

		setTradeOptions((prevState) => newOptions);
	};
	const generateTradeOption = (tradeId) => {
		return {
			id: tradeId,
			theyWant_id: nowTradingId,
			theyWant_quant: 4,
			youReceive_id: 2,
			youReceive_quant: 5,
		};
	};

	return (
		<div>
			<CurrencyExchangePanel
				currencyData={currencies}
				nowTradingId={nowTradingId}
				setNowTrading={onClickSetTrade}
			/>
			<TradeOptionsPanel
				tradeOptions={tradeOptions}
				currencyData={currencies}
				onClickConfirmTrade={onClickConfirmTrade}
			/>
		</div>
	);
}

export default App;
