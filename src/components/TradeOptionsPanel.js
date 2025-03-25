/* eslint-disable jsx-a11y/alt-text */
export function TradeOptionsPanel({
	tradeOptions,
	currencyData,
	onClickConfirmTrade,
}) {
	return (
		<div className="panel">
			<h2>ACTIVE TRADES</h2>
			<div className="trades-grid">
				{tradeOptions.map((x) => {
					const currencyTheyWant = currencyData.filter(
						(c) => c.id === x.theyWant_id
					)[0];
					const currencyYouGet = currencyData.filter(
						(c) => c.id === x.youReceive_id
					)[0];
					return (
						<div key={x.id}>
							{x.youReceive_quant}x<img src={currencyYouGet.icon} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
