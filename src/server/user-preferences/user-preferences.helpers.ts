/**
 * Attach the 'Date' key with the current date as value for the given object
 * @param {Object} entry given object to attach the date
 * @returns {Object}
 */

import { SortByEnum } from ".";

export function attachCurrentDateToEntry<T = Record<string, unknown>>(
	entry: T
): T {
	return {
		...entry,
		Date: new Date().toISOString(),
	};
}

/**
 * Sort a collection based on a given criteria.
 * @param {Array} collection given collection to sort
 * @param {String} criteria sorting criteria based on object properties
 * @param {'ASC' | 'DESC'} direction sorting direction
 * @returns {Array}
 */
export function sortBy<T = Record<string, unknown>>(
	collection: T[],
	criteria: keyof T,
	direction: "ASC" | "DESC" = SortByEnum.DESC
): T[] {
	// Using array sort seems ideal for this implementation, but let's take in mind if the input increases to a huge amount of data, the performance of this operation can be affected (based on the internal engine implementation for this method) and another sorting approach probably is a better way to make the sorting

	return [...collection].sort((a, b) => {
		const firstEl = direction === SortByEnum.DESC ? b : a;
		const secondEl = direction === SortByEnum.DESC ? a : b;

		// We should take in mind the edge cases when working with array.sort to get the most accurate result
		if (typeof firstEl[criteria] === "number") {
			return (firstEl[criteria] as number) - (secondEl[criteria] as number);
		}

		return (firstEl[criteria] as string)
			?.toLocaleLowerCase()
			.localeCompare((secondEl[criteria] as string).toLowerCase());
	});
}
