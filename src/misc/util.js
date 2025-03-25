export function makeJsonResponseIntoUsableMap(jsonResponse) {
	const ret = new Map();

	// handle currencyDetails first to get bulk of data
	const currencyDetails = jsonResponse.currencyDetails.filter((x) =>
		currencyIDsToDisplayOrdered.includes(x.id)
	);
	for (let i = 0; i < currencyDetails.length; i++) {
		const element = currencyDetails[i];
		ret.set(element.id, {
			id: element.id,
			icon: element.icon,
			name: element.name,
		});
	}

	// handle lines to get chaos val equiv
	const lines = jsonResponse.lines.filter((x) =>
		currencyIDsToDisplayOrdered.includes(x.id)
	);
	for (let i = 0; i < lines.length; i++) {
		const element = lines[i];
		ret[element.id]["chaosEquiv"] = element.chaosEquivalent;
	}

	return ret;
}

export const currencyIDsToDisplayOrdered = [
	4, // Alchemy
	5, // Fusing
	6, // Alteration

	1, // Chaos
	2, // Exalted
	3, // Divine

	81, // Mirror Shard
];
