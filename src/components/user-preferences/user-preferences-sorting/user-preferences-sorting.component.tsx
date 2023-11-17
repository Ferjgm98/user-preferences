import {
	DIRECTION_OPTIONS,
	SORT_OPTIONS,
} from "./user-preferences-sorting.const";
import style from "./user-preferences-sorting.style.module.css";
import React from "react";
import {
	UserPreferencesSortingProps,
	UserPreferencesSortingValues,
} from "./user-preferences-sorting.types";

const UserPreferencesSorting: React.FC<UserPreferencesSortingProps> = ({
	values,
	setValues,
}) => {
	const handleOnChange: React.ChangeEventHandler<HTMLSelectElement> = (
		event
	) => {
		const { target } = event;

		setValues(target.name as keyof UserPreferencesSortingValues, target.value);
	};

	return (
		<div className={style["user-preferences-sorting"]}>
			<label
				className={style["user-preferences-sorting-label"]}
				htmlFor="sortBy"
			>
				<p>Sort by:</p>
				<select
					name="sorting"
					id="sorting"
					value={values.sorting as string}
					onChange={handleOnChange}
				>
					{SORT_OPTIONS.map((value) => (
						<option key={value} value={value}>
							{value}
						</option>
					))}
				</select>
			</label>
			<label
				className={style["user-preferences-sorting-label"]}
				htmlFor="direction"
			>
				<p>Direction:</p>
				<select
					name="direction"
					id="direction"
					value={values.direction}
					onChange={handleOnChange}
				>
					{DIRECTION_OPTIONS.map((value) => (
						<option key={value} value={value}>
							{value}
						</option>
					))}
				</select>
			</label>
		</div>
	);
};

export default UserPreferencesSorting;
