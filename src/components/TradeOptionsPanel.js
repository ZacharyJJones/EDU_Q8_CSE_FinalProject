/* eslint-disable jsx-a11y/alt-text */
import "./TradeOptionsPanel.css";
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
						<div className="trade-option" key={x.id}>
							Pay {x.theyWantQuant}x<img src={nowTrading.icon} /> ... Get{" "}
							{x.youReceiveQuant}x<img src={x.youReceive.icon} />
							<button
								disabled={nowTrading.quantity < x.theyWantQuant}
								onClick={() => onClickConfirmTrade(x.id)}
							>
								ACCEPT
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}
