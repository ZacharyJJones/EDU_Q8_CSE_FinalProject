/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
export default function CurrencyExchangePanel({ currencyData }) {
	return (
		<div>
			<span>I am really trying hard here</span>

			<>
				{currencyData &&
					currencyData.map((x) => {
						return (
							<div key={x.id}>
								id: {x.id}, name: {x.name}
								<ul>
									<li>Chaos Equiv: {x.chaosEquiv}</li>
									<li>
										<img src={x.icon} />
									</li>
								</ul>
							</div>
						);
					})}
			</>
		</div>
	);
}
