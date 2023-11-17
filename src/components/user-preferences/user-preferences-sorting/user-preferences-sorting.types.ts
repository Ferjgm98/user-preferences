import { SortByEnum } from "../../../types/user-preferences.types";
import { SORT_OPTIONS } from "./user-preferences-sorting.const";

export type UserPreferencesSortingValues = {
	sorting: (typeof SORT_OPTIONS)[number];
	direction: SortByEnum;
};

export type UserPreferencesSortingProps = {
	values: UserPreferencesSortingValues;
	setValues: (name: keyof UserPreferencesSortingValues, value: string) => void;
};
