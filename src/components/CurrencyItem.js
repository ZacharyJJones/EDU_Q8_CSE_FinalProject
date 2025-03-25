/* eslint-disable jsx-a11y/alt-text */
export function CurrencyItem({ thisCurrencyData, quantity }) {
	return (
		<div key={thisCurrencyData.id}>
			name: {thisCurrencyData.name}
			<ul>
				<li>Chaos Equiv: {thisCurrencyData.chaosEquiv}</li>
				<li>
					<img src={thisCurrencyData.icon} />
				</li>
				<div>Owned: {quantity}</div>
			</ul>
		</div>
	);
}
