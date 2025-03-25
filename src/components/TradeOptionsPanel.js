/* eslint-disable jsx-a11y/alt-text */
export function TradeOptionsPanel({
	tradeOptions,
	nowTrading,
	onClickConfirmTrade,
}) {
	return (
		<div className="panel">
			<h2>ACTIVE TRADES</h2>
			<div className="trades-grid">
				{tradeOptions.map((x) => {
					return (
						<div key={x.id}>
							{x.youReceive_quant}x<img src={x.youReceive.icon} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
