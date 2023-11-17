export enum UserStatusEnum {
	Active = "Active",
	Inactive = "Inactive",
}

export enum SortByEnum {
	ASC = "ASC",
	DESC = "DESC",
}

export type UserPreferences = {
	Name: string;
	"Favorite Food": string;
	"Favorite Movie": string;
	Date?: string;
	Status: UserStatusEnum;
};
