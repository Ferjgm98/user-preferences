import { Request, Response, Router } from "express";
import { userPreferences } from "./user-preferences.data";
import { attachCurrentDateToEntry, sortBy } from "./user-preferences.helpers";
import {
	SortByEnum,
	UserPreferences,
} from "../../types/user-preferences.types";

const router = Router();
const userPreferencesWithDate: UserPreferences[] = userPreferences.map(
	attachCurrentDateToEntry
);

router.get("/", (req: Request<{ criteria: string }>, res: Response) => {
	const { criteria = "Name", direction = SortByEnum.ASC } = req.body;

	const sortedRecords = sortBy(userPreferencesWithDate, criteria, direction);

	res.json(sortedRecords);
});

export default router;
