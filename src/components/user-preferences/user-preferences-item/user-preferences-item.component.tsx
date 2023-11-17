import * as React from "react";
import {
	UserPreferences,
	UserStatusEnum,
} from "../../../types/user-preferences.types";
import style from "./user-preferences-item.style.module.css";
import { convertIsoDateToDate } from "./user-preferenes-item.helpers";

const UserPreferencesItem: React.FC<UserPreferences> = ({
	Name,
	Status,
	Date,
	...rest
}) => {
	return (
		<div className={style["user-preferences-wrapper"]}>
			<h5 className={style["user-preferences-title"]}>{Name}</h5>
			{Object.keys(rest ?? {}).map((key) => (
				<p key={key}>
					{key}: {rest[key as keyof typeof rest]}
				</p>
			))}

			<p>Date: {convertIsoDateToDate(Date || "")}</p>

			<p
				className={`${style["user-preferences-status"]} ${
					Status === UserStatusEnum.Inactive &&
					style["user-preferences-status-inactive"]
				}`}
			>
				{Status}
			</p>
		</div>
	);
};

export default UserPreferencesItem;
