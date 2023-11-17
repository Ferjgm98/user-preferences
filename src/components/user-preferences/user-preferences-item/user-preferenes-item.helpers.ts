export const convertIsoDateToDate = (date: string) => {
	return new Date(date).toLocaleDateString();
};
