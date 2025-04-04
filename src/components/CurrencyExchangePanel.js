/* eslint-disable jsx-a11y/alt-text */
import "./CurrencyExchangePanel.css";

export function CurrencyExchangePanel({
	currencyData,
	nowTrading,
	setNowTrading,
}) {
	return (
		<div className="panel">
			<h2>YOUR CURRENCIES</h2>
			<div className="flex-container">
				{currencyData.map((x) => (
					<div key={x.id} className="currency-item">
						<div>{x.name}</div>
						<img src={x.icon} />
						<div>Owned: {x.quantity}</div>
						<button
							disabled={x.id === nowTrading?.id || x.quantity < 1}
							onClick={() => setNowTrading(x)}
						>
							FIND TRADE
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
