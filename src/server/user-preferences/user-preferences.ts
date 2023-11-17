import { Request, Response, Router } from "express";
import { userPreferences } from "./user-preferences.data";
import { attachCurrentDateToEntry, sortBy } from "./user-preferences.helpers";
import {
	SortByEnum,
	UserPreferences,
} from "../../types/user-preferences.types";
import { UserPreferencesSortingValues } from "../../components/user-preferences/user-preferences-sorting/user-preferences-sorting.types";

const router = Router();
const userPreferencesWithDate: UserPreferences[] = userPreferences.map(
	attachCurrentDateToEntry
);

router.get("/", (req: Request<{ criteria: string }>, res: Response) => {
	const { sorting = "Name", direction = SortByEnum.ASC } =
		req.query as UserPreferencesSortingValues;

	const sortedRecords = sortBy(
		userPreferencesWithDate,
		sorting as keyof UserPreferences,
		direction
	);

	res.json(sortedRecords);
});

export default router;
