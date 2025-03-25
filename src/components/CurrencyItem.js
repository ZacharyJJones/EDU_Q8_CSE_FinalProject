/* eslint-disable jsx-a11y/alt-text */
import "./CurrencyItem.css";
export function CurrencyItem({ thisCurrencyData }) {
	return (
		<div key={thisCurrencyData.id} className="currency-item">
			{thisCurrencyData.name}
			<div>Owned: {thisCurrencyData.quantity}</div>
			<img src={thisCurrencyData.icon} />
			<div>Chaos Equiv: {thisCurrencyData.chaosEquiv}</div>
		</div>
	);
}
