import {
	UserPreferences,
	UserStatusEnum,
} from "../../types/user-preferences.types";

const rockyObj: UserPreferences = {
	Name: "Rocky",
	"Favorite Food": "Sushi",
	"Favorite Movie": "Back to The Future",
	Status: UserStatusEnum.Inactive,
};

const miroslavObj: UserPreferences = {
	Name: "Miroslav",
	"Favorite Food": "Sushi",
	"Favorite Movie": "American Psycho",
	Status: UserStatusEnum.Active,
};

const donnyObj: UserPreferences = {
	Name: "Donny",
	"Favorite Food": "Singapore chow mei fun",
	"Favorite Movie": "The Princess Bride",
	Status: UserStatusEnum.Inactive,
};

const mattObj: UserPreferences = {
	Name: "Matt",
	"Favorite Food": "Brisket Tacos",
	"Favorite Movie": "The Princess Bride",
	Status: UserStatusEnum.Active,
};

// Create personal object
const ferObj: UserPreferences = {
	Name: "Fernando",
	"Favorite Food": "Tacos Al Pastor",
	"Favorite Movie": "Interstellar",
	Status: UserStatusEnum.Active,
};

export const userPreferences: UserPreferences[] = [
	rockyObj,
	miroslavObj,
	donnyObj,
	mattObj,
	ferObj,
];
