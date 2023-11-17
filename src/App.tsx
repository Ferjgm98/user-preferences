import { useEffect, useState } from "react";
import "./App.css";
import { SortByEnum, UserPreferences } from "./types/user-preferences.types";
import UserPreferencesItem from "./components/user-preferences/user-preferences-item/user-preferences-item.component";
import UserPreferencesSorting from "./components/user-preferences/user-preferences-sorting/user-preferences-sorting.component";
import {
	UserPreferencesSortingValues,
	UserPreferencesSortingProps,
} from "./components/user-preferences/user-preferences-sorting/user-preferences-sorting.types";

function App() {
	const [userPreferences, setUserPreferences] = useState<UserPreferences[]>([]);
	const [sortingPreferences, setSortingPreferences] =
		useState<UserPreferencesSortingValues>({
			sorting: "Name",
			direction: SortByEnum.ASC,
		});

	const handleSetSortingPreferences: UserPreferencesSortingProps["setValues"] =
		(name, value) => {
			setSortingPreferences((prev) => ({ ...prev, [name]: value }));
		};

	useEffect(() => {
		const urlParams = new URLSearchParams(sortingPreferences);

		fetch("http://localhost:3002/api/user-preferences?" + urlParams)
			.then((response) => response.json())
			.then((data) => setUserPreferences(data));
	}, [sortingPreferences]);

	return (
		<main className="container">
			<section className="content">
				<h1 className="title">User Preferences</h1>

				<UserPreferencesSorting
					values={sortingPreferences}
					setValues={handleSetSortingPreferences}
				/>
				<div className="user-preferences-container">
					<div className="user-preferences">
						{userPreferences.map((item, idx) => (
							<UserPreferencesItem key={`${idx}-${item.Name}`} {...item} />
						))}
					</div>
				</div>
			</section>
		</main>
	);
}

export default App;
