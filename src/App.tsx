import { useEffect, useState } from "react";
import "./App.css";
import { UserPreferences } from "./types/user-preferences.types";

function App() {
	const [userPreferences, setUserPreferences] = useState<UserPreferences[]>([]);

	useEffect(() => {
		fetch("http://localhost:3002/api/user-preferences")
			.then((response) => response.json())
			.then((data) => setUserPreferences(data));
	}, []);

	return (
		<main className="container">
			<section className="content">
				<h1 className="title">User Preferences</h1>

				<div className="user-preferences">
					{userPreferences.map((item) => (
						<div>{item.Name}</div>
					))}
				</div>
			</section>
		</main>
	);
}

export default App;
