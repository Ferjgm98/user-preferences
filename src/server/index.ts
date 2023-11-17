import express from "express";
import cors from "cors";
import userPreferencesRouter from "./user-preferences/user-preferences";

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.use(cors());

app.use("/api/user-preferences", userPreferencesRouter);

app.use(express.static(process.cwd() + "/dist"));
app.listen(port, () => {
	console.log("Server is up and running on port ", port);
});
