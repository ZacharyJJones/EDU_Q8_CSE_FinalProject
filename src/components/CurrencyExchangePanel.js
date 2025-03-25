/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import "./CurrencyExchangePanel.css";
import { CurrencyItem } from "./CurrencyItem.js";

export default function CurrencyExchangePanel({ currencyData, ownedCurrency }) {
	// console.log(ownedCurrency);
	// console.log(typeof ownedCurrency);

	return (
		<div className="flex-container currency-panel">
			{currencyData.map((x) => (
				<CurrencyItem key={x.id} thisCurrencyData={x} />
			))}
		</div>
	);
}
